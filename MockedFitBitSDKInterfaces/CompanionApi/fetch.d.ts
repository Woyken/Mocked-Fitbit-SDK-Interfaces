interface RequestInit {
    body?: string | undefined;
    headers?: Headers | {[key: string]: string} | undefined;
    method?: string | undefined;
}

interface Request extends Body {
    readonly headers: Headers;
    readonly method: string;
    readonly url: string;
}

interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
}

interface Body {
    arrayBuffer(): Promise<ArrayBuffer>;
    json(): Promise<any>;
    text(): Promise<string>;
}

interface Response extends Body {
    readonly body: null;
    readonly headers: Headers;
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly url: string;
}

//declare function fetch(input: RequestInit): Promise<Response>;
declare function fetch(input?: Request | string, init?: RequestInit): Promise<Response>;