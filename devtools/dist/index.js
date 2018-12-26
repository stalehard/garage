"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sequelize_1 = __importDefault(require("sequelize"));
const config = {
    server: {
        host: "0.0.0.0",
        port: +process.env.API_PORT || 8080,
        routes: {
            cors: true,
            files: {
                relativeTo: path_1.default.join(__dirname, "data/uploads"),
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
            operatorsAliases: sequelize_1.default.Op,
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
function getServerConfig() {
    return config.server;
}
exports.getServerConfig = getServerConfig;
function getDbConfig() {
    return config.db;
}
exports.getDbConfig = getDbConfig;
//# sourceMappingURL=index.js.map