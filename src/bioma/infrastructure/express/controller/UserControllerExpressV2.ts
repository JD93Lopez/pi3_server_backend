import { Request, Response } from "express";
import LoginUseCasePort from "../../../domain/ports/driver/usecase/Users/loginUseCasePort";
import SendVerificationCodeUserCasePort from "../../../domain/ports/driver/usecase/Users/SendVerificationCodeUserCasePort";
import VerifyCodeUseCasePort from "../../../domain/ports/driver/usecase/Users/VerifyCodeUseCasePort";
import JWTUseCasePort from "../../../domain/ports/driver/usecase/Users/JWTUseCasePort";
import CheckUserExistsUseCasePort from "../../../domain/ports/driver/usecase/Users/CheckUserExistsUseCasePort";
import CreateUserInterface from "../../../domain/types/endpoint/Users/CreateUser";
import { CreateUserUseCasePort } from "../../../domain/ports/driver/usecase/Users/CreateUserUseCasePort";


export default class UserControllerExpressv2  {

    constructor(

        private readonly loginUserUseCase: LoginUseCasePort,
        private readonly jwtUseCase: JWTUseCasePort,
        private readonly sendVerificationCodeUseCase: SendVerificationCodeUserCasePort,
        private readonly verifyCodeUseCase: VerifyCodeUseCasePort,
        private readonly checkUserExistsUseCase: CheckUserExistsUseCasePort,
        private readonly createUserUseCase: CreateUserUseCasePort,
        
    ) {}

     async createUser(req: Request, res: Response): Promise<void> {
            
            let createUserInterface: CreateUserInterface | null = null;
    
            const body = req.body;
    
            if (!body) {
                res.status(400).json({ message: 'Bad request body' });
                return;
            }
    
            try {
                createUserInterface = body as CreateUserInterface;
            } catch (error) {
                res.status(400).json({ message: 'Bad request interface' });
                return;
            }
    
            if (!createUserInterface) {
                res.status(400).json({ message: 'Bad request interface' });
                return;
            }
    
            const user = createUserInterface.user;
            if (!user) {
                res.status(400).json({ message: 'Bad request user' });
                return;
            }
    
            try {
                const createdUserId = await this.createUserUseCase.createUser(user);
    
                if (!createdUserId) {
                    res.status(400).json({ message: 'User not created' });
                    return;
                }
                
                const tokenSesion = await this.jwtUseCase.singJWT(user.id_user, user.user_name);
                res.status(200).json({ message: 'Success', data: createdUserId, token: tokenSesion });
    
            } catch (error) {
                console.error("Error creating user:", error);
                res.status(500).json({ message: 'Internal server error' });
            }
        }

   
    async loginUser(req: Request, res: Response): Promise<void> {
        
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                res.status(400).json({ message: 'Bad request body' });
                return;
            }

            const response = await this.loginUserUseCase.login(username, password);

            if (!response) {
                res.status(401).json({ message: 'Unauthorized' });
                return;
            }

            const tokenSesion = await this.jwtUseCase.singJWT(response.getIdUser(), response.getUserName());
            res.status(200).json({ success:true, data: response, token: tokenSesion });
            
        } catch (error) {
            console.error("Error logging in user:", error);
            res.status(500).send({ message: "Internal server error", error: error });
        }
    }

    async sendVerificationCode(req: Request, res: Response): Promise<void> {
        try {
            const { email } = req.body;
            
            if (!email) {
                res.status(400).json({ message: 'Bad request body' });
                return;
            }

            const response = await this.sendVerificationCodeUseCase.execute(email);
            if (!response) {
                res.status(500).json({success:false, message: 'Error sending verification code' });
                return;
            }

            res.status(200).json({ success:true, message: 'Verification code sent successfully' });
            
        } catch (error) {
            console.error("Error sending verification code:", error);
            res.status(500).send({ message: "Internal server error", error: error });
        }
    }

    async verifyCode(req: Request, res: Response): Promise<void> {
        try {
            const { email, code } = req.body;

            if (!email || !code) {
                res.status(400).json({ message: 'Bad request body' });
                return;
            }

            const response = await this.verifyCodeUseCase.verifyCode(email, code);
            
            if (!response) {
                res.status(401).json({success:false, message: 'Unauthorized' });
                return;
            }
            res.status(200).json({ success:true, message: 'Verification code verified successfully' });
            
        } catch (error) {
            console.error("Error verifying code:", error);
            res.status(500).send({ message: "Internal server error", error: error });
        }
    }


    async isTokenValid(req: Request, res: Response): Promise<void> {
        try {
            const authHeader = req.headers.authorization;

            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                res.status(400).json({ message: 'Authorization header is missing or malformed.' });
                return;
            }

            const token = authHeader.split(' ')[1];

            if (!token) {
                res.status(400).json({ message: 'Token is missing.' });
                return;
            }
            const isValid = await this.jwtUseCase.validateToken(token);

            if (!isValid) {
                res.status(401).json({ success: false, message: 'Invalid or expired token.' });
                return;
            }

            res.status(200).json({ success: true, message: 'Token is valid.' });
        } catch (error) {
            console.error("Error validating token:", error);
            res.status(500).json({ message: "Internal server error", error: error });
        }
    }
    public async checkUserExists(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body;
    
            if (!body || !body.user_name) {
                res.status(400).json({ message: 'Bad request: missing user_name field' });
                return;
            }
    
            const user_name = body.user_name;
    
            const exists = await this.checkUserExistsUseCase.checkUserExists(user_name);
    
            res.status(200).json({ message: 'Success', data: exists });
        } catch (error: any) {
            console.error('Error checking user existence:', error);
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    }

}