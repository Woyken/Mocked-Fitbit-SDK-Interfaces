interface Inbox extends EventTarget {
    onnewfile: ((this: Inbox, event: Event) => any) | undefined;

    addEventListener(type: "newfile", listener: (this: Inbox, event: Event) => any): void;
    nextFile(name?: string | undefined): string | undefined;
}

declare module "file-transfer" {
    var inbox: Inbox;
} 