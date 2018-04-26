interface ActivateEvent {
    readonly command: "back" | "exit" | "home" | "ok" | "select";
    readonly screenX: number | undefined;
    readonly screenY: number | undefined;
}

interface Bounded {
    height: number;
    width: number;
    x: number;
    y: number;
}

interface ComboButtonEnableDisableOptions {
    animate: boolean | undefined;
}

interface ComboButtonShowHideOptions {
    animate: boolean | undefined;
}

type EventHandler = (event: Event) => boolean;

interface Gradient {
    readonly colors: { c1: string; c2: string; c3: string; c4: string; };
    opacity: { o1: number | undefined; o2: number | undefined; o3: number | undefined; o4: number | undefined; };
    type: "linear" | "radial" | "bilinear";
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}

interface Style {
    display: "none" | "inline" | "inherit";
    fill: string;
    fillOpacity: number | undefined;
    fontFamily: string;
    fontSize: number | undefined;
    fontWeight: "inherit" | "light" | "regular" | "bold";
    opacity: number | undefined;
    textDecoration: "none" | "inherit" | "underline";
    visibility: "inherit" | "visible" | "hidden";
}

interface Styled {
    readonly style: Style;
}

interface TileListItemOperationOptions {
    alignment: "middle" | "top" | "bottom" | undefined;
    animate: boolean | undefined;
    redraw: boolean | undefined;
}

interface Transform {
    readonly rotate: { angle: number; };
    readonly scale: { x: number; y: number; };
    readonly translate: { x: number; y: number; };
}

declare enum EventName {
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

declare enum ElementState {
    enabled = "enabled",
    disabled = "disabled",
    highlighted = "highlighted",
    unhighlighted = "unhighlighted",
    selected = "selected",
    unselected = "unselected",
    expanded = "expanded",
    // add your types here.
}

interface AnimationEvent {
    readonly elapsedTime: number;
}

interface MouseEvent {
    readonly screenX: number;
    readonly screenY: number;
}

interface KeyboardEvent {
    readonly key: number;
}

interface ListScrollEvent {
    readonly first: number;
    readonly last: number;
    readonly middle: number;
}

interface LoadEvent {
    readonly phase: 1 | 2;
}

interface PageScrollEvent {
    readonly pageSize: number;
    readonly position: number;
    readonly viewSize: number;
}

declare module "document" {
    class ArcElement extends GraphicsElement implements Bounded, Styled {
        // Styled implementation
        style: Style;
        // Styled implementation End

        // Bounded implementation
        height: number;
        width: number;
        x: number;
        y: number;
        // Bounded implementation End
        
        arcWidth: number;
        startAngle: number;
        sweepAngle: number;
    }

    class CircleElement extends GraphicsElement implements Styled {
        // Styled implementation
        style: Style;
        // Styled implementation End

        cx: number;
        cy: number;
        r: number;
    }

    class ComboButton extends GraphicsElement implements Bounded, Styled {
        // Styled implementation
        style: Style;
        // Styled implementation End

        // Bounded implementation
        height: number;
        width: number;
        x: number;
        y: number;
        // Bounded implementation End

        disable(options?: ComboButtonEnableDisableOptions | undefined): void;
        enable(options?: ComboButtonEnableDisableOptions | undefined): void;
        hide(options?: ComboButtonShowHideOptions | undefined): void;
        show(options?: ComboButtonShowHideOptions | undefined): void;
        //clipChildren - exists but not in docs?
    }

    /**
     * Not documented on SDK docs!
     */
    class ToggleButton extends Element {
    }

    /**
     * Not documented on SDK docs!
     */
    class SquareButton extends Element {
    }

    /**
     * Not documented on SDK docs!
     */
    class SymbolElement extends Element {
    }

    /**
     * Not documented on SDK docs!
     */
    class UseElement extends Element {
    }

    /**
     * Not documented on SDK docs!
     */
    class SVGElement extends Element {
    }

    /**
     * From SDK docs, but does not exist?
     */
    interface DocumentModule {
        readonly default: DocumentModule;
        readonly root: Element;

        getEventHandler(elementType: string): EventHandler;
        setEventHandler(elementType: string, handler: EventHandler): void;
    }

    /**
     * From SDK docs, but does not exist?
     */
    interface ScrollIndicatorElement {
        length: number;

        setPosition(position: number, pageSize: number, viewSize: number): void;
    }

    class ContainerElement extends GraphicsElement implements Bounded, Styled {
        // Styled implementation
        style: Style;
        // Styled implementation End

        // Bounded implementation
        height: number;
        width: number;
        x: number;
        y: number;
        // Bounded implementation End

        overflow: "inherit" | "visible" | "hidden";
        //clipChildren - exists but not in docs?
    }

    class DOMRect {
        readonly bottom: number;
        readonly height: number;
        readonly left: number;
        readonly right: number;
        readonly top: number;
        readonly width: number;
        readonly x: number;
        readonly y: number;
    }

