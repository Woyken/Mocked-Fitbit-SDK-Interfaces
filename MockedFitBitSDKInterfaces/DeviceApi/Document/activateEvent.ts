export interface ActivateEvent {
    readonly command: "back" | "exit" | "home" | "ok" | "select";
    readonly screenX: number | undefined;
    readonly screenY: number | undefined;
}