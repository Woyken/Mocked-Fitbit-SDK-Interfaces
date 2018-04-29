interface FileStats {
    readonly mtime: Date;
    readonly size: number;
}

declare module "fs" {
    // writeFileSync(filename: string, data: ArrayBuffer | ArrayBufferView)
    // writeFileSync(filename: string, data: string, encoding: "ascii" | "utf-8")
    // writeFileSync(filename: string, data: any, encoding: "cbor" | "json")
    function writeFileSync(filename: string, data: any, encoding: "ascii" | "utf-8" | "cbor" | "json"): void;

    function readFileSync(filename: string): any;
    // readFileSync(filename: string, encoding: "ascii" | "utf-8")
    // readFileSync(filename: string, encoding: "cbor" | "json")
    function readFileSync(filename: string, encoding: "ascii" | "utf-8" | "cbor" | "json"): any;
    function renameSync(oldFilename: string, newFilename: string): void;
    function unlinkSync(filename: string): void;
    function statSync(filename: string): FileStats;
    function writeSync(fd: number, buffer: ArrayBuffer, offset?: number | undefined, length?: number | undefined, position?: number | undefined): void;
    function readSync(fd: number, buffer: ArrayBuffer, offset?: number | undefined, length?: number | undefined, position?: number | undefined): number;
    function closeSync(fd: number): void;
    function openSync(filename: string, flags: "r" | "r+" | "w" | "w+" | "a" | "a+"): number;
}