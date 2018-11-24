declare var console: Console;

/**
 * Outputs a message to the Console.
 */
interface Console {
    /**
     * Writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
     * @param assertion
     * @param message
     * @param optionalParams
     */
    assert(assertion: boolean, message?: any, ...optionalParams: any[]): void;
    /**
     * Outputs an error message.
     * @param message
     * @param optionalParams
     */
    error(message?: any, ...optionalParams: any[]): void;
    /**
     * Outputs an informational message.
     * @param message
     * @param optionalParams
     */
    info(message?: any, ...optionalParams: any[]): void;
    /**
     * Outputs a message.
     * @param message
     * @param optionalParams
     */
    log(message?: any, ...optionalParams: any[]): void;
    /**
     * Outputs a stack trace.
     */
    trace(): void;
    /**
     * Outputs a warning message.
     * @param message
     * @param optionalParams
     */
    warn(message?: any, ...optionalParams: any[]): void;
}
