import { createContext,  useState } from "react";





export let CounterContext=createContext(0)
export default function CounterContextProvider(props) {

    let [counter,setCounter] = useState(1)

    function increment(){
        setCounter(counter + 1)
    };
    
    function decrement(){
        setCounter(counter - 1)
    };

      
    return <CounterContext.Provider value={counter}>
{props.children}
    </CounterContext.Provider>;
}