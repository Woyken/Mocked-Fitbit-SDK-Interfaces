declare module "fs" {
    /**
     * Write data to a file in a single operation. If a file with that name already exists, it is overwritten; otherwise, a new file is created.
     * @param filename Name of the file to write.
     * @param data With no encoding specified, data is a binary *data* buffer. With encoding == *"ascii"* or *"utf-8"*, *data* is a string that will be serialized with the respective encoding. With encoding == *"cbor"* or *"json"*, *data* is an object that will be serialized with CBOR or JSON encoding, respectively.
     */
    function writeFileSync(filename: string, data: ArrayBuffer | ArrayBufferView): void
    /**
     * Write data to a file in a single operation. If a file with that name already exists, it is overwritten; otherwise, a new file is created.
     * @param filename Name of the file to write.
     * @param data string
     * @param encoding "ascii" or "utf-8"
     */
    function writeFileSync(filename: string, data: string, encoding: "ascii" | "utf-8"): void
    /**
     * Write data to a file in a single operation. If a file with that name already exists, it is overwritten; otherwise, a new file is created.
     * @param filename Name of the file to write.
     * @param data any
     * @param encoding "cbor" or "json"
     */
    function writeFileSync(filename: string, data: any, encoding: "cbor" | "json"): void;

    /**
     * Read an entire file into a buffer in a single operation.
     * @param filename Name of the file to read.
     */
    function readFileSync(filename: string): any;
    /**
     * Read an entire file into a buffer in a single operation.
     * @param filename Name of the file to read.
     * @param encoding "ascii" or "utf-8"
     */
    function readFileSync(filename: string, encoding: "ascii" | "utf-8"): any
    /**
     * Read an entire file into a buffer in a single operation.
     * @param filename Name of the file to read.
     * @param encoding "cbor" or "json"
     */
    function readFileSync(filename: string, encoding: "cbor" | "json"): any

    /**
     * Rename a file.
     * @param oldFilename Name of the file to be renamed.
     * @param newFilename Name to which the filename should be changed.
     */
    function renameSync(oldFilename: string, newFilename: string): void;
    /**
     * Delete a file.
     * @param filename Name of the file to be deleted.
     */
    function unlinkSync(filename: string): void;
    /**
     * Get metadata of a file.
     * @param filename Name of the file of which the metadata is requested.
     */
    function statSync(filename: string): FileStats;
    /**
     * Write *buffer* to the file specified by *fd*.
     * @param fd File descriptor to which to write.
     * @param buffer Buffer containing the data to write.
     * @param offset Offset in *buffer* of the first byte of data to write. (default: *0*)
     * @param length Number of bytes to write. (default: the size of the buffer)
     * @param position Offset from the beginning of the file where the data should be written. If the file was opened in append mode (*a* or *a+*), this parameter is ignored.
     */
    function writeSync(fd: number, buffer: ArrayBuffer, offset?: number, length?: number, position?: number): void;
    /**
     * Read data from the file specified by *fd*.
     * @param fd File descriptor from which to read.
     * @param buffer Buffer in which to store the read data.
     * @param offset Offset in *buffer* of the first byte where the file data is to be stored. (default: *0*)
     * @param length Number of bytes to read. (default: the size of the buffer)
     * @param position Offset from the beginning of the file from which the data should be read. (default: *0*)
     */
    function readSync(fd: number, buffer: ArrayBuffer, offset?: number, length?: number, position?: number): number;
    /**
     * Close a file descriptor.
     * @param fd File descriptor for the file to close.
     */
    function closeSync(fd: number): void;
    /**
     * Open a file.
     *
     * Filenames are flat names without hierarchy and cannot contain path separators (/) or prefixes.
     *
     * A filename is a non-empty string of up to 64 characters
     *
     * Valid characters for filenames are: a-z, A-Z, 0-9, !, #, $, %, &, ', (, ), -, @, ^, _, {, }, ~, .,
     *
     * The reserved names . and .. are not allowed as filenames.
     * @param filename Name of the file to open.
     * @param flags Flags that specify the mode with which to open the file.
     *
     * r: Open the file for reading. An error is thrown if the file does not exist.
     *
     * r+: Open the file for reading and writing. An error is thrown if the file does not exist.
     *
     * w: Open the file for writing. The file is created if it does not exist or truncated if it does.
     *
     * w+: Open the file for reading and writing. The file is created if it does not exist or truncated if it does.
     *
     * a: Open the file for appending. The file is created if it does not exist.
     *
     * a+: Open the file for reading and appending. The file is created if it does not exist.
     */
    function openSync(filename: string, flags: "r" | "r+" | "w" | "w+" | "a" | "a+"): number;

    /**
     * Method to initiate the process of non-recursively listing all items in a given directory.
     * @param path Path to read from.
     */
    function listDirSync(path: string): any;
}

interface DirectoryIteratorResult {
    /**
     * boolean indicating whether we are done iterating
     */
    readonly done: boolean;
    /**
     * name of current directory entry or undefined if done is true
     */
    readonly value?: string;
}

interface DirectoryIterator {
    /**
     * Retrieve the next directory entry
     */
    next(): DirectoryIteratorResult;
}

interface FileStats {
    /**
     * Time at which the file data was last modified.
     */
    readonly mtime: Date;
    /**
     * Size of the file in bytes.
     */
    readonly size: number;
}
