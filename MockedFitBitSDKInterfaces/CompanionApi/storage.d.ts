interface StorageChangeEvent {
    readonly key: string | null;
    readonly newValue: string | null;
    readonly oldValue: string | null;
}

interface Storage {
    readonly length: number;

    clear(): void;
    getItem(key: string): string;
    key(index: number): string;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}