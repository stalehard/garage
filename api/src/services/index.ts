import { IDbInterface } from "@models";
import initMailer from "./mailer";

const initService = (db: IDbInterface) => {
    return {
        mailer: initMailer(db),
    };
};

export type InitService<T> = (db: IDbInterface) => T;

export default initService;
