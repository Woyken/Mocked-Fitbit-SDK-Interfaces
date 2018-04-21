export class CBOR {
    decode(cbor: ArrayBuffer | ArrayBufferView) {
    }
    encode(value: any): ArrayBuffer {
        throw new Error("Method not implemented.");
    }

    static Float = class {
        value: number;
    };
}