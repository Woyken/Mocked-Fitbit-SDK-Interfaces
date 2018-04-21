export interface Gradient {
    readonly colors: { c1: string; c2: string; c3: string; c4: string; };
    opacity: { o1: number | undefined; o2: number | undefined; o3: number | undefined; o4: number | undefined; };
    type: "linear" | "radial" | "bilinear";
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}