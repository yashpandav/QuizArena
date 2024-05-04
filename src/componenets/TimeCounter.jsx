import React from "react";
import { useState , useEffect } from "react";
import StartExam from "./startExam";

export default function TimeCounter({examCategory}){
    const [timer , setTimer] = useState(3);

    useEffect(()=>{
        setTimer(3) 
    } , [])

    useEffect(() => {
        const time = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        return () => {clearInterval(time) 
        };
    }, [timer]);

    return (
        timer > 0 ? <p>YOUR EXAM WILL START IN {timer}</p> : <StartExam></StartExam>
    );
}