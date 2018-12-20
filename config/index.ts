import path from "path";
import Sequelize from "sequelize";

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
    db: {
        database: process.env.DB_DATABASE,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        options: {
          host: process.env.DB_HOST || "127.0.0.1",
          port: process.env.DB_PORT || "5432",
          dialect: "postgres",
          operatorsAliases: Sequelize.Op,
          pool: {
            max: 100,
            min: 10,
            acquire: 20000,
            idle: 20000,
          },
          define: {
            timestamps: false,
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

export interface IDbConfigurations {
    database: string;
    username: string;
    password: string;
    options: {
        host: string,
        port: string,
        dialect: string,
        operatorsAliases: any,
        pool: {
            max: number,
            min: number,
            acquire: number,
            idle: number,
        },
        define: {
            timestamps: boolean,
        },
    };
}

export function getServerConfig(): IServerConfigurations {
    return config.server;
}

export function getDbConfig(): IDbConfigurations {
    return config.db;
}
