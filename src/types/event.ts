// Event type definition
export type Event = {
    id: string;
    name: string;
    color: string;
    date: Date;
} & (
    | ({allDay: true} & {startTime?: never; endTime?: never})
    | ({allDay: false} & {startTime: string; endTime: string})
)