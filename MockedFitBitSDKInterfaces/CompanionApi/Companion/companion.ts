import { Permissions } from "../../CommonApi/Permissions/permissions";
import { EventTarget } from "../../deviceApi/Events/eventTarget";
import { CompanionLifeCycleExtension } from "../Life-cycle/companion";
import { CompanionLocationChangeExtension } from "../Location-change/companion";
import { CompanionWakeIntervalExtension } from "../Wake-interval/companion";

export interface Companion extends EventTarget, CompanionLifeCycleExtension, CompanionLocationChangeExtension, CompanionWakeIntervalExtension {
    readonly applicationId: string;
    readonly buildId: string;
    readonly host: string;
    readonly permissions: Permissions;
}