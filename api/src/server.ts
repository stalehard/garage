import Hapi from "hapi";
import { IDbInterface } from "./models";

export async function init(config: Hapi.ServerOptions, db: IDbInterface): Promise<Hapi.Server> {
    const server = new Hapi.Server(config);
    return server;
}
