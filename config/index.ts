import * as path from "path";

const config = {
    server: {
        host: "0.0.0.0",
        port: +process.env.API_PORT || 8080,
        routes: {
            cors: true,
            files: {
                relativeTo: path.join(__dirname, "data/uploads"),
            },
        },
    },
};

export interface IServerConfigurations {
    port: number;
    host: string;
    routes: {
        cors: boolean,
        files: {
            relativeTo: string,
        },
    };
}

export function getServerConfig(): IServerConfigurations {
    return config.server;
}
