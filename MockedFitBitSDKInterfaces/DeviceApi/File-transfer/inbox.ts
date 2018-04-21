export class Inbox implements EventTarget {
    // EventTarget implementation
    addEventListener(type: "newfile", listener: (this: Inbox, event: Event) => any): void {
    }
    dispatchEvent(evt: Event): boolean {
        throw new Error("Method not implemented.");
    }
    removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {
    }
    // EventTarget implementation End

    onnewfile: ((this: Inbox, event: Event) => any) | undefined;

    nextFile(name?: string | undefined): string | undefined {
        throw new Error("Method not implemented.");
    }
}