import { Request, Response, NextFunction } from 'express'
import JWTUseCase from '../../bioma/application/usecase/Users/JWTUseCase'

export default class AuthMiddleware {

    constructor(
        private readonly jwtUseCase: JWTUseCase
    ) {}
   
    async isTokenValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

      const authHeader = req.headers.authorization

    
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
         res.status(400).json({ message: 'Authorization header is missing or malformed.' })
         return
      }

      const token = authHeader.split(' ')[1]


      if (!token) {
         res.status(400).json({ message: 'Token is missing.' })
         return
      }

  
      const isValid = await this.jwtUseCase.validateToken(token)


      if (!isValid) {
         res.status(401).json({ success: false, message: 'Invalid or expired token.' })
         return
      }

      next();

    } catch (error) {
      console.error("Error validating token:", error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ message: "Internal server error", error: errorMessage })
    }
  }
}
