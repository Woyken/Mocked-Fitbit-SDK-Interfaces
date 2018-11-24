/**
 * Extension of the **Storage** interface, with the addition of an event that is emitted when keys are added, values change or keys are removed, externally to the application.
 *
 * Only changes effected by parts of the system other than the companion application itself trigger events on the storage object. This means that calling **setItem**, **removeItem** or **clear** on the storage object does not trigger any event.
 */
interface LiveStorage extends Storage {
    /**
     * Event handler for *change* events emitted by the storage.
     */
    onchange: ((this: LiveStorage, event: StorageChangeEvent) => any) | undefined;

    /**
     * Add an event handler for *change* events emitted by the storage.
     * @param type
     * @param listener
     */
    addEventListener(type: "change", listener: (this: LiveStorage, event: StorageChangeEvent) => any): void;
}

/**
 * Event that is emitted when a storage value is added, changed or removed.
 */
interface StorageChangeEvent extends Event {
    /**
     * Name of the key when the value for a single key is set or when a single key is removed.
     *
     * When all keys in the storage are removed at once, this value is null.
     */
    readonly key: string | null;
    /**
     * New value for a key for a single-key change, or null when all keys in the storage are removed at once.
     */
    readonly newValue: string | null;
    /**
     * Previous value for a key for a single-key change, or null when the value for the key is set for the first time, or when all keys in the storage are removed at once.
     */
    readonly oldValue: string | null;
}

/**
 * Represents a logical list of key/value pairs.
 *
 * This API is modeled after the WebStorage API, as defined here.
 *
 * NOTE: Accessing items as JavaScript properties is not supported in this API.
 */
interface Storage {
    /**
     * Number of key/value pairs currently present in the list associated with the object.
     */
    readonly length: number;

    /**
     * Remove all key/value pairs.
     */
    clear(): void;
    /**
     * Get the current value associated with a key.
     * @param key
     */
    getItem(key: string): string | null;
    /**
     * Get the name of a key by index.
     *
     * The order of keys is not defined, but is consistent within an storage object so long as the number of keys doesn't change. So, adding or removing a key may change the order of the keys, but merely changing the value of an existing key does not.
     * @param index
     */
    key(index: number): string | null;
    /**
     * Remove a key/value pair with that key if one exists.
     * @param key
     */
    removeItem(key: string): void;
    /**
     * Set the value associated with a key.
     *
     * If a key/value pair with the given *key* already exists, it is replaced with the new value. If no key/value pair with the given *key* already exists, a new key/value pair with the given *key* and *value* is added.
     * @param key
     * @param value
     */
    setItem(key: string, value: string): void;
}
