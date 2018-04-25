declare module "cbor" {
    export function decode(cbor: ArrayBuffer | ArrayBufferView): any;
    export function encode(value: any): ArrayBuffer;
    class Float {
        constructor(value: number);
        value: number;
    }
}