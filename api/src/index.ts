import * as Configs from "config";
import { createModels } from "models";

import * as Server from "./server";

(async () => {
    const db = createModels(Configs.getDbConfig());

    const server = await Server.init();

    await server.start();
    console.log("Server started");
})();
