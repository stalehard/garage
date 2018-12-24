import Hapi, { Plugin, ServerRegisterPluginObject } from "hapi";

import routes from "./routes";

const User: Plugin<void> = {
    pkg: {
        name: "user",
        version: "0.1.0",
    },
    register: async (server: Hapi.Server, options: any) => {
        server.route(routes);
    },
};

const plugin: ServerRegisterPluginObject<any> = {
    plugin: User,
};

export default plugin;
