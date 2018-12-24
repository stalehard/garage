import * as Configs from "./config";
import { createModels } from "./models";

import * as Server from "./server";

(async () => {
    try {
        console.log(process.cwd());

        const db = createModels(Configs.getDbConfig());

        await db.sequelize.sync();

        const server = await Server.init(Configs.getServerConfig(), db);

        await server.start();
        console.log("Server started");
    } catch (err) {
        console.log("Error starting server: ", err);
        process.env.NODE_ENV === "production"
        ? process.exit(1)
        : process.kill(process.pid, "SIGUSR2");
    }
})();
