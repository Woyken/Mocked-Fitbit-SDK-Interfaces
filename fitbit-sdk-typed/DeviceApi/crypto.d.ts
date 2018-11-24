interface Algorithm {
    /**
     * Algorithm Names Currently supported names are: "SHA-256"
     */
    name: string;
}

interface SubtleCrypto {
    digest(algorithm: string | Algorithm, data: ArrayBuffer | ArrayBufferView): Promise<string>;
}
