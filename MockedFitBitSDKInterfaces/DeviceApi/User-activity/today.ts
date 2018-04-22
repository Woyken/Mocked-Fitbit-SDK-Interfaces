import { Activity } from "./activity";

export interface Today {
    readonly adjusted: Activity;
    readonly local: Activity;
}