    class GradientArcElement extends ArcElement {
        readonly gradient: Gradient;
    }

    class GradientRectElement extends RectElement {
        gradient: Gradient;
    }

    class GraphicsElement extends Element {
        getBBox(): DOMRect;
    }

    class GroupElement extends GraphicsElement implements Styled {
        // Styled implementation
        style: Style;
        // Styled implementation End
        
        groupTransform: Transform | undefined;
    }

    class ImageElement extends GraphicsElement implements Bounded, Styled {
        // Styled implementation
        style: Style;
        // Styled implementation End

        // Bounded implementation
        height: number;
        width: number;
        x: number;
        y: number;
        // Bounded implementation End

        href: string;
    }

    class LineElement extends GraphicsElement implements Styled {
        // Styled implementation
        style: Style;
        // Styled implementation End

        x1: number;
        x2: number;
        y1: number;
        y2: number;
    }

    class RectElement extends GraphicsElement implements Bounded, Styled {
        // Styled implementation
        style: Style;
        // Styled implementation End

        // Bounded implementation
        height: number;
        width: number;
        x: number;
        y: number;
        // Bounded implementation End
    }

    class TextAreaElement extends TextElement {
        baseline: number;
        displayAlign: "top" | "center" | "bottom";
        lineIncrement: number;
        rows: number;
    }

    class TextElement extends GraphicsElement implements Bounded, Styled {
        // Styled implementation
        style: Style;
        // Styled implementation End

        // Bounded implementation
        height: number;
        width: number;
        x: number;
        y: number;
        // Bounded implementation End

        letterSpacing: number;
        textAnchor: "start" | "middle" | "end";
        textContent: string;
        textOverflow: "clip" | "ellipsis";
        readonly textOverflowing: boolean;
        writingMode: "lr" | "rl";
    }

    class TileList extends GraphicsElement implements Bounded, Styled {
        // Styled implementation
        style: Style;
        // Styled implementation End

        // Bounded implementation
        height: number;
        width: number;
        x: number;
        y: number;
        // Bounded implementation End

        readonly length: number;

        getTile(position: number): TileListItem;
        insertTile(item: TileListItem, position: number, options?: TileListItemOperationOptions | undefined): void;
        obtainTile(type: string): TileListItem | null;
        redraw(): void;
    }

    class TileListItem extends ContainerElement {
        align(options: TileListItemOperationOptions): void;
        hide(options?: TileListItemOperationOptions | undefined): void;
        remove(options?: TileListItemOperationOptions | undefined): void;
        show(options?: TileListItemOperationOptions | undefined): void;
    }

    interface VirtualTileListItemUpdateOptions {
        redraw: boolean | undefined;
    }

    class VirtualTileList extends ContainerElement {
        delegate: VirtualTileListDelegate;
        readonly firstVisibleTile: number;
        readonly lastVisibleTile: number;
        length: number;

        redraw(): void;
        updateTile(position: number, options?: VirtualTileListItemUpdateOptions | undefined): void;
    }

    interface VirtualTileListItemInfo {
        type: string;
    }

    interface VirtualTileListDelegate {
        configureTile(tile: VirtualTileListItem, tileInfo: VirtualTileListItemInfo): void;
        getTileInfo(position: number): VirtualTileListItemInfo;

    }

    class VirtualTileListItem extends ContainerElement {
        align(options: TileListItemOperationOptions): void;
        hide(options?: TileListItemOperationOptions | undefined): void;
        show(options?: TileListItemOperationOptions | undefined): void;
    }

    class Element implements ElementSearch, GlobalEvents {
        // GlobalEvents implementation
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
        addEventListener(type: any, listener: (this: Element, event: DocumentEventMap) => any): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, listener: EventListener): void;
        // GlobalEvents implementation End

        // ElementSearch implementation
        getElementById(id: string): Element;
        getElementsByClassName(className: string): Element[];
        getElementsByTypeName(typeName: string): Element[];
        // ElementSearch implementation End
        
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
        //textContent: any?;
        //innerText - deprecated;
        readonly type: string;
        value: number | [number, number];

        animate(trigger: EventName): void;
        sendEvent(event: Event): void;
    }

    interface ElementSearch {
        getElementById(id: string): Element | null; // getElementById(id: string): T | null;
        getElementsByClassName(className: string): Element[];
        getElementsByTypeName(typeName: string): Element[];
        //getElementsByTagName - exists but not in docs?
    }

// ElementSearch implementation
    function getElementById(id: string): Element | null; // getElementById(id: string): T | null;
    function getElementsByClassName(className: string): Element[];
    function getElementsByTypeName(typeName: string): Element[];
    //getElementsByTagName - exists but not in docs?
// ElementSearch implementation End

    interface DocumentEventMap {
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

    interface GlobalEvents extends EventTarget {
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

        addEventListener(type: any, listener: (this: Element, event: DocumentEventMap) => any): void;
        //addEventListener(type: K, listener: (this: Element, event: EventMap[K]) => any)
    }
}