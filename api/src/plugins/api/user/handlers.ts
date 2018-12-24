import { Request } from "hapi";

import { IServerState } from "../../../interfaces";

export async function getSelfData(request: Request) {
    const state = request.server.app as IServerState;

    const { User } = state.db;

    const user = await User.create({
        name: "vasya",
    });

    return user.toJSON();
}
