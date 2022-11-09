import {useState, useEffect} from 'react'

export default function Counter(){
    const [counterValue, setCounterValue] = useState(0);
    const [secondCounterValue, setSecondCounterValue] = useState(0);
    useEffect(()=>console.log("Hello"), [counterValue])
    return(
        <div>
            <h2>Counter value: {counterValue}</h2>
            <button onClick={()=>setCounterValue((previousState)=>previousState + 1)}>Click me!</button>
            <h2>Counter value: {secondCounterValue}</h2>
            <button onClick={()=>setSecondCounterValue((previousState)=>previousState + 1)}>Click me!</button>
        </div>
    );
};