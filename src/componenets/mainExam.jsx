import Questions from "./questions";
import './mainExam.css';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function MainExam({ examCategory, filteredData, startExam, setstartExam, setUser ,startDate, userData }) {
    const [examArr, setExamArr] = useState([]);
    const [score, setScore] = useState(0);
    const userAns = new Map();
    const finalUserAns = [];
    const ansArr = [];
    const navigate = useNavigate();

    useEffect(() => {
        const idxSet = new Set();
        for (let i = 0; i < 10;) {
            let idx = Math.floor(Math.random() * 50);
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
        toast.success(`Your score is ${updatedScore} out of 10 `,
            {
                className: "exam-score",
            }
        );
    
        const dashboardData = {
            date: startDate,
            examCategory: examCategory,
            score: updatedScore,
        };
    
        setUser((prev) => ({
            ...prev,
            dashboard: [...prev.dashboard, dashboardData], 
        }));
    
        const mainData = JSON.parse(localStorage.getItem("user"));
        if (mainData && mainData[userData.userName]) {
            const updatedMainData = {
                ...mainData,
                [userData.userName]: {
                    ...mainData[userData.userName],
                    dashboard: [...mainData[userData.userName].dashboard, dashboardData] 
                }
            };
            localStorage.setItem("user", JSON.stringify(updatedMainData));
        }
    
        setstartExam(false);
        setTimeout(() => {
            navigate('/exam');
        }, 1000)
    }
    

    function submitHandler() {
        userAns.forEach((value) => {
            finalUserAns.push(value);
        });
        evaluateAns();
    }

    function cancelExamHandler() {
        let c = window.confirm("Are You Sure Want to cancel ? Your marks will be calculated as 0");
        if (c) {
            setScore(0);
            evaluateAns();
            setstartExam(false);
            navigate('/exam');
        }
    }

    useEffect(() => {
        const confirmUnload = (e) => {
            e.preventDefault();
            e.returnValue = '';
        };

        window.addEventListener('beforeunload', confirmUnload);
        return () => window.removeEventListener('beforeunload', confirmUnload);
    }, []);

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
                <button type="button" id="exam-Btn-cancel" value='cancel' onClick={cancelExamHandler}>Cancel Test</button>
                <button type="button" id="exam-Btn" value='Submit' onClick={submitHandler}>End Test</button>
            </div>
            <hr style={{ height: "0.5px", backgroundColor: "#393d3f" }}></hr>
        </div>
    )
}
