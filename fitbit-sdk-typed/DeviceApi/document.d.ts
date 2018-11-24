/**
 * @description From SDK docs, but does not exist?
 */
interface DocumentModule extends GlobalEvents {
    readonly default: DocumentModule;
    /**
     * Element that is at the root of the element tree.
     */
    readonly root: Element;

    getEventHandler(elementType: string): EventHandler;
    setEventHandler(elementType: string, handler: EventHandler): void;
}

/**
 * @description From SDK docs, but does not exist?
 */
interface ScrollIndicatorElement extends ContainerElement {
    /**
     * Number of scroll indicator items displayed.
     */
    length: number;

    /**
     * Set the current scroll position that should be displayed by the element.
     *
     * NOTE: this may update the **value** property of this element if the scroll position corresponds to a different page. While the parameters may be set in terms of pixel units, it isn't necessary, as long as all three parameters are expressed in the same arbitrary measurement unit.
     */
    setPosition(position: number, pageSize: number, viewSize: number): void;
}

interface ComboButton extends GraphicsElement, Bounded, Styled {
    new(): ComboButton;
    /**
     * Disable the button.
     * @param options
     */
    disable(options?: ComboButtonEnableDisableOptions): void;
    /**
     * Enable the button.
     * @param options
     */
    enable(options?: ComboButtonEnableDisableOptions): void;
    /**
     * Hide the button.
     * @param options
     */
    hide(options?: ComboButtonShowHideOptions): void;
    /**
     * Show the button.
     * @param options
     */
    show(options?: ComboButtonShowHideOptions): void;
}

interface ComboButtonEnableDisableOptions {
    /**
     * Indicates whether or not the item should be animated. If set to true or isn't defined, the operation may trigger an associated animation. If set to false the operation does not trigger an animation.
     */
    animate?: boolean;
}

interface ComboButtonShowHideOptions {
    /**
     * Indicates whether or not the item should be animated. If set to true or isn't defined, the operation may trigger an associated animation. If set to false the operation does not trigger an animation.
     */
    animate?: boolean;
}

interface VirtualTileList extends ContainerElement {
    /**
     * Application-defined delegate that specifies the content for the list items.
     */
    delegate: VirtualTileListDelegate;
    /**
     * Index of the first visible item in the list. Between 0 (inclusive) and length (exclusive).
     */
    readonly firstVisibleTile: number;
    /**
     * Index of the last visible item in the list.
     */
    readonly lastVisibleTile: number;
    /**
     * Number of virtual tiles in the list.
     */
    length: number;

    new(): VirtualTileList;
    /**
     * Force a redraw of the list. This is usually called after a number of changes have been made to the list items with a redraw option set to false, for optimization.
     */
    redraw(): void;
    /**
     * Request that a tile be updated. This method is typically called when an item already in the list may have changed, to request that the delegate be called again to (re)configure the item.
     * @param position
     * @param options
     */
    updateTile(position: number, options?: VirtualTileListItemUpdateOptions): void;
}

interface VirtualTileListItemUpdateOptions {
    /**
     * Indicates whether or not the item should be immediately redrawn when updated. If set to true or isn't defined, the operation will cause a redraw. If set to false, the operation does not cause a redraw.
     */
    redraw?: boolean;
}

interface VirtualTileListDelegate {
    /**
     * Configure a tile list item before it is displayed.
     * @param tile
     * @param tileInfo
     */
    configureTile(tile: VirtualTileListItem, tileInfo: VirtualTileListItemInfo): void;
    /**
     * Get the information for a tile, by index.
     * @param position
     */
    getTileInfo(position: number): VirtualTileListItemInfo;
}

interface VirtualTileListItemInfo {
    /**
     * ID of the "pool" from which to obtain the tile item.
     */
    type: string;
}

interface VirtualTileListItem extends ContainerElement {
    new(): VirtualTileListItem;
    /**
     * Align the item within the list view.
     * @param options
     */
    align(options: TileListItemOperationOptions): void;
    /**
     * Hide the item.
     * @param options
     */
    hide(options?: TileListItemOperationOptions): void;
    /**
     * Show the item.
     * @param options
     */
    show(options?: TileListItemOperationOptions): void;
}

