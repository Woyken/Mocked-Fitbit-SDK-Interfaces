export interface StorageChangeEvent {
    readonly key: string | null;
    readonly newValue: string | null;
    readonly oldValue: string | null;
}