import { EventHandler } from "./eventHandler";

export interface DocumentModule {
    readonly default: DocumentModule;
    readonly root: Element;

    getEventHandler(elementType: string): EventHandler;
    setEventHandler(elementType: string, handler: EventHandler): void;
}