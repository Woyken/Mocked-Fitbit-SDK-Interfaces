declare module "cbor" {
    /**
     * Decode a CBOR-encoded buffer to a value.
     * @param cbor A byte buffer containing a CBOR-encoded value.
     */
    export function decode(cbor: ArrayBuffer | ArrayBufferView): any;
    /**
     * Encode a value (primitive or object) to a CBOR buffer.
     *
     * Mapping from JavaScript types to CBOR:
     *
     * | JS Type                        | CBOR Type                                        |
     *
     * |--------------------------------|--------------------------------------------------|
     *
     * | number or Number               | signed or unsigned integer or floating point (1) |
     *
     * | string or String               | text string (utf-8)                              |
     *
     * | boolean or Boolean             | true or false                                    |
     *
     * | null                           | null                                             |
     *
     * | undefined                      | undefined                                        |
     *
     * | ArrayBuffer or ArrayBufferView | byte string                                      |
     *
     * | Array                          | array                                            |
     *
     * | Object                         | map (with string keys)                           |
     *
     * **Other types are not allowed.**
     *
     * NOTE (1): If *Number.isInteger(value)* is *true*, the value is encoded as an integer, else it is encoded as a floating point number. Because floating point numbers may also be integers, a special wrapper object, Float, is provided. When serializing a wrapped number, the floating point type will always be used, regardless of whether *Number.isInteger(value)* returns *true* or *false*.
     *
     * For example, *cbor.encode(2.0)* will produce the encoding for a positive integer with value *2*, *cbor.encode(new cbor.Float(2.0))* will produce the encoding for a floating point number with value *2.0*.
     *
     * Wrapping a number is typically only useful for inter-operation with external systems where integers and floating point numbers are not represented the same way (a C program for example). For CBOR buffers that will be decoded by a JavaScript client, no wrapping is needed since both integers and floating point numbers are represented by the same primitive type.
     *
     * **Circular references** are not allowed.
     *
     * The serialization order of object properties to a CBOR map is not specified.
     * @param value Value to encode.
     */
    export function encode(value: any): ArrayBuffer;
    const Float: Float;
}

/**
 * Wrapper for integers that should be encoded as floating point numbers.
 */
interface Float {
    /**
     * Wrapped integer value
     */
    value: number;

    new(value: number): Float;
}
