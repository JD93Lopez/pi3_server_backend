import RouterExpress from "../../../../express/domain/RouterExpress"
import { TopicControllerExpressPort } from "../../../domain/ports/driver/controller/TopicControllerExpressPort"
import { TopicRouterExpressPort } from "../../../domain/ports/driver/router/TopicRouterExpressPort"

export default class TopicRouterExpress extends RouterExpress implements TopicRouterExpressPort {
  constructor(
    private readonly topicController: TopicControllerExpressPort
  ) {
    super()
    this.routes()
  }

  public routes = (): void => {
    this.getTopicRoutes()
  }

  public getTopicRoutes = (): void => {
    this.router.post(
      '/v1.0/topic/creation',
      this.topicController.createTopic.bind(this.topicController)
    ),
    this.router.post(
      '/v1.0/topic/biome',
      this.topicController.getTopics.bind(this.topicController)
    ),
    this.router.delete(
      '/v1.0/topic/delete',
      this.topicController.deleteTopic.bind(this.topicController)
    )

  }
}