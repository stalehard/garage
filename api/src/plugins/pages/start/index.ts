import Hapi, { Plugin, ServerRegisterPluginObject } from "hapi";

import routes from "./routes";

const Start: Plugin<void> = {
  pkg: {
    name: "start",
    version: "0.1.0",
  },
  register: (server: Hapi.Server) => {
    server.route(routes);
  },
};

const plugin: ServerRegisterPluginObject<void> = {
  plugin: Start,
};

export default plugin;
