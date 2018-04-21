export interface ScrollIndicatorElement {
    length: number;

    setPosition(position: number, pageSize: number, viewSize: number): void;
}