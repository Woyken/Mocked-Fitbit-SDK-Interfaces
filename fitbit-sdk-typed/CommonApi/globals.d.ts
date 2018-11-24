/**
 * This method cancels a timed, repeating action which was previously established by a call to **setInterval**.
 * @param handle The identifier of the repeated action you want to cancel.
 */
declare function clearInterval(handle: number): void;

/**
 * This method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
 * @param handler A function to be executed every delay milliseconds.
 * @param timeout The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code.
 */
declare function setInterval(handler: (...args: any[]) => void, timeout: number): number;

/**
 * This method cancels a timer previously established by calling **setTimeout**.
 * @param handle The identifier of the timer you want to cancel.
 */
declare function clearTimeout(handle: number): void;

/**
 * This method sets a timer which executes a function or specified piece of code once, after the timer expires.
 * @param handler A function to be executed after the timer expires.
 * @param timeout The time, in milliseconds (thousandths of a second), the timer should wait before the specified function or code is executed.
 */
declare function setTimeout(handler: (...args: any[]) => void, timeout: number): number;
