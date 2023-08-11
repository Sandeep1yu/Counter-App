import { useEffect, useState } from "react"

const useCounter = (counters = true)=> {
    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        const interval = setInterval(()=> {
            if(counters) {
                setCounter((prevState)=> prevState + 1);

            }else {
                setCounter((prevState)=> prevState - 1);
            }
        }, 1000)
        
        return ()=> {
            clearInterval(interval);
        }

    }, [])
    return counter;
}

export default useCounter;