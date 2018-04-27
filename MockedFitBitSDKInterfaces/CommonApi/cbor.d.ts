interface Float {
    value: number;
}

interface FloatConstructor {
    new(value: number): Float;
}

declare module "cbor" {
    export function decode(cbor: ArrayBuffer | ArrayBufferView): any;
    export function encode(value: any): ArrayBuffer;
    const Float: FloatConstructor;
}