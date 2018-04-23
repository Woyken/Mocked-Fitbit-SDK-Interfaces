//Console
interface Console {
    assert(assertion: boolean, message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    trace(): void;
    warn(message?: any, ...optionalParams: any[]): void;
}

declare var console: Console;
//Console End
