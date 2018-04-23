declare enum PermissionName {
    access_activity = "access_activity",
    access_user_profile = "access_user_profile",
    access_heart_rate = "access_heart_rate",
    access_location = "access_location",
    access_internet = "access_internet",
    run_background = "run_background",
}

interface Permissions {
    granted(permissionName: PermissionName): boolean;
}