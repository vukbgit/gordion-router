var glob = require("glob")
import { Route } from "./router-declarations";
import router from "./Adapters/findMyWayAdapter";
//search routes files
glob('src/**/routes.json', {}, async (err: Error, files: string[]) => {
  //loop routes files
  for(let i = 0; i < files.length; i++) {
    const file = files[i]
    //require routes file
    const routes = await require('../../' + file)
    //load routes
    router.loadRoutes(routes);
  }
  //broadcast
  router.emit("routes-loaded")
})
//export router
export default router
