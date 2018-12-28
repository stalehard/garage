import Hapi, { Plugin, ServerRegisterPluginObject } from "hapi";

import User from "./user";

const Api: Plugin<any> = {
    pkg: {
        name: "api",
        version: "0.1.0",
    },
    register: async (server: Hapi.Server, options: any) => {
        const modules: Array<ServerRegisterPluginObject<any>> = [User];

        await server.register(modules, options);

        server.ext("onPreResponse", (request, h) => {
          const response = request.response;

          if (response instanceof Error) {
            console.log(response);
          }

          return h.continue;
        });
    },
};

const plugins: Array<ServerRegisterPluginObject<any>> = [
    {
        plugin: Api,
        options: {
            routes: {
                prefix: "/api",
            },
        },
    },
];

export default plugins;
