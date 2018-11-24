/**
 * This method cancels a previously requested animation frame callback.
 * @param handle The identifier of the request you want to cancel.
 */
declare function cancelAnimationFrame(handle: number): void;
/**
 * This method triggers an immediate screen update, and registers a callback to be invoked before painting this update. Note that the request expires after one frame. For continuous animations, another request should be made from within the first callback.
 * @param handler A function to be executed before painting. The timestamp parameter indicates the time these callbacks began executing, in milliseconds. Multiple callbacks for the same frame receive the same timestamp value.
 */
declare function requestAnimationFrame(handler: (timestamp: number) => void): void;
