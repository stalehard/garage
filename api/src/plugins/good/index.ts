import * as Good from "good";
import { ServerRegisterPluginObject } from "hapi";

const plugins: Array<ServerRegisterPluginObject<any>> = [
    {
        plugin: Good,
        options: {
            ops: {
                interval: 1000,
            },
            reporters: {
                myConsoleReporter: [
                    {
                        module: "good-squeeze",
                        name: "Squeeze",
                        args: [{ log: "*", response: "*", request: "*" }],
                    },
                    {
                        module: "good-console",
                    },
                    "stdout",
                ],
            },
        },
    },
];

export default plugins;
