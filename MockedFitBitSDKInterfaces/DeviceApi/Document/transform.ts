export interface Transform {
    readonly rotate: { angle: number; }
    readonly scale: { x: number; y: number; }
    readonly translate: { x: number; y: number; }
}