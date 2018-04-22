import { PermissionName } from "./permissionName";

export interface Permissions {
    granted(permissionName: PermissionName): boolean;
}