import Server from '../server/Server'
import BiomeRouterFactory from './routers/BiomeRouterFactory'
import FlashcardRouterFactory from './routers/FlashcardRouterFactory'
import IconRouterFactory from './routers/IconRouteFactory'
import TopicRouterFactory from './routers/TopicRouterFactory'

export default class ExpressFactory {
  public static readonly create = (): Server => {

    const flashcardRouter = FlashcardRouterFactory.create()
    const topicRouter = TopicRouterFactory.create()
    const biomeRouter = BiomeRouterFactory.create()
    const iconRouter = IconRouterFactory.get()
    // TODO: validate router
    const server = new Server([flashcardRouter, topicRouter, biomeRouter, iconRouter])
    // TODO: validate server
    return  server
  }
}
