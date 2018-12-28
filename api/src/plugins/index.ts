import { ServerRegisterPluginObject } from "hapi";

import Api from "./api";
import Good from "./good";
import Pages from "./pages";
import Swagger from "./swagger";
import Vision from "./vision";

export const plugins: Array<ServerRegisterPluginObject<any>> = [...Vision, ...Swagger, ...Good, ...Api, ...Pages];
