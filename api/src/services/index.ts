import { IDbInterface } from "@models";
import initMailer from "./mailer";

const initService = (db: IDbInterface) => {
    return {
        mailer: initMailer(db),
    };
};

export default initService;
