export interface Storage {
    readonly length: number;

    clear(): void;
    getItem(key: string): string;
    key(index: number): string;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}