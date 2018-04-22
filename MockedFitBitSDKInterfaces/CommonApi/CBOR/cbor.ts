export class CBOR {
    decode(cbor: ArrayBuffer | ArrayBufferView) {
    }
    encode(value: any): ArrayBuffer {
        throw new Error("Method not implemented.");
    }

    static Float = class {
        constructor(value: number){
            this.value = value;
        }

        value: number;
    };
}