import Questions from "./questions";
import './mainExam.css'

export default function MainExam({examCategory , filteredData}){
    const examArr = [];
    const idxSet = new Set();

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
    return(
        <div className="mainExam">
            <div className="exam-header">
                <h5>Exam Type : {examCategory}</h5>
                <button type="button" id="exam-Btn" value='Submit'>End Test</button>
            </div>
            <hr style={{height : "0.5px" , backgroundColor : "#393d3f"}}></hr>
                <Questions examArr = {examArr}></Questions>
            <button type="button" id="exam-Btn" value='Submit'>End Test</button>
        </div> 
    )
}