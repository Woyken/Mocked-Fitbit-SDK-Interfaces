import { Activity } from "./activity";

export interface Goals extends Activity {
    onreachgoal: ((this: Goals, event: Event) => any) | undefined;
    addEventListener(type: "reachgoal", listener: (this: Goals, event: Event) => any): void;
}