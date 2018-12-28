import Hapi, { Plugin, ServerRegisterPluginObject } from "hapi";
import * as Mustache from "mustache";
import Path from "path";

import Start from "./start";

interface IServerWithViews extends Hapi.Server {
    views: (options: any) => void;
}

const Pages: Plugin<any> = {
    pkg: {
        name: "pages",
        version: "0.1.0",
    },
    register: async (server: IServerWithViews, options: any) => {
        const modules: Array<ServerRegisterPluginObject<any>> = [Start];

        await server.register(modules, options);

        server.views({
            engines: {
                html: {
                    compile: (template: string) => {
                        Mustache.parse(template);

                        return (context: any) => {
                            return Mustache.render(template, context);
                        };
                    },
                },
            },
            compileOptions: {}, // optional,
            path: Path.join(process.cwd(), "views"),
        });
    },
};

const plugins: Array<ServerRegisterPluginObject<any>> = [
    {
        plugin: Pages,
        options: {
            routes: {
                prefix: "/pages",
            },
        },
    },
];

export default plugins;
