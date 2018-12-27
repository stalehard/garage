import { getDbConfig } from "./index";

const {
    database,
    username,
    password,
    options,
} = getDbConfig();

export = { database, username, password, ...options };
