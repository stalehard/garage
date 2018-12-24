import { Request } from "hapi";

import { IServerState } from "@interfaces";

export async function getSelfData(request: Request) {
    const state = request.server.app as IServerState;

    const { User } = state.db.models;

    const user = await User.create({
        name: "vasya",
    });

    await user.createExam();

    return user.toJSON();
}
