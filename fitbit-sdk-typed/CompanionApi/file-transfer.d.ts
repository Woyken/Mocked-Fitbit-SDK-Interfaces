declare module "file-transfer" {
    var outbox: Outbox;
}

/**
 * The Outbox allows companions to enqueue new file transfers and list currently queued file transfers.
 */
interface Outbox {
    /**
     * Enqueue a file to be transferred.
     *
     * If a file transfer with the same name is already in the queue (and therefore in the *pending* or *transferring* state), it will be canceled automatically and a new entry will be created for the new file. In that case, the **readyState** property of the existing file transfer will become *canceled* if and when the promise is resolved.
     *
     * The name of the file must be between 1 and 64 characters from the following set: ```a-z, A-Z, 0-9, !, #, $, %, &, ', (, ), -, @, ^, _, `, `{`, `}`, `~`, `+`, `,`, `.`, `;`, `=`,```, The name must not be *.* or start with *...* If the name is invalid, the promise will be rejected.
     *
     * The data will be copied to a system buffer and any changes made to the data after calling **enqueue** will not affect the file transfer.
     * @param name
     * @param data
     * @param options
     */
    enqueue(name: string, data: ArrayBuffer | ArrayBufferView, options?: FileTransferOptions): Promise<FileTransfer>;
    /**
     * Obtain a list of file transfers currently in the queue.
     *
     * NOTE: only file transfers in the *pending* or *transferring* state are in the queue.
     */
    enumerate(): Promise<FileTransfer[]>;
}

/**
 * A file transfer object represents a file transfer entry in the file transfer **Outbox**. The state of a FileTransfer object changes over time based on progress and/or error conditions.
 *
 * When a file transfer transitions to the *transferred*, *canceled* or *error* state, it is removed from the outbox queue.
 */
interface FileTransfer {
    /**
     * Name of the file being transferred.
     */
    readonly name: string;
    /**
     * Event handler for *change* events emitted by this FileTransfer object.
     */
    onchange?: ((this: FileTransfer, event: Event) => any);
    /**
     * Options specified when the transfer was enqueued.
     */
    readonly options?: FileTransferOptions;
    /**
     * Current state of the file transfer.
     * - *pending* means that the transfer has not started yet
     * - *transferring* means that the transfer is in progress
     * - *transferred* means that the transfer is complete
     * - *canceled* means that the transfer has been canceled because **cancel** was called or because a new file with the same name was enqueued.
     * - *error* means that the transfer failed because of an error that is not recoverable.
     *
     * NOTE: the *error* state should be a very rare state, because the system takes care of retransmissions for all error conditions that are recoverable.
     */
    readonly readyState: "error" | "pending" | "transferring" | "transferred" | "canceled";

    /**
     * This method requests that the transfer be canceled. This will cause the state of the file transfer to become *canceled* immediately.
     *
     * If the file transfer is in the *transferred*, *canceled* or *error* state, this method has no effect.
     */
    cancel(): void;
}

/**
 * Reserved for future use.
 */
interface FileTransferOptions {
}



