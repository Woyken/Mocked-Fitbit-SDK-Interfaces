export interface Style {
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