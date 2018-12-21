import * as Configs from "./config";
import { createModels } from "./models";

import * as Server from "./server";

(async () => {
    const db = createModels(Configs.getDbConfig());

    await db.sequelize.sync();

    const server = await Server.init(Configs.getServerConfig(), db);

    await server.start();
    console.log("Server started");
})();
