import { IMailer } from "@interfaces";
import { InitService } from "./index";

const initMailer: InitService<IMailer> = (db) => {
  const service: IMailer = {
    sendEmail: async (text: string) => {
        const { User } = db.models;

        const user = await User.create({
            name: text,
        });
    },

    renderEmail: (text: string) => {
        return `email body text`;
    },
  };

  return service;
};

export default initMailer;
