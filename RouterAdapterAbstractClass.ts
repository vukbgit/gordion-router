import EventEmitter from 'events';
import http from 'http';
import {Route} from "./router-declarations";

/**
 * Abstract class for a Router component
 */
abstract class RouterAdapterAbstractClass extends EventEmitter {
  /**
   * Constructor
   */
  constructor() {
    super()
  }
  /**
   * Loads routes
   * @param routes array of routes
   * @returns void
   */
  abstract loadRoutes(routes: Route[]): void
  /**
   * Resolves a route
   * @param req request
   * @param res response
   * @returns void
   */
  abstract  resolveRoute(req: http.IncomingMessage, res: http.ServerResponse): void
}
export default RouterAdapterAbstractClass