import { useState } from "react"

export default function Conver() {
    const [amt, setAmt] = useState("")
    const[changeAmt,setChangeAmt]=useState("")
    
    const handleChange = (amt) => {
        setChangeAmt(`${Number(amt)+74.5}`)
    }
    return <>
        <div>
            <input value={amt} type="number" placeholder="Enter Amount" onChange={ (e)=>{setAmt(e.target.value)}}/>
            <button onClick={()=>handleChange(amt)}>Convert</button>
        </div>
        </>
}