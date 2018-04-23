interface Event {
    readonly defaultPrevented: boolean;
    readonly target: EventTarget | undefined;
    readonly type: string;

    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
}

interface EventInit {
}

interface EventListener {
}

interface EventTarget {
    addEventListener(type: string, listener: EventListener): void;
    dispatchEvent(event: Event): boolean;
    removeEventListener(type: string, listener: EventListener): void;
}
