import { Activity } from "./activity";

export class Goals implements Activity {
    // Activity implementation
    activeMinutes: number;
    calories: number;
    distance: number;
    elevationGain: number;
    steps: number;
    // Activity implementation End

    onreachgoal: ((this: Goals, event: Event) => any) | undefined;
    addEventListener(type: "reachgoal", listener: (this: Goals, event: Event) => any): void {
    }
}