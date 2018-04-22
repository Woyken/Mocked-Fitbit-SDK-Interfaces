import { Body } from "./body";

export interface Response extends Body {
    readonly body: null;
    readonly headers: Headers;
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly url: string;
}