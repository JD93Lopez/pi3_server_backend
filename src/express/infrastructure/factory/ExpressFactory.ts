import Server from '../server/Server'
import BiomeRouterFactory from './routers/BiomeRouterFactory'
import FlashcardRouterFactory from './routers/FlashcardRouterFactory'
import IconRouterFactory from './routers/IconRouteFactory'
import PlayedDayRouterFactory from './routers/PlayedDayRouterFactory'
import ThemeRouterFactory from './routers/ThemeRouteFactory'
import TopicRouterFactory from './routers/TopicRouterFactory'
import UserRouterFactory from './routers/UserRouterFactory'

export default class ExpressFactory {
  public static readonly create = (): Server => {

    const flashcardRouter = FlashcardRouterFactory.create()
    const topicRouter = TopicRouterFactory.create()
    const biomeRouter = BiomeRouterFactory.create()
    const iconRouter = IconRouterFactory.get()
    const themeRouter = ThemeRouterFactory.create()
    const playedDayRouter = PlayedDayRouterFactory.create()
    const userRouter = UserRouterFactory.create()
    // TODO: validate routerF
    const server = new Server([flashcardRouter, topicRouter, biomeRouter, iconRouter, themeRouter, playedDayRouter, userRouter])
    // TODO: validate server
    return  server
  }
}
