import { ServerRegisterPluginObject } from "hapi";

import * as Vision from "vision";

const plugins: Array<ServerRegisterPluginObject<any>> = [
  {
    plugin: Vision,
  },
];

export default plugins;
