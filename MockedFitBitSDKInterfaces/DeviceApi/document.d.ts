/**
 * @description From SDK docs, but does not exist?
 */
interface DocumentModule {
    readonly default: DocumentModule;
    readonly root: Element;

    getEventHandler(elementType: string): EventHandler;
    setEventHandler(elementType: string, handler: EventHandler): void;
}

/**
 * @description From SDK docs, but does not exist?
 */
interface ScrollIndicatorElement {
    length: number;

    setPosition(position: number, pageSize: number, viewSize: number): void;
}

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
    animate?: boolean | undefined;
}

interface ComboButtonShowHideOptions {
    animate?: boolean | undefined;
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
    alignment?: "middle" | "top" | "bottom" | undefined;
    animate?: boolean | undefined;
    redraw?: boolean | undefined;
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
    readonly key: string;
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

interface VirtualTileListItemUpdateOptions {
    redraw?: boolean | undefined;
}

interface VirtualTileListItemInfo {
    type: string;
}

interface VirtualTileListDelegate {
    configureTile(tile: VirtualTileListItem, tileInfo: VirtualTileListItemInfo): void;
    getTileInfo(position: number): VirtualTileListItemInfo;
}

interface ElementSearch {
    getElementById(id: string): Element | null; // getElementById(id: string): T | null;
    getElementsByClassName(className: string): Element[];
    getElementsByTypeName(typeName: string): Element[];
    //getElementsByTagName - exists but not in docs?
}

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

interface ArcElement extends GraphicsElement, Bounded, Styled {
    arcWidth: number;
    startAngle: number;
    sweepAngle: number;
}

interface ArcElementConstructor {
    new(): ArcElement;
}

interface CircleElement extends GraphicsElement, Styled {
    cx: number;
    cy: number;
    r: number;
}

interface CircleElementConstructor {
    new(): CircleElement;
}

interface ComboButton extends GraphicsElement, Bounded, Styled {
    disable(options?: ComboButtonEnableDisableOptions | undefined): void;
    enable(options?: ComboButtonEnableDisableOptions | undefined): void;
    hide(options?: ComboButtonShowHideOptions | undefined): void;
    show(options?: ComboButtonShowHideOptions | undefined): void;
    //clipChildren - exists but not in docs?
}

interface ComboButtonConstructor {
    new(): ComboButton;
}

interface ContainerElement extends GraphicsElement, Bounded, Styled {
    overflow: "inherit" | "visible" | "hidden";
    //clipChildren - exists but not in docs?
}

interface ContainerElementConstructor {
    new(): ContainerElement;
}

interface DOMRect {
    readonly bottom: number;
    readonly height: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly width: number;
    readonly x: number;
    readonly y: number;
}

interface DOMRectConstructor {
    new(): DOMRect;
}

interface GradientArcElement extends ArcElement {
    readonly gradient: Gradient;
}

interface GradientArcElementConstructor {
    new(): GradientArcElement;
}

interface GradientRectElement extends RectElement {
    gradient: Gradient;
}

interface GradientRectElementConstructor {
    new(): GradientRectElement;
}

interface GraphicsElement extends Element {
    getBBox(): DOMRect;
}

interface GraphicsElementConstructor {
    new(): GraphicsElement;
}

interface GroupElement extends GraphicsElement, Styled {
    groupTransform: Transform | undefined;
}

interface GroupElementConstructor {
    new(): GroupElement;
}

interface ImageElement extends GraphicsElement, Bounded, Styled {
    href: string;
}

interface ImageElementConstructor {
    new(): ImageElement;
}

interface LineElement extends GraphicsElement, Styled {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}

interface LineElementConstructor {
    new(): LineElement;
}

interface RectElement extends GraphicsElement, Bounded, Styled {
}

interface RectElementConstructor {
    new(): RectElement;
}

interface TextAreaElement extends TextElement {
    baseline: number;
    displayAlign: "top" | "center" | "bottom";
    lineIncrement: number;
    rows: number;
}

interface TextAreaElementConstructor {
    new(): TextAreaElement;
}

interface TextElement extends GraphicsElement, Bounded, Styled {
    letterSpacing: number;
    textAnchor: "start" | "middle" | "end";
    textContent: string;
    textOverflow: "clip" | "ellipsis";
    readonly textOverflowing: boolean;
    writingMode: "lr" | "rl";
}

interface TextElementConstructor {
    new(): TextElement;
}

interface TileList extends GraphicsElement, Bounded, Styled {
    readonly length: number;

