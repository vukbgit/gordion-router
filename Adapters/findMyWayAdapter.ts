import http from 'http';
import RouterFactory from "find-my-way";
import DIContainer from "../../DIContainer";
import RouterAdapterAbstractClass from "../RouterAdapterAbstractClass";
import {Route} from "../router-declarations";

let router = RouterFactory();
/**
 * Concrete Router class based on find-my-way router
 */
class Router extends RouterAdapterAbstractClass {
  /**
   * Find-my-way router object
   */
  router: any
  /**
   * @param router find-my-way router object
   * @returns void
   */
  constructor(router: any) {
    super()
    this.router = router;
  }
  /**
   * Loads routes
   * @param routes array of routes
   * @returns void
   */
   loadRoutes(routes: Route[]) {
    for (const routeDefinition of routes) {
      const methods = <RouterFactory.HTTPMethod[]>routeDefinition.methods
      router.on(methods, routeDefinition.route, DIContainer.container[routeDefinition.handler][routeDefinition.action])
    }
  }
  /**
   * Resolves a route
   * @param req request
   * @param res response
   * @returns void
   */
   resolveRoute(req: http.IncomingMessage, res: http.ServerResponse) {
    this.router.lookup(req, res)
  }
}
export default new Router(router)