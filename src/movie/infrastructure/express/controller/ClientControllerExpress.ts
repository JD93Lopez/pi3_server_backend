import { Request, Response } from 'express'

import ClientVerifyUseCasePort from '../../../domain/port/driver/usecase/ClientVerifyUseCasePort'
import ClientCreateUseCasePort from '../../../domain/port/driver/usecase/ClientCreateUseCasePort'
import ClientControllerExpressPort from '../../../domain/port/driver/controller/ClientControllerExpressPort'

export default class ClientControllerExpress
  implements ClientControllerExpressPort
{
  constructor(
    private readonly clientVerifyUseCase: ClientVerifyUseCasePort,
    private readonly clientCreateUseCase: ClientCreateUseCasePort
  ) {}

  public async clientVerify(req: Request, res: Response): Promise<void> {
    const request = req.body['identificacion']
    // TODO: validate ALL
    const code = await this.clientVerifyUseCase.getClientVerify(request)

    res.status(200).json({ message: 'Conexión exitosa', data: code })
  }

  public async clientCreate(req: Request, res: Response): Promise<void> {
    const request = req.body
    const clientId = await this.clientCreateUseCase.createClient(request)
    res.status(200).json({ message: 'Conexión exitosa', data: clientId })
  }
}
