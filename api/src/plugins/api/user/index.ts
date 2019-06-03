import Hapi, { Plugin, ServerRegisterPluginObject } from "hapi";

import routes from "./routes";

const User: Plugin<void> = {
  pkg: {
    name: "user",
    version: "0.1.0",
  },
  register: (server: Hapi.Server) => {
    server.route(routes);
  },
};

const plugin: ServerRegisterPluginObject<void> = {
  plugin: User,
};

export default plugin;
