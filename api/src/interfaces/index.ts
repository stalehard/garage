import { IDbInterface } from "@models";

export interface IMailer {
  sendEmail: (text: string) => Promise<void>;

  renderEmail: (text: string) => string;
}

export interface IServerState {
  db: IDbInterface;
  services: {
    mailer: IMailer;
  };
}
