import { useContext } from "react";
import { eventContext } from "../context/Event";

export function useEvent(){
    const value = useContext(eventContext)
    if( value === null){
        throw new Error("useEvent must be used within a EventProvider")
    }
    return value;
}
