export default function MainExam({examCategory , filteredData}){
    const examArr = [];
    let start = Math.floor(Math.random() * 50);
    let end = start + 10;
    const idxSet = new Set();
    for(let i = start ; i < end ;){
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
    console.log(examArr)

    return(
        <div className="mainExam">
            <h5>Exam Type : {examCategory}</h5>
            <hr style={{width : "100vw" , height : "0.5px" , backgroundColor : "white"}}></hr>
            <div className="examContainer">
                <div>
                    {}
                    <h6>{filteredData.question}</h6>
                </div>
            </div>
        </div> 
    )
}