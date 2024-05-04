
export default function MainExam({examCategory , filteredData}){
    console.log(filteredData);

    return(
        <div className="mainExam">
            <h5>Exam Type : {examCategory}</h5>
            <hr style={{width : "100vw" , height : "0.5px" , backgroundColor : "white"}}></hr>
        </div>
    )
}