interface TileList extends GraphicsElement, Bounded, Styled {
    /**
     * Number of items in the list.
     */
    readonly length: number;

    new(): TileList;
    /**
     * Get the tile item at a given position.
     * @param position
     */
    getTile(position: number): TileListItem;
    /**
     * Insert a tile item in the list.
     * @param item
     * @param position
     * @param options
     */
    insertTile(item: TileListItem, position: number, options?: TileListItemOperationOptions): void;
    /**
     * Obtain a tile suitable for insertion in the list.
     * @param type
     */
    obtainTile(type: string): TileListItem | null;
    /**
     * Force a redraw of the list. This method should be called after one or more changes with a *redraw* option set to *false* have been performed. Note that using no-redraw options and forced redrawing is not necessary, it is simply a rendering optimization for advanced use cases.
     */
    redraw(): void;
}

interface TileListItem extends ContainerElement {
    new(): TileListItem;
    /**
     * Align the item within the list view.
     * @param options
     */
    align(options: TileListItemOperationOptions): void;
    /**
     * Hide the item.
     * @param options
     */
    hide(options?: TileListItemOperationOptions): void;
    /**
     * Remove the item from the list.
     * @param options
     */
    remove(options?: TileListItemOperationOptions): void;
    /**
     * Show the item.
     * @param options
     */
    show(options?: TileListItemOperationOptions): void;
}

interface TileListItemOperationOptions {
    /**
     * When defined, indicates how the item should be aligned. If not defined, no alignment is done.
     */
    alignment?: TileListItemAlignment;
    /**
     * Indicates whether or not the item should be animated. If set to *true* or isn't defined, the operation may trigger an associated animation. If set to *false* the operation does not trigger an animation.
     */
    animate?: boolean;
    /**
     * Indicates whether or not the view should be immediately redrawn. If set to *true* or isn't defined, the operation will cause a redraw of the view. If set to *false*, the operation does not cause a redraw of the view.
     */
    redraw?: boolean;
}

type TileListItemAlignment = "middle" | "top" | "bottom";

interface ImageElement extends GraphicsElement, Bounded, Styled {
    /**
     * Image file name or identifier for this element. NOTE: since a ImageElement represents an XML
     */
    href: string;

    new(): ImageElement;
}

interface LineElement extends GraphicsElement, Styled {
    /**
     * X coordinate of the first point of the line segment.
     */
    x1: number;
    /**
     * X coordinate of the second point of the line segment.
     */
    x2: number;
    /**
     * Y coordinate of the first point of the line segment.
     */
    y1: number;
    /**
     * Y coordinate of the second point of the line segment.
     */
    y2: number;

    new(): LineElement;
}

interface GradientArcElement extends ArcElement {
    /**
     * Gradient used to fill the stroke.
     */
    readonly gradient: Gradient;

    new(): GradientArcElement;
}

interface ArcElement extends GraphicsElement, Bounded, Styled {
    /**
     * Width of the stroke (thickness of the arc line) in pixels.
     *
     * NOTE: this property corresponds to the arc-width attribute in the XML declaration.
     */
    arcWidth: number;
    /**
     * Angle at which the arc starts, relative to the Y axis, in degrees, clockwise. For example, an arc with a starting angle of 0 starts at the middle of the top segment of the bounding rectangle.
     *
     * NOTE: this property corresponds to the start-angle attribute in the XML declaration.
     */
    startAngle: number;
    /**
     * Angle that the arc sweeps, in degrees (use 180 degrees for a semi-circle, 360 degrees for a full circle).
     *
     * NOTE: this property corresponds to the sweep-angle attribute in the XML declaration.
     */
    sweepAngle: number;

    new(): ArcElement;
}

interface CircleElement extends GraphicsElement, Styled {
    /**
     * X coordinate of the center of the circle.
     *
     * NOTE: this property corresponds to the *cx* attribute in the XML declaration.
     */
    cx: number;
    /**
     * Y coordinate of the center of the circle
     *
     * NOTE: this property corresponds to the *cy* attribute in the XML declaration.
     */
    cy: number;
    /**
     * Radius of the circle.
     *
     * NOTE: this property corresponds to the *r* attribute in the XML declaration.
     */
    r: number;

    new(): CircleElement;
}

