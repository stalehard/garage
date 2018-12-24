import { ServerRegisterPluginObject } from "hapi";

import Api from "./api";
import Swagger from "./swagger";
import Good from "./swagger";

export const plugins: Array<ServerRegisterPluginObject<any>> = [...Swagger, ...Good, ...Api];
