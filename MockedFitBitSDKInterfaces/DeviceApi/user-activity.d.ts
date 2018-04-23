interface Activity {
    activeMinutes: number | undefined;
    calories: number | undefined;
    distance: number | undefined;
    elevationGain: number | undefined;
    steps: number | undefined;
}

interface Goals extends Activity {
    onreachgoal: ((this: Goals, event: Event) => any) | undefined;
    addEventListener(type: "reachgoal", listener: (this: Goals, event: Event) => any): void;
}

interface Today {
    readonly adjusted: Activity;
    readonly local: Activity;
}

declare module "user-activity" {
    var goals: Goals;
    var today: Today;
}