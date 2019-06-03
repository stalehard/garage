import { Request } from "hapi";

import { IServerState } from "@interfaces";

export async function getSelfData(request: Request) {
  const state = request.server.app as IServerState;
  const { mailer } = state.services;

  await mailer.sendEmail("Vasya");

  return {};
}
