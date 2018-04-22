import { EventTarget } from "../../deviceApi/Events/eventTarget";
import { Companion } from "../Companion/companion";
import { SignificantLocationChangeEvent } from "./significantLocationChangeEvent";

export interface CompanionLocationChangeExtension {
    monitorSignificantLocationChanges: boolean;
    onsignificantlocationchange: ((this: Companion, event: SignificantLocationChangeEvent) => any) | undefined;
}