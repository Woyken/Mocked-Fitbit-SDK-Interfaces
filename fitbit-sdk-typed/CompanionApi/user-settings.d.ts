declare module "user-settings" {
    var locale: CompanionLocaleSettings;
}

/**
 * Locale settings are settings that relate to a user's preferred language.
 */
interface CompanionLocaleSettings {
    /**
     * BCP 47 language tag.
     */
    readonly language: string;
}

