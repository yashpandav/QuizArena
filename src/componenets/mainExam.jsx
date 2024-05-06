import Questions from "./questions";
import './mainExam.css'

export default function MainExam({examCategory , filteredData}){
    const examArr = []; 
    const idxSet = new Set();
    const userAns = new Map();
    const finalUserAns = [];
    const ansArr = [];

    for(let i = 0 ; i < 10 ;){
        let idx = Math.floor(Math.random() * Math.floor(Math.random() * 50))
        if(!idxSet.has(idx)){
            const ele = filteredData.find(element => element.id === idx);
            if(ele){
                i++;
                examArr.push(ele);
            }
            idxSet.add(idx);
        }   
    }

    examArr.map((exam , index) => {
        ansArr.push(index + exam.answer);
    })

    function printAns(name , value){
        userAns.set(name , value);
    }

    const submitHandler = () => {
        userAns.forEach((value, key) => {
            finalUserAns.push(value);
        });
        console.log(finalUserAns)
        console.log(ansArr)
        // userAns.clear();
        // finalUserAns.splice(0, finalUserAns.length);
        // ansArr.splice(0, ansArr.length);
        // console.log(ansArr + finalUserAns + userAns)
    };

    return (
        <div className="mainExam">
            <div className="exam-header">
                <h5>Exam Type : {examCategory}</h5>
                <button type="button" id="exam-Btn" value='Submit' onClick={submitHandler}>End Test</button>
            </div>
            <hr style={{height : "0.5px" , backgroundColor : "#393d3f"}}></hr>
            <Questions examArr={examArr} print={printAns}></Questions>
            <hr style={{height : "0.5px" , backgroundColor : "#393d3f" , marginTop : "2.5vw"}}></hr>
            <div id="justForFlex">
                <button type="button" id="exam-Btn-cancel" value='cancel'>Cancel Test</button>
                <button type="button" id="exam-Btn" value='Submit' onClick={submitHandler}>End Test</button>
            </div>
            <hr style={{height : "0.5px" , backgroundColor : "#393d3f"}}></hr>
        </div>
    )
}
