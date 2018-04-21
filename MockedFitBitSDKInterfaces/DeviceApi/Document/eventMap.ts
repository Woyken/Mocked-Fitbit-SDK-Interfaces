import { Event } from "../Events/event";
import { AnimationEvent } from "./animationEvent";
import { KeyboardEvent } from "./keyboardEvent";
import { ListScrollEvent } from "./listScrollEvent";
import { LoadEvent } from "./loadEvent";
import { MouseEvent } from "./mouseEvent";
import { PageScrollEvent } from "./pageScrollEvent";

export interface EventMap {
    activate: Event;
    animationend: AnimationEvent;
    animationiteration: AnimationEvent;
    animationstart: AnimationEvent;
    click: MouseEvent;
    collapse: Event;
    disable: Event;
    enable: Event;
    expand: Event;
    highlight: Event;
    keydown: KeyboardEvent;
    keypress: KeyboardEvent;
    keyup: KeyboardEvent;
    listbackward: ListScrollEvent;
    listforward: ListScrollEvent;
    load: LoadEvent;
    mousedown: MouseEvent;
    mousemove: MouseEvent;
    mouseout: MouseEvent;
    mouseover: MouseEvent;
    mouseup: MouseEvent;
    pagescroll: PageScrollEvent;
    reload: LoadEvent;
    select: Event;
    unhighlight: Event;
    unload: Event;
    unselect: Event;
}