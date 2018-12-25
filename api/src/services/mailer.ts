import { IMailer } from "@interfaces";
import { IDbInterface } from "@models";

const initMailer = (db: IDbInterface) => {
  return {
        async sendEmail(text: string): Promise<void> {
            const { User } = db.models;

            const user = await User.create({
                name: text,
            });

            console.log(`Send email: ${JSON.stringify(user.toJSON())}`);
        },

        renderEmail(text: string): string {
            return `email body text`;
        },
  } as IMailer;
};

export default initMailer;
