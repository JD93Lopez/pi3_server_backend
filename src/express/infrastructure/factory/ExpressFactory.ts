import RouterExpress from '../../domain/RouterExpress'
import Server from '../server/Server'
import BiomeRouterFactory from './routers/BiomeRouterFactory'
import FlashcardRouterFactory from './routers/FlashcardRouterFactory'
import IconRouterFactory from './routers/IconRouteFactory'
import ItemRouterFactory from './routers/ItemRouterFactory'
import PlayedDayRouterFactory from './routers/PlayedDayRouterFactory'
import ThemeRouterFactory from './routers/ThemeRouteFactory'
import TopicRouterFactory from './routers/TopicRouterFactory'
import TorneoRouterFactory from './routers/TorneoRouterFactory'
import UserRouterFactory from './routers/UserRouterFactory'
import UserRouterFactoryV2 from './routers/UserRouterFactoryV2'

export default class ExpressFactory {
  public static readonly create = (): Server => {

    const flashcardRouter = FlashcardRouterFactory.create()
    const topicRouter = TopicRouterFactory.create()
    const biomeRouter = BiomeRouterFactory.create()
    const iconRouter = IconRouterFactory.get()
    const themeRouter = ThemeRouterFactory.create()
    const playedDayRouter = PlayedDayRouterFactory.create()
    const userRouter = UserRouterFactory.create()
    const torneoRouter = TorneoRouterFactory.create()
    const itemRouter = ItemRouterFactory.create()
    const userRouterV2 = UserRouterFactoryV2.create()

        // Routers versión 1 (con middleware)
    const v1Routers: RouterExpress[] = [
      flashcardRouter,
      topicRouter,
      biomeRouter,
      iconRouter,
      themeRouter,
      playedDayRouter,
      userRouter,
      torneoRouter,
      itemRouter
    ];

     // Routers versión 2 (sin middleware)
    const v2Routers: RouterExpress[] = [
      userRouterV2
    ];



    return new Server(v1Routers, v2Routers);
  }
}
