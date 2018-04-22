import { Body } from "./body";
import { Headers } from "./headers";

export interface Request extends Body {
    readonly headers: Headers;
    readonly method: string;
    readonly url: string;
}