/**
 * A file transfer represents data sent by a peer file sender that transmits data with a filename (see FileTransfer Outbox).
 *
 * When a new file transfer is received, it is staged (stored locally, but not yet visible in the application's accessible file system). This interface allows the application to be notified of the reception of new files, and to transfer them to a location on the file system where they can be accessed with the FileSystem API.
 */
interface Inbox extends EventTarget {
    /**
     * Event handler for *newfile* events of this Inbox object.
     */
    onnewfile?: ((this: Inbox, event: Event) => any);

    /**
     * Accept the next file available, if any, in the Inbox and make it available in the application's file system.
     *
     * If this function throws an error, the file stays in the Inbox, and the caller should retry after the condition that triggered the error has been corrected.
     * @param name
     */
    nextFile(name?: string): string | undefined;
}

declare module "file-transfer" {
    var inbox: Inbox;
}
