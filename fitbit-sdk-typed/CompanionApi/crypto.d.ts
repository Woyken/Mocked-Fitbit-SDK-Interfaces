declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array;

declare module "crypto" {
    /**
     * Fill an array with cryptographically strong random values.
     * @param values Array of values that will be filled with random numbers.
     */
    function getRandomValues(values: TypedArray): void;
}
