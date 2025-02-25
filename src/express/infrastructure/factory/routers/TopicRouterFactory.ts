import { CreateTopicUseCase } from "../../../../bioma/application/usecase/Topics/CreateTopicUseCase"
import { GetTopicByBiomeUseCase } from "../../../../bioma/application/usecase/Topics/GetTopicByBiomeUseCase"
import TopicControllerExpress from "../../../../bioma/infrastructure/express/controller/TopicControllerExpress"
import TopicRouterExpress from "../../../../bioma/infrastructure/express/router/TopicRouterExpress"
import CreateTopicServiceFactory from "../../../../bioma/infrastructure/factory/service/CreateTopicServiceFactory"
import TopicByBiomeRetrieverServiceFactory from "../../../../bioma/infrastructure/factory/service/TopicByBiomeRetrieverServiceFactory"
import RouterExpress from "../../../domain/RouterExpress"

export default class TopicRouterFactory {
    public static readonly create = (): RouterExpress => {
        const createTopicService = CreateTopicServiceFactory.create()
        const getTopicByBiomeService = TopicByBiomeRetrieverServiceFactory.create()
        // TODO: validate service
        const createTopicUseCase = new CreateTopicUseCase(createTopicService)
        const getTopicByBiomeUseCase = new GetTopicByBiomeUseCase(getTopicByBiomeService)
        // TODO: validate use case
        const flashcardController = new TopicControllerExpress(createTopicUseCase, getTopicByBiomeUseCase)
        // TODO: validate controller
        const flashcardRouter = new TopicRouterExpress(flashcardController)
        // TODO: validate router
        return  flashcardRouter
    }
}