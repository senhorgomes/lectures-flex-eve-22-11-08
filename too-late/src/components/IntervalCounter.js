import {useState, useEffect} from 'react'

export default function IntervalCounter(){
    const [amountOfSeconds, setAmountOfSeconds] = useState(0);
    
    // No dependency array allowed useEffect to be called whenever amountOfSeconds was changed, which is very frequently
    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         setAmountOfSeconds((prev)=> prev + 1)
    //     }, 1000)
    // })
    // amountOfSeconds was being called twice every second, however it was only called up the initial render
    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         setAmountOfSeconds((prev)=> prev + 1)
    //     }, 1000)
    // },[])
    useEffect(()=>{
        const timer = setInterval(()=>{
            setAmountOfSeconds((prev)=> prev + 1)
        }, 1000)
        //This return is the useEffect clean up. We are saying to clear the setInterval called timer
        return ()=>{clearInterval(timer)}
    },[])
    //
    return(
        <div>
            <h2>{amountOfSeconds} have passed</h2>
        </div>
    );
};