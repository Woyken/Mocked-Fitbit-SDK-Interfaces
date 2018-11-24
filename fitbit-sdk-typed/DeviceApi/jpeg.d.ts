interface JpegDecodeOptions {
    /**
     * Indicates whether the jpeg file should be deleted after a successful decode. If set to *true*, the operation will delete the jpeg file on success. If set to *false* or isn't defined, the jpeg file will not be deleted.
     */
    delete?: boolean;
    /**
     * Indicates whether the txi file should be overwritten if it already exists. If set to *true*, the operation will overwrite the txi file if it already exists. If set to *false* or isn't defined, the decode will fail if the output file already exists.
     */
    overwrite?: boolean;
}

declare module "jpeg" {
    /**
     * Decode a jpeg file to a native TXI image file
     * @param filename The name of the jpeg file to decode.
     * @param outputFilename The name of a txi file to write to.
     * @param options Options decoding options.
     */
    function decodeSync(filename: string, outputFilename: string, options?: JpegDecodeOptions): void;
}
