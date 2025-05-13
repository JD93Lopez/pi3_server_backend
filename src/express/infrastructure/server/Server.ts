import cors from 'cors';
import express, { Application } from 'express';
import path from 'path';
import RouterExpress from '../../domain/RouterExpress';
import AuthMiddleware from '../authMiddleware';
import AuthMiddlewareFactory from '../../../bioma/infrastructure/factory/repository/AuthMiddlewareFactory';


export default class Server {
  private readonly app: Application;
  private readonly authMiddleware: AuthMiddleware;


  constructor(
    private readonly routersV1: RouterExpress[],
    private readonly routersV2: RouterExpress[]
  ) {
    this.app = express();
    this.authMiddleware = AuthMiddlewareFactory.create();
    this.statics();
    this.config();
    this.routes();
  }

  public config = (): void => {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  };

  public statics = (): void => {
    this.app.use(express.static(path.resolve(__dirname, '../client/public')));
  };

  public routes = (): void => {

    // ✅ Aplicamos middleware global solo a V1
    this.app.use('/api/v1.0/middleware', this.authMiddleware.isTokenValid.bind(this.authMiddleware));


    // API versión 1.0 (protegida)
    this.routersV1.forEach((routerConcreto) => {
      this.app.use('/api/v1.0/middleware', cors(), routerConcreto.router);
    });

    // API versión 2.0 (sin middleware)
    this.routersV2.forEach((routerConcreto) => {
      this.app.use('/api/v1.0/router', cors(), routerConcreto.router);
    });
  };

  public start = (): void => {
    const PORT = process.env['PORT'] ?? 3000;
    const HOST = process.env['HOST'] ?? 'localhost';
    this.app.listen(PORT, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`);
    });
  };
}