    getTile(position: number): TileListItem;
    insertTile(item: TileListItem, position: number, options?: TileListItemOperationOptions | undefined): void;
    obtainTile(type: string): TileListItem | null;
    redraw(): void;
}

interface TileListConstructor {
    new(): TileList;
}

interface TileListItem extends ContainerElement {
    align(options: TileListItemOperationOptions): void;
    hide(options?: TileListItemOperationOptions | undefined): void;
    remove(options?: TileListItemOperationOptions | undefined): void;
    show(options?: TileListItemOperationOptions | undefined): void;
}

interface TileListItemConstructor {
    new(): TileListItem;
}

interface VirtualTileList extends ContainerElement {
    delegate: VirtualTileListDelegate;
    readonly firstVisibleTile: number;
    readonly lastVisibleTile: number;
    length: number;

    redraw(): void;
    updateTile(position: number, options?: VirtualTileListItemUpdateOptions | undefined): void;
}

interface VirtualTileListConstructor {
    new(): VirtualTileList;
}

interface VirtualTileListItem extends ContainerElement {
    align(options: TileListItemOperationOptions): void;
    hide(options?: TileListItemOperationOptions | undefined): void;
    show(options?: TileListItemOperationOptions | undefined): void;
}

interface VirtualTileListItemConstructor {
    new(): VirtualTileListItem;
}

interface Element extends ElementSearch, GlobalEvents {
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
    readonly type: string;
    value: number | [number, number];

    animate(trigger: EventName): void;
    sendEvent(event: Event): void;
}

interface ElementConstructor {
    new(): Element;
}

/**
 * @description Not documented on SDK docs!
 */
interface ToggleButton extends Element {
}

interface ToggleButtonConstructor {
    /**
     * @description Not documented on SDK docs!
     */
    new(): ToggleButton;
}

/**
 * @description Not documented on SDK docs!
 */
interface SquareButton extends Element {
}

interface SquareButtonConstructor {
    /**
     * @description Not documented on SDK docs!
     */
    new(): SquareButton;
}

/**
 * @description Not documented on SDK docs!
 */
interface SymbolElement extends Element {
}

interface SymbolElementConstructor {
    /**
     * @description Not documented on SDK docs!
     */
    new(): SymbolElement;
}

/**
 * @description Not documented on SDK docs!
 */
interface UseElement extends Element {
}

interface UseElementConstructor {
    /**
     * @description Not documented on SDK docs!
     */
    new(): UseElement;
}

/**
 * @description Not documented on SDK docs!
 */
interface SVGElement extends Element {
}

interface SVGElementConstructor {
    /**
     * @description Not documented on SDK docs!
     */
    new(): SVGElement;
}

interface Document extends ElementSearch, GlobalEvents {
    ArcElement: ArcElementConstructor;
    CircleElement: CircleElementConstructor;
    ComboButton: ComboButtonConstructor;
    ContainerElement: ContainerElementConstructor;
    DOMRect: DOMRectConstructor
    GradientArcElement: GradientArcElementConstructor;
    GradientRectElement: GradientRectElementConstructor;
    GraphicsElement: GraphicsElementConstructor;
    GroupElement: GroupElementConstructor;
    ImageElement: ImageElementConstructor;
    LineElement: LineElementConstructor;
    RectElement: RectElementConstructor;
    TextAreaElement: TextAreaElementConstructor;
    TextElement: TextElementConstructor;
    TileList: TileListConstructor;
    TileListItem: TileListItemConstructor;
    VirtualTileList: VirtualTileListConstructor;
    VirtualTileListItem: VirtualTileListItemConstructor;
    Element: ElementConstructor;
    ToggleButton: ToggleButtonConstructor;
    SquareButton: SquareButtonConstructor;
    SymbolElement: SymbolElementConstructor;
    UseElement: UseElementConstructor;
    SVGElement: SVGElementConstructor;
}

declare module "document" {
    var document: Document;
    export = document;
}