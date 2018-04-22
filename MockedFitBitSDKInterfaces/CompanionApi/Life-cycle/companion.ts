import { EventTarget } from "../../deviceApi/Events/eventTarget";
import { Companion } from "../Companion/companion";
import { LaunchReasons } from "./launchReasons";

export interface CompanionLifeCycleExtension {
    readonly launchReasons: LaunchReasons;
    onunload: ((this: Companion, event: Event) => any) | undefined;

    yield(): void;
}