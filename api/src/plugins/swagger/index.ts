import { ServerRegisterPluginObject } from "hapi";

import * as HapiSwagger from "hapi-swagger";
import * as Inert from "inert";

const plugins: Array<ServerRegisterPluginObject<any>> = [
  {
    plugin: Inert,
  },
  {
    plugin: HapiSwagger,
    options: {
      info: {
        title: "Frontliner API",
        version: "0.1.0",
      },
      schemes: ["http"],
      //   host: isProd ? process.env.SERVER_NAME : null,
      cors: true,
      documentationPath: "/docs",
      grouping: "tags",
      securityDefinitions: {
        jwt: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
      sortEndpoints: "path",
      jsonEditor: true,
      deReference: true,
    },
  },
];

export default plugins;
