import { useState } from "react"

interface Props {
    initialValue?:number;
    step?:number;
}

// const HookCounter:React.FC<Props> =({initialValue=0,step=1})=>{
 const HookCounter:React.FC<Props> =({initialValue=0,step=1}:Props)=>{
    const [value,setValue]=useState(initialValue);

    const increment =()=>setValue (value=>value+step)

    const decrement =()=>setValue (value=>value-step)

    return (
        <>
        <button onClick={increment}>+</button>
        <span>{value}</span>
        <button onClick={decrement}>-</button>
        </>
    )


}
export default HookCounter