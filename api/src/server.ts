import Hapi from "hapi";
import { IDbInterface } from "./models";

export async function init(config: Hapi.ServerOptions, db: IDbInterface): Promise<Hapi.Server> {
    try {
        const server = new Hapi.Server(config);

        return server;
    } catch (err) {
        console.log("Error starting server: ", err);
        process.env.NODE_ENV === "production"
        ? process.exit(1)
        : process.kill(process.pid, "SIGUSR2");
    }
}
