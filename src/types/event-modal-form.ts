import { Event } from "./event";
import { ModalProps } from "./modal";
import { UnionOmit } from "./unionOmit";

export type EventFormModalProps = {
    onSubmit: (event: UnionOmit<Event, "id">) => void;
} & ({
    onDelete: () => void;
    event: Event;
    date: Date;
} | {
    onDelete?: never;
    event?: never;
    date?: Date
}) & Omit<ModalProps, "children">;