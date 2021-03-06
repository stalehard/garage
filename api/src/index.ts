import resolvePath from "module-alias";
resolvePath();

import * as Configs from "@config";
import { createModels } from "@models";

import * as Server from "./server";

(async () => {
  try {
    const db = createModels(Configs.getDbConfig());

    await db.sequelize.sync({ force: true });

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
