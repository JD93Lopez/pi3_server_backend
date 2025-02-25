import { CreateTopicUseCase } from "../../../../bioma/application/usecase/Topics/CreateTopicUseCase"
import TopicControllerExpress from "../../../../bioma/infrastructure/express/controller/TopicControllerExpress"
import TopicRouterExpress from "../../../../bioma/infrastructure/express/router/TopicRouterExpress"
import CreateTopicServiceFactory from "../../../../bioma/infrastructure/factory/service/CreateTopicServiceFactory"
import RouterExpress from "../../../domain/RouterExpress"

export default class TopicRouterFactory {
    public static readonly create = (): RouterExpress => {
        const createTopicService = CreateTopicServiceFactory.create()
        // TODO: validate service
        const createTopicUseCase = new CreateTopicUseCase(createTopicService)
        // TODO: validate use case
        const flashcardController = new TopicControllerExpress(createTopicUseCase)
        // TODO: validate controller
        const flashcardRouter = new TopicRouterExpress(flashcardController)
        // TODO: validate router
        return  flashcardRouter
    }
}