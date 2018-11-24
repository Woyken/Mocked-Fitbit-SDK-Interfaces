interface Response extends Body {
    readonly body: null;
    readonly headers: Headers;
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly url: string;
}

interface RequestInit {
    body?: string;
    headers?: Headers | { [key: string]: string };
    method?: string;
}

interface Request extends Body {
    readonly headers: Headers;
    readonly method: string;
    readonly url: string;
}

type RequestInfo = string | Request;

interface Body {
    arrayBuffer(): Promise<ArrayBuffer>;
    json(): Promise<any>;
    text(): Promise<string>;
}

type ResponseBodyInit = string;

type BodyInit = string;

interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
}

type HeadersInit = Headers | { [key: string]: string };

/**
 * In SDK documentation it's defined as:
 *
 * ```fetch(input: RequestInit): Promise<Response>```
 *
 * Although it seems like you pass parameters just like in node (from examples), so typing it like node's fetch.
 * @param url
 * @param init
 */
declare function fetch(url: Request | string, init?: RequestInit): Promise<Response>;
