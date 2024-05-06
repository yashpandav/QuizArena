import Questions from "./questions";
import './mainExam.css';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function MainExam({ examCategory, filteredData , startExam , setstartExam}) {
    const [examArr, setExamArr] = useState([]);
    const [score, setScore] = useState(0);
    const userAns = new Map();
    const finalUserAns = [];
    const ansArr = [];
    const navigate = useNavigate();

    useEffect(() => {
        const idxSet = new Set();
        for (let i = 0; i < 10;) {
            let idx = Math.floor(Math.random() * Math.floor(Math.random() * 50));
            if (!idxSet.has(idx)) {
                const ele = filteredData.find(element => element.id === idx);
                if (ele) {
                    i++;
                    setExamArr(prevExamArr => [...prevExamArr, ele]);
                }
                idxSet.add(idx);
            }
        }
        setScore(0);
    }, []); 

    examArr.forEach((exam, index) => {
        ansArr.push(index + exam.answer);
    });

    function getUserAnsHandler(name, value) {
        userAns.set(name, value);
    }

    function evaluateAns() {
        let updatedScore = 0;
        finalUserAns.forEach((ans) => {
            if (ansArr.find((ele) => ele === ans)) {
                updatedScore++;
            }
        });
        setScore(updatedScore);
        toast.success(`Your score is ${updatedScore} out of 10 ` , 
                {
                className: "exam-score", 
            }
        );
        
        setstartExam(false);
        setTimeout(() => {
            navigate('/exam');
        } , 1000)
    }

    function submitHandler(){
        userAns.forEach((value) => {
            finalUserAns.push(value);
        });
        console.log(finalUserAns);
        console.log(ansArr);
        evaluateAns();
    }

    return (
        <div className="mainExam">
            <div className="exam-header">
                <h5>Exam Type : {examCategory}</h5>
                <button type="button" id="exam-Btn" value='Submit' onClick={submitHandler}>End Test</button>
            </div>
            <hr style={{ height: "0.5px", backgroundColor: "#393d3f" }}></hr>
            <Questions examArr={examArr} getUserAns={getUserAnsHandler}></Questions>
            <hr style={{ height: "0.5px", backgroundColor: "#393d3f", marginTop: "2.5vw" }}></hr>
            <div id="justForFlex">
                <button type="button" id="exam-Btn-cancel" value='cancel'>Cancel Test</button>
                <button type="button" id="exam-Btn" value='Submit' onClick={submitHandler}>End Test</button>
            </div>
            <hr style={{ height: "0.5px", backgroundColor: "#393d3f" }}></hr>
        </div>
    )
}
