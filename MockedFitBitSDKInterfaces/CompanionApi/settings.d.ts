interface LiveStorage extends Storage {
    onchange: ((this: LiveStorage, event: StorageChangeEvent) => any) | undefined;

    addEventListener(type: "change", listener: (this: LiveStorage, event: StorageChangeEvent) => any): void;
}

declare module "settings" {
    var settingsStorage: LiveStorage;
}