declare module "image" {
    var image: Image;
}

interface Image {
    /**
     * Height of the image, in pixels.
     */
    readonly height: number;
    /**
     * Width of the image, in pixels.
     */
    readonly width: number;

    /**
     * Export an image to TXI format. Export an image to JPEG format. Export an image to a given format.
     * @param format
     * @param options
     */
    export(format: "image/vnd.fitbit.txi", options?: TxiExportOptions): Promise<any>;
}

/**
 * Options for exporting an image to JPEG
 */
interface JpegExportOptions {
    /**
     * Specifies the background color to alpha-blend with the image. Defaults to black.
     */
    readonly background?: string;
    /**
     * Specifies a desired quality level, between 0 and 100, where 0 is the lowest quality, and 100 the highest quality. There is typically a tradeoff between the encoded size and the quality, whereby the higher the quality, the larger the size. This value is subjective and depends on the image content as well as the specific image codec used, so it should not be used as more than a hint to guide the compression algorithm. If not specified, the default quality setting is 85.
     */
    readonly quality?: number;
}

/**
 * Options for exporting an image to TXI
 */
interface TxiExportOptions {
    /**
     * Allows alpha blending of the image with a solid background color.
     *
     * If set to a color, pixels will be alpha-blended with this color. If not set, pixels will retain their alpha value.
     */
    readonly background?: string;
}

/**
 * Extensible list of the MIME types we support Image instance creation from.
 */
type SourceMimeType = string;

/**
 * CSS Level 3 color as defined in https://drafts.csswg.org/css-color-3/#colorunits Unsupported exceptions: currentColor
 */
type ColorForImage = string;
