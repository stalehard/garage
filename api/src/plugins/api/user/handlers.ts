import { Request } from "hapi";

import { IServerState } from "../../../interfaces";

export async function getSelfData(request: Request) {
    const state = request.server.app as IServerState;

    console.log(state.db.User);

    return {
        data: {
            id: 1111,
            profile: {
                firstName: "Vasya",
            },
        },
    };
}
