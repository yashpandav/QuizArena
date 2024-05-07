import React from "react";
import { useState , useEffect } from "react";
import ExamTime from "./examTime";

export default function TimeCounter({examCategory , filteredData , setstartExam , startExam , dashboardScorePasssedHandler3}){
    const [timer , setTimer] = useState(3);

    useEffect(()=>{
        setTimer(3) 
    } , [])

    useEffect(() => {
        const time = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        return () => {clearInterval(time)
        };
    }, [timer]);

    function dashboardScorePasssedHandler4(getscore){
        dashboardScorePasssedHandler3(getscore);
    }

    return (
        timer > 0 ? <p>YOUR EXAM WILL START IN {timer}</p> : <ExamTime startExam = {startExam} setstartExam = {setstartExam} examCategory = {examCategory} filteredData = {filteredData} dashboardScorePasssedHandler5 = {dashboardScorePasssedHandler4}></ExamTime>
    );
}