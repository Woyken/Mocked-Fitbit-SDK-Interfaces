declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array;

declare module "crypto" {
    function getRandomValues(values: TypedArray): void;
}