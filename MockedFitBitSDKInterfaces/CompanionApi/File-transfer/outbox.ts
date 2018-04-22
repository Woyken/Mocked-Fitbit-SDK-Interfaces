import { FileTransfer } from "./fileTransfer";
import { FileTransferOptions } from "./fileTransferOptions";

export interface Outbox {
    enqueue(name: string, data: ArrayBuffer | ArrayBufferView, options?: FileTransferOptions | undefined): Promise<FileTransfer>;
    enumerate(): Promise<FileTransfer[]>;
}