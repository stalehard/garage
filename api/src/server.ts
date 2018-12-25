import { IServerState } from "@interfaces";
import { IDbInterface } from "@models";
import Hapi from "hapi";
import { plugins } from "./plugins";
import initService from "./services";

export async function init(config: Hapi.ServerOptions, db: IDbInterface): Promise<Hapi.Server> {
    const server = new Hapi.Server(config);

    server.app = {
        db,
        services: initService(db),
    } as IServerState;

    await server.register(plugins);

    return server;
}
