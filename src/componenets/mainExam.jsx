export default function MainExam({examCategory , filteredData}){

    // const examData = {
    //     "category" : filteredData.question,
    //     "answer" : filteredData.
    // }

    const examArr = [];
    let start = Math.floor(Math.random() * 50);
    let end = start + 10;
    
    for(let i = start ; i < end ;){
        filteredData.forEach(element => {
            let idx = Math.floor(Math.random() * 50)
            const ele = element.id === idx ? element : "";
            if(ele !== ""){
                examArr.push(ele);
                i++;
            }
            else{
            }
        });
    }

    if(examArr.length > 10){
        examArr.splice(10 , examArr.length);
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


// 37
// : 
// answer
// : 
// "C"
// category
// : 
// "Programming"
// id
// : 
// 59
// options
// : 
// {A: 'Java', B: 'Python', C: 'C#', D: 'Ruby'}
// question
// : 
// "Which of the following is a commonly used programming language for game development?"
