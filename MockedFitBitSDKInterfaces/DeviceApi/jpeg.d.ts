interface JpegDecodeOptions {
    delete?: boolean | undefined;
    overwrite?: boolean | undefined;
}

declare module "jpeg" {
    function decodeSync(filename: string, outputFilename: string, options?: JpegDecodeOptions | undefined): void;
}