interface GradientRectElement extends RectElement {
    gradient: Gradient;

    new(): GradientRectElement;
}

interface RectElement extends GraphicsElement, Bounded, Styled {
    new(): RectElement;
}

interface TextAreaElement extends TextElement {
    /**
     * Vertical position of the first row of text, in pixels, relative to the Y coordinate of the element.
     *
     * NOTE: this property corresponds to the *baseline* attribute in the XML declaration.
     */
    baseline: number;
    /**
     * Vertical alignment for the text.
     *
     * NOTE: this property corresponds to the *display-align* attribute in the XML declaration.
     */
    displayAlign: "top" | "center" | "bottom";
    /**
     * Height of each text row, in pixels.
     *
     * NOTE: this property corresponds to the *line-increment* attribute in the XML declaration.
     */
    lineIncrement: number;
    /**
     * Maximum number of rows that the text can span.
     *
     * NOTE: this property corresponds to the *rows* attribute in the XML declaration.
     */
    rows: number;

    new(): TextAreaElement;
}

interface TextElement extends GraphicsElement, Bounded, Styled {
    /**
     * Spacing between text characters, in pixels. The value may be negative to decrease the spacing, or positive to increase the spacing.
     *
     * NOTE: this property corresponds to the *letter-spacing* attribute in the XML declaration.
     */
    letterSpacing: number;
    /**
     * Horizontal alignment for the text, relative to the X coordinate of the element.
     *
     * NOTE: this property corresponds to the *text-anchor* attribute in the XML declaration.
     */
    textAnchor: "start" | "middle" | "end";
    /**
     * Text content of the element.
     *
     * NOTE: since a TextElement represents an XML element, this property has the same value as the element's *text* property.
     */
    textContent: string;
    /**
     * Indicates how to render text that overflows its bounds.
     *
     * clip: the text is clipped.
     *
     * ellipsis: the end of the text may be replaced with an ellipsis (*...*) in order to fit within the bounds of the element.
     *
     * NOTE: this property corresponds to the *text-overflow* attribute in the XML declaration.
     */
    textOverflow: "clip" | "ellipsis";
    /**
     * Indicates whether the text is overflowing due to the given rectangle bounds of this element. If textOverflow is set to clip, textOverflowing indicates whether the text is clipping. If textOverflow is ellipsis, textOverflowing indicates whether the end of text is being replaced with an ellipsis (...).
     */
    readonly textOverflowing: boolean;
    /**
     * Writing mode for the text.
     *
     * lr: the text is written from left to right.
     *
     * rl: the text is written from right to left.
     */
    writingMode: "lr" | "rl";

    new(): TextElement;
}

interface GroupElement extends GraphicsElement, Styled {
    groupTransform?: Transform;

    new(): GroupElement;
}

interface ContainerElement extends GraphicsElement, Bounded, Styled {
    /**
     * Indicates whether the children are clipped or not when they overflow the bounds of the container.
     *
     * When set to *visible*, the content is not clipped. When set to *hidden* the content is clipped to the borders of the container element. When set to *inherit*, the parent element's settings are inherited.
     */
    overflow: "inherit" | "visible" | "hidden";
    //clipChildren - exists but not in docs?

    new(): ContainerElement;
    /**
     * Returns a DOMRect containing the element's calculated position and spatial extent at the time of being called.
     */
    getBBox(): DOMRect;
}

interface GraphicsElement extends Element {
    new(): GraphicsElement;
    getBBox(): DOMRect;
}

