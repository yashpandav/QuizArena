import Questions from "./questions";

export default function MainExam({examCategory , filteredData}){
    const examArr = [];
    const idxSet = new Set();
    for(let i = 0 ; i < 10 ;){
        let idx = Math.floor(Math.random() * 50)
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
            <h5>Exam Type : {examCategory}</h5>
            <hr style={{width : "100vw" , height : "0.5px" , backgroundColor : "white"}}></hr>
                <Questions examArr = {examArr}></Questions>
        </div> 
    )
}