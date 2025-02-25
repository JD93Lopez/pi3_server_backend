import Server from '../server/Server'
import FlashcardRouterFactory from './routers/FlashcardRouterFactory'
import TopicRouterFactory from './routers/TopicRouterFactory'

export default class ExpressFactory {
  public static readonly create = (): Server => {

    const flashcardRouter = FlashcardRouterFactory.create()
    const topicRouter = TopicRouterFactory.create()
    // TODO: validate router
    const server = new Server([flashcardRouter, topicRouter])
    // TODO: validate server
    return  server
  }
}
