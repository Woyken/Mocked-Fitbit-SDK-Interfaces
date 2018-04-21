import { Event } from "../events/event";
import { AnimationEvent } from "./animationEvent";
import { Element } from "./element";
import { ElementSearch } from "./elementSearch";
import { GlobalEvents } from "./globalEvents";
import { KeyboardEvent } from "./keyboardEvent";
import { ListScrollEvent } from "./listScrollEvent";
import { LoadEvent } from "./loadEvent";
import { MouseEvent } from "./mouseEvent";
import { PageScrollEvent } from "./pageScrollEvent";

export class Document implements ElementSearch, GlobalEvents {
    onactivate: (this: Element, event: Event) => any;
    onanimationend: (this: Element, event: AnimationEvent) => any;
    onanimationiteration: (this: Element, event: AnimationEvent) => any;
    onanimationstart: (this: Element, event: AnimationEvent) => any;
    onclick: (this: Element, event: MouseEvent) => any;
    oncollapse: (this: Element, event: Event) => any;
    ondisable: (this: Element, event: Event) => any;
    onenable: (this: Element, event: Event) => any;
    onexpand: (this: Element, event: Event) => any;
    onhighlight: (this: Element, event: Event) => any;
    onkeydown: (this: Element, event: KeyboardEvent) => any;
    onkeypress: (this: Element, event: KeyboardEvent) => any;
    onkeyup: (this: Element, event: KeyboardEvent) => any;
    onlistbackward: (this: Element, event: ListScrollEvent) => any;
    onlistforward: (this: Element, event: ListScrollEvent) => any;
    onload: (this: Element, event: LoadEvent) => any;
    onmousedown: (this: Element, event: MouseEvent) => any;
    onmousemove: (this: Element, event: MouseEvent) => any;
    onmouseout: (this: Element, event: MouseEvent) => any;
    onmouseover: (this: Element, event: MouseEvent) => any;
    onmouseup: (this: Element, event: MouseEvent) => any;
    onpagescroll: (this: Element, event: PageScrollEvent) => any;
    onreload: (this: Element, event: Event) => any;
    onselect: (this: Element, event: Event) => any;
    onunhighlight: (this: Element, event: Event) => any;
    onunload: (this: Element, event: Event) => any;
    onunselect: (this: Element, event: Event) => any;
    addEventListener(type: any, listener: (this: Element, event: any) => any): void {
        throw new Error("Method not implemented.");
    }
    dispatchEvent(event: Event): boolean {
        throw new Error("Method not implemented.");
    }
    removeEventListener(type: string, listener: EventListener): void {
        throw new Error("Method not implemented.");
    }
    getElementById(id: string): Element {
        throw new Error("Method not implemented.");
    }
    getElementsByClassName(className: string): Element[] {
        throw new Error("Method not implemented.");
    }
    getElementsByTypeName(typeName: string): Element[] {
        throw new Error("Method not implemented.");
    }
}