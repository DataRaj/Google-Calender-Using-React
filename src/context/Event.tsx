import { createContext, ReactNode, useState } from "react";
import { UnionOmit } from "../types/unionOmit";
import { Event } from "../types/event";

type EventContext = {
    events: Event[];
    addEvent: (event: UnionOmit<Event,"id">) => void;
    deleteEvent: (event: Event) => void ;
    }

    export const eventContext = createContext<EventContext | null>(null)
    
    type EventProvider = {
        childre: ReactNode
    }

    export const EventProvider = ({children}: {children: React.ReactNode}) => {
        const [events, setEvents] = useState<Event[]>([])

        const addEvent = (event: UnionOmit<Event, "id">) => {
            setEvents([...events, {...event, id: crypto.randomUUID()}])
        }
        const deleteEvent = (event: Event) => {
            setEvents(events.filter(e => e.id !== event.id))
        }

        return (
            <eventContext.Provider value={{events, addEvent, deleteEvent}}>
                {children}
            </eventContext.Provider>
        )
    }
