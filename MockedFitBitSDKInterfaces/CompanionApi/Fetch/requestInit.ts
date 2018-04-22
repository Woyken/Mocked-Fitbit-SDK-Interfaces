import { Headers } from "./headers";

export interface RequestInit {
    body: string | undefined;
    headers: Headers | { key: string; } | undefined;
    method: string | undefined;
}