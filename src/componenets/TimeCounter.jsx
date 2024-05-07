import React from "react";
import { useState , useEffect } from "react";
import ExamTime from "./examTime";

export default function TimeCounter({examCategory , filteredData , setstartExam , startExam , setUser}){
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
        timer > 0 ? <p>YOUR EXAM WILL START IN {timer}</p> : <ExamTime setUser = {setUser} startExam = {startExam} setstartExam = {setstartExam} examCategory = {examCategory} filteredData = {filteredData} ></ExamTime>
    );
}