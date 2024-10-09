import { Event } from "./event";

export type CalenderDaysProps = {
  showWeekName: string;
  day: Date;
  selectedMonth: Date;
  sortedEvents: Event[];
}
