/**
 * The Geolocation API represents an object able to programmatically obtain the position of the device.
 *
 * The geographic position information is provided in terms of World Geodetic System coordinates (WGS84).
 */
interface Geolocation {
    /**
     * Stops the background watching of the device's position.
     * @param watchId
     */
    clearWatch(watchId: number): void;
    /**
     * Asynchronously request the current position.
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
    /**
     * Request that the system monitor the position continuously and report position updates as available.
     * @param successCallback
     * @param errorCallback
     * @param options
     */
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
}

/**
 * Options used when requesting positions.
 */
interface PositionOptions {
    /**
     * Hint that the application would like to receive the best possible results.
     *
     * This may result in slower response times or increased power consumption.
     *
     * The device might not be able to provide more accurate results than if the flag wasn't specified.
     *
     * The intended purpose of this attribute is to allow applications to inform the system that they do not require high accuracy geolocation fixes and, therefore, the system may optimize the way geolocation positions are measured.
     *
     * If this is set to *true*, a high accuracy is desired. If set to *false*, or not set, the application is explicitly expressing that it does not need high accuracy positions.
     */
    enableHighAccuracy?: boolean;
    /**
     * Indication that the application is willing to accept a cached position whose age is no greater than the specified time in milliseconds.
     *
     * If **maximumAge** not set or is set to *0*, the system will immediately try to acquire a new position.
     *
     * When set to *Infinity*, a cached position is returned regardless of its age.
     *
     * If the system does not have a cached position available whose age is no greater than the specified **maximumAge**, then it acquires new position object.
     *
     * In case of a **watchPosition** call, the **maximumAge** refers to the first position object returned by the system.
     */
    maximumAge?: number;
    /**
     * Maximum length of time, in milliseconds, that is allowed to pass from the call to **getCurrentPosition** or **watchPosition** until the corresponding *successCallback* is invoked.
     *
     * If the device is unable to successfully acquire a new Position before the given timeout elapses, and no other errors have occurred in this interval, then the corresponding *errorCallback* is invoked with a **PositionError** object whose code attribute is set to **TIMEOUT**. If this property is not set, the timeout is effectively infinite.
     *
     * In case of a **getCurrentPosition** call, the *errorCallback* is invoked at most once.
     *
     * In case of a **watchPosition** call, the *errorCallback* could be invoked repeatedly: the first timeout is relative to the moment **watchPosition** was called.
     *
     * Subsequent timeouts are relative to the moment when the system determines that the position of the device has changed and a new Position object must be acquired.
     */
    timeout?: number;
}

/**
 * Callback invoked when an error occurs.
 */
type PositionErrorCallback = (error: PositionError) => void;

/**
 * Callback invoked when a position is available.
 */
type PositionCallback = (position: Position) => void;

interface PositionError {
    //readonly PERMISSION_DENIED: PositionErrorCode.PERMISSION_DENIED;
    readonly PERMISSION_DENIED: number;
    //readonly POSITION_UNAVAILABLE: PositionErrorCode.POSITION_UNAVAILABLE;
    readonly POSITION_UNAVAILABLE: number;
    //readonly TIMEOUT: PositionErrorCode.POSITION_UNAVAILABLE;
    readonly TIMEOUT: number;
    //readonly code: PositionErrorCode;
    /**
     * Error code.
     */
    readonly code: number;
    /**
     * Error message describing the details of the error encountered. This attribute is primarily intended for debugging and developers should not use it directly in their application user interface.
     */
    readonly message: string;
}

interface Position {
    /**
     * Coordinates for the position.
     */
    readonly coords: Coordinates;
    /**
     * Timestamp at which the position was measured.
     *
     * The timestamp is measured as the number of milliseconds since 1 January, 1970 UTC.
     */
    readonly timestamp: number;
}

interface Coordinates {
    /**
     * Accuracy level of the **latitude** and **longitude** coordinates, in meters.
     */
    readonly accuracy: number;
    /**
     * Height of the position, specified in meters above the WGS84 ellipsoid.
     *
     * If the device cannot provide altitude information, the value is null.
     */
    readonly altitude: number | null;
    /**
     * Accuracy of the altitude attribute, in meters.
     *
     * If the device cannot provide altitude information, the value of this attribute is null.
     */
    readonly altitudeAccuracy: number | null;
    /**
     * Direction of travel of the device, in degrees, between 0° and 360°, counting clockwise relative to true north.
     *
     * If the device cannot provide heading information, this value is *null*. If the device is stationary (i.e. the value of the **speed** attribute is *0*), this value is *NaN*.
     */
    readonly heading: number | null;
    /**
     * Latitude, in degrees.
     */
    readonly latitude: number;
    /**
     * Longitude, in degrees.
     */
    readonly longitude: number;
    /**
     * Magnitude of the horizontal component of the device's current velocity, in m/s.
     *
     * If the device cannot provide speed information, the value of this attribute is *null*.
     */
    readonly speed: number | null;
}

declare module "geolocation" {
    var geolocation: Geolocation;
}
