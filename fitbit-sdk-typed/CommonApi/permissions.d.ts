type PermissionName =
    "access_activity" |
    "access_user_profile" |
    "access_heart_rate" |
    "access_location" |
    "access_internet" |
    "run_background";

interface Permissions {
    /**
     * Indicates whether the application has been granted a permission or not.
     * @param permissionName Name of a permission.
     * @returns true if the application has been granted the permission, or false if it hasn't.
     *
     * Note that *false* doesn't necessarily mean than the permission has been explicitly denied by the user. It may be that the permission is not granted because of a combination of other factors, or that that permission was never requested and/or does not exist.
     */
    granted(permissionName: PermissionName): boolean;
}
