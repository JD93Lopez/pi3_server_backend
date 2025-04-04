import { CreateTopicUseCase } from "../../../../bioma/application/usecase/Topics/CreateTopicUseCase"
import DeleteTopicUseCase from "../../../../bioma/application/usecase/Topics/DeleteTopicUseCase"
import { GetTopicByBiomeUseCase } from "../../../../bioma/application/usecase/Topics/GetTopicByBiomeUseCase"
import UpdateTopicUseCase from "../../../../bioma/application/usecase/Topics/UpdateTopicUseCase"
import TopicControllerExpress from "../../../../bioma/infrastructure/express/controller/TopicControllerExpress"
import TopicRouterExpress from "../../../../bioma/infrastructure/express/router/TopicRouterExpress"
import CreateTopicServiceFactory from "../../../../bioma/infrastructure/factory/service/Topics/CreateTopicServiceFactory"
import TopicByBiomeRetrieverServiceFactory from "../../../../bioma/infrastructure/factory/service/Topics/TopicByBiomeRetrieverServiceFactory"
import TopicDeleteServiceFactory from "../../../../bioma/infrastructure/factory/service/Topics/TopicDeleteServiceFactory"
import TopicUpdateServiceFactory from "../../../../bioma/infrastructure/factory/service/Topics/TopicUpdateFactory"
import RouterExpress from "../../../domain/RouterExpress"

export default class TopicRouterFactory {
    public static readonly create = (): RouterExpress => {
        const createTopicService = CreateTopicServiceFactory.create()
        const getTopicByBiomeService = TopicByBiomeRetrieverServiceFactory.create()
        // TODO: validate service
        const createTopicUseCase = new CreateTopicUseCase(createTopicService)
        const getTopicByBiomeUseCase = new GetTopicByBiomeUseCase(getTopicByBiomeService)
        // TODO: validate use case

        // ------ DELETE TOPIC -------
        const deleteTopicService = TopicDeleteServiceFactory.create()
        const deleteTopicUseCase = new DeleteTopicUseCase(deleteTopicService)

        // ------ UPDATE TOPIC -------
        const updateTopicService = TopicUpdateServiceFactory.create()
        const updateTopicUseCase = new UpdateTopicUseCase(updateTopicService)

        const flashcardController = new TopicControllerExpress(createTopicUseCase, getTopicByBiomeUseCase, deleteTopicUseCase, updateTopicUseCase)
        // TODO: validate controller
        const topicRouter = new TopicRouterExpress(flashcardController)
        // TODO: validate router
        return  topicRouter
    }
}