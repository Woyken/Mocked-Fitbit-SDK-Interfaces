import { Event } from "../Events/event";
import { EventTarget } from "../Events/eventTarget";
import { AnimationEvent } from "./animationEvent";
import { Element } from "./element";
import { EventMap } from "./eventMap";
import { KeyboardEvent } from "./keyboardEvent";
import { ListScrollEvent } from "./listScrollEvent";
import { LoadEvent } from "./loadEvent";
import { MouseEvent } from "./mouseEvent";
import { PageScrollEvent } from "./pageScrollEvent";

export interface GlobalEvents extends EventTarget {
    onactivate: ((this: Element, event: Event) => any) | undefined;
    onanimationend: ((this: Element, event: AnimationEvent) => any) | undefined;
    onanimationiteration: ((this: Element, event: AnimationEvent) => any) | undefined;
    onanimationstart: ((this: Element, event: AnimationEvent) => any) | undefined;
    onclick: ((this: Element, event: MouseEvent) => any) | undefined;
    oncollapse: ((this: Element, event: Event) => any) | undefined;
    ondisable: ((this: Element, event: Event) => any) | undefined;
    onenable: ((this: Element, event: Event) => any) | undefined;
    onexpand: ((this: Element, event: Event) => any) | undefined;
    onhighlight: ((this: Element, event: Event) => any) | undefined;
    onkeydown: ((this: Element, event: KeyboardEvent) => any) | undefined;
    onkeypress: ((this: Element, event: KeyboardEvent) => any) | undefined;
    onkeyup: ((this: Element, event: KeyboardEvent) => any) | undefined;
    onlistbackward: ((this: Element, event: ListScrollEvent) => any) | undefined;
    onlistforward: ((this: Element, event: ListScrollEvent) => any) | undefined;
    onload: ((this: Element, event: LoadEvent) => any) | undefined;
    onmousedown: ((this: Element, event: MouseEvent) => any) | undefined;
    onmousemove: ((this: Element, event: MouseEvent) => any) | undefined;
    onmouseout: ((this: Element, event: MouseEvent) => any) | undefined;
    onmouseover: ((this: Element, event: MouseEvent) => any) | undefined;
    onmouseup: ((this: Element, event: MouseEvent) => any) | undefined;
    onpagescroll: ((this: Element, event: PageScrollEvent) => any) | undefined;
    onreload: ((this: Element, event: Event) => any) | undefined;
    onselect: ((this: Element, event: Event) => any) | undefined;
    onunhighlight: ((this: Element, event: Event) => any) | undefined;
    onunload: ((this: Element, event: Event) => any) | undefined;
    onunselect: ((this: Element, event: Event) => any) | undefined;

    addEventListener(type: K, listener: (this: Element, event: EventMap[K]) => any): void;
}
