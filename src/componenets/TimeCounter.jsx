import React from "react";
import { useState , useEffect } from "react";
import ExamTime from "./examTime";
import './TimeCounter.css'
export default function TimeCounter({examCategory , filteredData, userData , setstartExam , startExam , setUser , startDate}){
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
        timer > 0 ? <div className="time-counter">
                <p className="active">YOUR EXAM WILL START IN {timer}</p> 
        </div> : <ExamTime userData = {userData} startDate = {startDate} setUser = {setUser} startExam = {startExam} setstartExam = {setstartExam} examCategory = {examCategory} filteredData = {filteredData} ></ExamTime>
    );
}