import { useState } from "react";

function Lamp(){
    // let status = false
    const [status,setState] = useState(true)
    const handleClick = ()=>{
        // status = !status
        console.log("oke");
        setState(!status)
        
    }
    return (
        <>
            {status ? "Đèn đang bật" : "Đèn đang tắt"}
            <br/>
            <button onClick={handleClick}>{status ? "Tắt" : "Bật"}</button>
        </>
    )
}
export default Lamp;