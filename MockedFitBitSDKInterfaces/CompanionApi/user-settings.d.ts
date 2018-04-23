interface CompanionLocaleSettings {
    readonly language: string;
}

declare module "user-settings" {
    var locale: CompanionLocaleSettings;
}