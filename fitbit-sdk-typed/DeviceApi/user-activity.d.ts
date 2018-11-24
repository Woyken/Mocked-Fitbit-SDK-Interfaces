declare module "user-activity" {
    var goals: Goals;
    var today: Today;
}

/**
 * A Goals object represents target goal values for certain activities, and emits events when those goals are reached.
 *
 * Activities for which no goal has been set are *undefined*.
 */
interface Goals extends Activity {
    /**
     * Event handler for **reachgoal** events emitted by this Goals object.
     */
    onreachgoal: ((this: Goals, event: Event) => any) | undefined;
}

/**
 * Today's physical activity.
 */
interface Today {
    /**
     * Activity values with possible adjustment online based on other data sources such as manually reported activity values.
     *
     * When no adjustments have been made or when the device has not received any adjustment from the online service, those values are the same as the *local* values.
     */
    readonly adjusted: Activity;
    /**
     * Activity values as measured locally on the device.
     */
    readonly local: Activity;
}

/**
 * An Activity object represents several measurements of the user's physical activity for the current day.
 *
 * Values that are not available on the device or currently unknown are undefined.
 */
interface Activity {
    /**
     * Number of active minutes.
     */
    activeMinutes?: number;
    /**
     * Number of calories burned, in Calories (kcal).
     */
    calories?: number;
    /**
     * Distance travelled, in meters.
     */
    distance?: number;
    /**
     * Elevation gain, in number of floors climbed.
     */
    elevationGain?: number;
    /**
     * Number of steps taken.
     */
    steps?: number;
}
