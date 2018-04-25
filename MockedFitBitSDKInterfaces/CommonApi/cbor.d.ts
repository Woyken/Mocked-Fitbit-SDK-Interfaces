declare module "cbor" {
    export function decode(cbor: ArrayBuffer | ArrayBufferView): any;
    export function encode(value: any): ArrayBuffer;
    export function Float(value: number): undefined;
}