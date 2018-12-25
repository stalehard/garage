import { ServerRegisterPluginObject } from "hapi";

import Api from "./api";
import Good from "./good";
import Swagger from "./swagger";

export const plugins: Array<ServerRegisterPluginObject<any>> = [...Swagger, ...Good, ...Api];
