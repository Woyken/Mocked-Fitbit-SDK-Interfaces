import { Companion } from "../Companion/companion";

export interface CompanionWakeIntervalExtension {
    onwakeinterval: ((this: Companion, event: Event) => any) | undefined;
    wakeInterval: number | undefined;
}