import { Event } from "../Events/event";
import { GlobalEvents } from "./globalEvents";

enum EventName {
    select = "select",
    mousedown = "mousedown",
    mouseup = "mouseup",
    mousemove = "mousemove",
    click = "click",
    keydown = "keydown",
    keyup = "keyup",
    keypress = "keypress",
    // add your types here.
}

enum ElementState {
    enabled = "enabled",
    disabled = "disabled",
    highlighted = "highlighted",
    unhighlighted = "unhighlighted",
    selected = "selected",
    unselected = "unselected",
    expanded = "expanded",
    // add your types here.
}

export interface Element extends GlobalEvents {
    readonly class: string;
    readonly firstChild: string;
    readonly id: string;
    image: string;
    layer: number;
    mode: number | [number, number];
    readonly nextSibling: Element | null;
    readonly parent: Element | null;
    state: ElementState;
    text: string;
    readonly type: string;
    value: number | [number, number];

    animate(trigger: EventName): void;
    sendEvent(event: Event): void;
}