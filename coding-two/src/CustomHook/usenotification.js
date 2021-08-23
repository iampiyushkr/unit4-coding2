import { useState } from "react"


export default function Not() {
    const [son, setCon] = useState("")
    const [start1,setStart1]=useState(0)
    const start = ()=> {
        const timmer = setInterval(function () {
            setStart1(function (prev) {
                if (start1 === 3) {
                    clearInterval(timmer)
                }
                return Number(prev)+1
            })
        }, 1000)
        setCon("confirm")
    }
    return {
        son,
        start
    }
        }