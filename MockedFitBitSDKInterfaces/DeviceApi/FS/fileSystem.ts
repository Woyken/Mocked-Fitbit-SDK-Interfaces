import { FileStats } from "./fileStats";

// writeFileSync(filename: string, data: ArrayBuffer | ArrayBufferView)
// writeFileSync(filename: string, data: string, encoding: "ascii" | "utf-8")
// writeFileSync(filename: string, data: any, encoding: "cbor" | "json")

export function writeFileSync(filename: string, data: any, encoding: "ascii" | "utf-8" | "cbor" | "json"): void {
}

// readFileSync(filename: string)
// readFileSync(filename: string, encoding: "ascii" | "utf-8")
// readFileSync(filename: string, encoding: "cbor" | "json")

export function readFileSync(filename: string, encoding: "ascii" | "utf-8" | "cbor" | "json"): void {
}

export function renameSync(oldFilename: string, newFilename: string): void {
}

export function unlinkSync(filename: string): void {
}

export function statSync(filename: string): FileStats {
    throw new Error("Method not implemented.");
}

export function writeSync(fd: number, buffer: ArrayBuffer, offset?: number | undefined, length?: number | undefined, position?: number | undefined): void {
}

export function readSync(fd: number, buffer: ArrayBuffer, offset?: number | undefined, length?: number | undefined, position?: number | undefined): void {
}

export function closeSync(fd: number): void {
}

export function openSync(filename: string, flags: "r" | "r+" | "w" | "w+" | "a" | "a+"): number {
    throw new Error("Method not implemented.");
}


