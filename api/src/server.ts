import { IServerState } from "@interfaces";
import { IDbInterface } from "@models";
import Hapi from "hapi";
import { plugins } from "./plugins";

export async function init(config: Hapi.ServerOptions, db: IDbInterface): Promise<Hapi.Server> {
    const server = new Hapi.Server(config);

    const state: IServerState = {
        db,
    };

    server.app = state;

    await server.register(plugins);

    return server;
}
