import * as Hapi from "hapi";
import * as Configs from "./config";

export async function init(): Promise<Hapi.Server> {
    try {
        const server = new Hapi.Server(Configs.getServerConfig());

        return server;
    } catch (err) {
        console.log("Error starting server: ", err);
        process.env.NODE_ENV === "production"
        ? process.exit(1)
        : process.kill(process.pid, "SIGUSR2");
    }
}