interface Element extends ElementSearch, GlobalEvents {
    /**
     * Class of the element.
     *
     * NOTE: this property corresponds to the class attribute in the XML declaration.
     */
    readonly class: string;
    /**
     * First child element. If the element has no children, the value is null.
     */
    readonly firstChild: string;
    /**
     * Identifier for the element.
     *
     * NOTE: this property corresponds to the id attribute in the XML declaration.
     */
    readonly id: string;
    /**
     * Image file name or identifier for this element. Note that the actual element (typically an ImageElement) that handles the setting or getting of this property may be a descendant: if this element isn't an ImageElement, the default behavior, if not overridden, is to look for the first element with *id*=*image* within the descendants, and, if found, set its image.
     */
    image: string;
    /**
     * Rendering display order.
     *
     * NOTE: this property corresponds to the layer attribute in the XML declaration.
     */
    layer: number;
    /**
     * Generic read/write property used by some elements for different purposes depending on the actual element type. It typically represents one or more modifiers for the element's behavior.
     *
     * When getting this property, the value returned is always an integer. When setting this property, the value set may be an integer (when setting a simple value) or a two-element array where the first array element is an integer for the value and the second array element is an integer that may be used as a flags/modifier indicator for specialized purposes by some components (transition animation flags for example).
     */
    mode: number | [number, number];
    /**
     * Next sibling element. If the element has no next sibling, the value is *null*.
     */
    readonly nextSibling?: Element;
    /**
     * Parent element. If the element has no parent, the value is *null*.
     */
    readonly parent?: Element;
    /**
     * Current state of the element.
     */
    state: ElementState;
    /**
     * Text content for this element. Note that the actual element (typically a TextElement or TextAreaElement) that handles the setting or getting of this property may be a descendant: if this element isn't a TextElement or TextAreaElement, the default behavior, if not overridden, is to look for the first element with *id*=*text* within the descendants, and, if found, set its text.
     */
    text: string;
    //textContent: any?;
    readonly type: string;
    value: number | [number, number];

    new(): Element;
    /**
     * Trigger the start of animations for this element, if any is defined.
     * @param trigger
     */
    animate(trigger: EventName): void;
    /**
     * Send an event to the element. Events are typically generated by user action or by the system, but it may sometimes be necessary for an application to synthesize and send events directly.
     * @param event
     */
    sendEvent(event: Event): void;
}

interface GlobalEvents extends EventTarget {
    onactivate?: ((this: Element, event: Event) => any);
    onanimationend?: ((this: Element, event: AnimationEvent) => any);
    onanimationiteration?: ((this: Element, event: AnimationEvent) => any);
    onanimationstart?: ((this: Element, event: AnimationEvent) => any);
    onclick?: ((this: Element, event: MouseEvent) => any);
    oncollapse?: ((this: Element, event: Event) => any);
    ondisable?: ((this: Element, event: Event) => any);
    onenable?: ((this: Element, event: Event) => any);
    onexpand?: ((this: Element, event: Event) => any);
    onhighlight?: ((this: Element, event: Event) => any);
    onkeydown?: ((this: Element, event: KeyboardEvent) => any);
    onkeypress?: ((this: Element, event: KeyboardEvent) => any);
    onkeyup?: ((this: Element, event: KeyboardEvent) => any);
    onlistbackward?: ((this: Element, event: ListScrollEvent) => any);
    onlistforward?: ((this: Element, event: ListScrollEvent) => any);
    onload?: ((this: Element, event: LoadEvent) => any);
    onmousedown?: ((this: Element, event: MouseEvent) => any);
    onmousemove?: ((this: Element, event: MouseEvent) => any);
    onmouseout?: ((this: Element, event: MouseEvent) => any);
    onmouseover?: ((this: Element, event: MouseEvent) => any);
    onmouseup?: ((this: Element, event: MouseEvent) => any);
    onpagescroll?: ((this: Element, event: PageScrollEvent) => any);
    onreload?: ((this: Element, event: Event) => any);
    onselect?: ((this: Element, event: Event) => any);
    onunhighlight?: ((this: Element, event: Event) => any);
    onunload?: ((this: Element, event: Event) => any);
    onunselect?: ((this: Element, event: Event) => any);

    addEventListener(type: any, listener: (this: Element, event: DocumentEventMap) => any): void;
    //addEventListener(type: K, listener: (this: Element, event: EventMap[K]) => any)
}

interface ElementSearch {
    /**
     * Get an descendant Element by ID. When called on the *document* module itself, the entire element tree is searched. When called on an individual element, the element subtree rooted at that element is searched. The first element with the requested ID, if any, is returned.
     * @param id
     */
    getElementById(id: string): Element | null; // getElementById(id: string): T | null;
    /**
     * Get descendant Elements by class name. When called on the *document* module itself, the entire element tree is searched. When called on an individual element, the element subtree rooted at that element is searched. All the elements with the requested class are returned.
     * @param className
     */
    getElementsByClassName(className: string): Element[];
    /**
     * Get descendant Elements by type name. When called on the *document* module itself, the entire element tree is searched. When called on an individual element, the element subtree rooted at that element All the elements with the requested type are returned.
     * @param typeName
     */
    getElementsByTypeName(typeName: string): Element[];
    //getElementsByTagName - exists but not in docs?
}

