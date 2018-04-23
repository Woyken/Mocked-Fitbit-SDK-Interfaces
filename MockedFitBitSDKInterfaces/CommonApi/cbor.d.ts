declare class CBOR {
    decode(cbor: ArrayBuffer | ArrayBufferView): any;
    encode(value: any): ArrayBuffer;
}

declare module "cbor" {
    var cbor: CBOR;
    class cbor_Float {
        constructor(value: number);
        value: number;
    }
}