interface FileTransfer {
    readonly name: string;
    onchange: ((this: FileTransfer, event: Event) => any) | undefined;
    readonly options: FileTransferOptions | undefined;
    readonly readyState: "error" | "pending" | "transferring" | "transferred" | "canceled";

    addEventListener(type: "change", listener: (this: FileTransfer, event: Event) => any): void;
    cancel(): void;
}

interface FileTransferOptions {
}

interface Outbox {
    enqueue(name: string, data: ArrayBuffer | ArrayBufferView, options?: FileTransferOptions | undefined): Promise<FileTransfer>;
    enumerate(): Promise<FileTransfer[]>;
}

declare module "file-transfer" {
    var outbox: Outbox;
}