type EventName = "select" | "mousedown" | "mouseup" | "mousemove" | "click" | "keydown" | "keyup" | "keypress" | string;

type ElementState = "enabled" | "disabled" | "highlighted" | "unhighlighted" | "selected" | "unselected" | "expanded" | string;

interface DOMRect extends Bounded {
    new(): DOMRect;
    /**
     * Bottom coordinate value ([y] + height, or [y] if height is negative).
     */
    readonly bottom: number;
    /**
     * Left coordinate value ([x], or [x] + width if width is negative).
     */
    readonly left: number;
    /**
     * Right coordinate value ([x] + width, or [x] if width is negative).
     */
    readonly right: number;
    /**
     * Top coordinate value ([y], or [y] + height if height is negative).
     */
    readonly top: number;
}

interface Bounded {
    /**
     * Height of the bounding rectangle.
     */
    height: number;
    /**
     * Width of the bounding rectangle.
     */
    width: number;
    /**
     * X coordinate of the top-left corner of the bounding rectangle.
     */
    x: number;
    /**
     * Y coordinate of the top-left corner of the bounding rectangle.
     */
    y: number;
}

interface Styled {
    readonly style: Style;
}

interface Gradient {
    /**
     * Gradient colors. For *linear* and *radial* gradients, [c1] and [c2] are the start and end colors, respectively. ([c3] and [c4] are ignored) For *bilinear* gradients, [c1] and [c2] are the same as for a linear gradient, [c3] and [c4] are the two additional colors, in clockwise order.
     */
    readonly colors: { c1: string; c2: string; c3: string; c4: string; };
    /**
     * Opacity for the gradient colors. The values [o1], [o2], [o3] and [o4] are the opacity coefficients for the gradient colors [c1], [c2], [c3], and [c4], respectively. The values are between 0.0 (fully transparent) and 1.0 (fully opaque). (values outside the range will be clamped).
     */
    opacity: { o1?: number; o2?: number; o3?: number; o4?: number; };
    /**
     * Gradient type.
     */
    type: "linear" | "radial" | "bilinear";
    /**
     * X coordinate of the first point of the gradient.
     */
    x1: number;
    /**
     * X coordinate of the second point of the gradient.
     */
    x2: number;
    /**
     * Y coordinate of the first point of the gradient.
     */
    y1: number;
    /**
     * Y coordinate of the second point of the gradient.
     */
    y2: number;
}

interface Transform {
    /**
     * Rotation in the (X,Y) plane.
     */
    readonly rotate: { angle: number; };
    /**
     * Scaling along the X and Y axes.
     */
    readonly scale: { x: number; y: number; };
    /**
     * Translation along the X and Y axes.
     */
    readonly translate: { x: number; y: number; };
}

interface Style {
    /**
     * Determines if an element is part of the rendering process. When set to *inline*, the element is rendered. When set to *none*, the element and its children will not be rendered (but may still receive events). When set to *inherit*, the element's parent's property is used.
     */
    display: "none" | "inline" | "inherit";
    /**
     * Color of the interior of a graphical element. In the case of text element, this is the color of the text itself.
     */
    fill: string;
    /**
     * Opacity of the element's interior, between 0.0 (fully transparent) and 1.0 (fully opaque). (values outside the range will be clamped)
     */
    fillOpacity?: number;
    /**
     * Name of the font family to use to render text. When set to *inherit*, the element's parent's property is used.
     */
    fontFamily: string;
    /**
     * Size of the font to use to render text.
     */
    fontSize?: number;
    /**
     * Weight of the font to use to render text. When set to *inherit*, the element's parent's property is used.
     */
    fontWeight: "inherit" | "light" | "regular" | "bold";
    /**
     * Opacity of the element, between 0.0 (fully transparent) and 1.0 (fully opaque). (values outside the range will be clamped)
     */
    opacity?: number;
    /**
     * Decoration added to the text. When set to inherit, the element's parent's property is used.
     *
     * none: no decoration is added to the text
     *
     * underline: an underline is added to the text
     */
    textDecoration: "none" | "inherit" | "underline";
    /**
     * Determines if an element is visible. When set to *visible*, the element is visible. When set to *hidden*, the element is not visible, but it is still part of the rendering process, so it is still accounted for in size and alignment calculations. When set to *inherit*, the parent element's property is used.
     */
    visibility: "inherit" | "visible" | "hidden";
}

