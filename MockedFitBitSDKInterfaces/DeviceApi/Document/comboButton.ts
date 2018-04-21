import { ComboButtonEnableDisableOptions } from "./comboButtonEnableDisableOptions";
import { ComboButtonShowHideOptions } from "./comboButtonShowHideOptions";

export interface ComboButton {
    disable(options?: ComboButtonEnableDisableOptions | undefined): void;
    enable(options?: ComboButtonEnableDisableOptions | undefined): void;
    hide(options?: ComboButtonShowHideOptions | undefined): void;
    show(options?: ComboButtonShowHideOptions | undefined): void;
}