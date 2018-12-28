import { Request, ResponseToolkit } from "hapi";

import { IServerState } from "@interfaces";

interface IResponseWithView extends ResponseToolkit {
    view: (name: string) => any;
}

const routes = [
    {
        method: "GET",
        path: "/start",
        config: {
        //   validate: input.GetCurrentPayload,
        //   response: output.AuthInfo,
        },
        handler: async (request: Request, h: IResponseWithView) => {
            const state = request.server.app as IServerState;

            return h.view("start");
        },
    },
];

export default routes;
