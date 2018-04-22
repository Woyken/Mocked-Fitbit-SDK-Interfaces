import { FileTransferOptions } from "./fileTransferOptions";

export interface FileTransfer {
    readonly name: string;
    onchange: ((this: FileTransfer, event: Event) => any) | undefined;
    readonly options: FileTransferOptions | undefined;
    readonly readyState: "error" | "pending" | "transferring" | "transferred" | "canceled";

    addEventListener(type: "change", listener: (this: FileTransfer, event: Event) => any): void;
    cancel(): void;
}