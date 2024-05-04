import { useEffect, useState } from "react"

export default function StartExam(){

    const [sec , setSec] = useState(0);
    const [min , setMin] = useState(0);
    const [hour , setHour] = useState(0);

    useEffect(()=>{
        const timer = setInterval(() => {
            if(sec >= 59){
                setMin((prev) => prev + 1);
                setSec(0);
            }
            else{
                setSec((prev) => prev + 1);
            }
            if(min >= 59){
                setHour((prev) => prev + 1);
                setMin(0);  
            }
        } , 1000)
        return () => clearInterval(timer);
    }
    );

    return (
        <div className="examStart">
            <div className="time">
                <h4>{hour < 9 ? "0"+hour : hour}:{min < 9 ? "0"+min : min}:{sec < 9 ? "0"+sec : sec}</h4>
            </div>
        </div>
    )
}