/**
 * Color identifier. A color may be specified as
 *
 * an RGB (Red, Green, Blue) triplet as: #RRGGBB,
 *
 * an ARGV (Alpha, Red, Green, Blue) quad as: ##AARRGGBB where AA, RR, GG and BB are the red, green and blue component values, respectively in hexadecimal (range 00 to FF).
 *
 * a color name for predefined colors.
 *
 * the special value *inherit* to indicate that the color value should be inherited from the corresponding property of the element's parent.
 */
type Color = string;

/**
 * Event handler that may be used as a globally-registered event handler.
 */
type EventHandler = (event: Event) => boolean;

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

interface LoadEvent extends Event {
    /**
     * The loading phase.
     */
    readonly phase: 1 | 2;
}

interface ListScrollEvent {
    /**
     * Index of the first visible item.
     */
    readonly first: number;
    /**
     * Index of the last visible item.
     */
    readonly last: number;
    /**
     * Index of the middle visible item.
     */
    readonly middle: number;
}

interface PageScrollEvent {
    /**
     * Size of a page, in an arbitrary measurement unit.
     */
    readonly pageSize: number;
    /**
     * Current scroll position, in an arbitrary measurement unit.
     */
    readonly position: number;
    /**
     * Total view size (all pages combined), in an arbitrary measurement unit.
     */
    readonly viewSize: number;
}

interface AnimationEvent {
    /**
     * The amount of time the animation has been running, in seconds, as of the time the event fired.
     */
    readonly elapsedTime: number;
}

interface KeyboardEvent {
    /**
     * Name of the key or button.
     */
    readonly key: string;
}

interface MouseEvent {
    /**
     * X coordinate of the pointer when the event fired.
     */
    readonly screenX: number;
    /**
     * Y coordinate of the pointer when the event fired.
     */
    readonly screenY: number;
}

interface ActivateEvent {
    /**
     * Name of the command associated with the event.
     */
    readonly command: "back" | "exit" | "home" | "ok" | "select";
    /**
     * X coordinate of the pointer when the event fired.
     */
    readonly screenX: number | undefined;
    /**
     * Y coordinate of the pointer when the event fired.
     */
    readonly screenY: number | undefined;
}

/**
 * @description Not documented on SDK docs!
 */
interface ToggleButton extends Element {
    new(): ToggleButton;
}

/**
 * @description Not documented on SDK docs!
 */
interface SquareButton extends Element {
    new(): SquareButton;
}

/**
 * @description Not documented on SDK docs!
 */
interface SymbolElement extends Element {
    new(): SymbolElement;
}

/**
 * @description Not documented on SDK docs!
 */
interface UseElement extends Element {
    new(): UseElement;
}

/**
 * @description Not documented on SDK docs!
 */
interface SVGElement extends Element {
    new(): SVGElement;
}

interface Document extends ElementSearch, GlobalEvents {
    ArcElement: ArcElement;
    CircleElement: CircleElement;
    ComboButton: ComboButton;
    ContainerElement: ContainerElement;
    DOMRect: DOMRect
    GradientArcElement: GradientArcElement;
    GradientRectElement: GradientRectElement;
    GraphicsElement: GraphicsElement;
    GroupElement: GroupElement;
    ImageElement: ImageElement;
    LineElement: LineElement;
    RectElement: RectElement;
    TextAreaElement: TextAreaElement;
    TextElement: TextElement;
    TileList: TileList;
    TileListItem: TileListItem;
    VirtualTileList: VirtualTileList;
    VirtualTileListItem: VirtualTileListItem;
    Element: Element;
    ToggleButton: ToggleButton;
    SquareButton: SquareButton;
    SymbolElement: SymbolElement;
    UseElement: UseElement;
    SVGElement: SVGElement;
}

declare module "document" {
    var document: Document;
    export = document;
}
