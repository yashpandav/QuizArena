import React from "react";
import './questions.css'

export default function Questions({examArr , getUserAns}){
    const currAns = new Map();

    function selectHandler(event){
        let name = event.target.name;
        let value = event.target.id;
        currAns.set(name , value);
        getUserAns(name , value)
    }

    return (
        <div className="examContainer">
            {examArr.map((exam, index) => (
                <div className="exam_module" key={index}>
                    <div className="que">
                        <span>{index + 1}. &nbsp;</span>
                        <span className="que">{exam.question}</span>
                    </div>
                    {Object.entries(exam.options).map(([optKey, optValue]) => (
                        <div className="options" key={optKey}>
                            <input type="radio" onClick={selectHandler} name={`op${index}`} value={optValue} id={index + optKey} />
                            <label htmlFor={index + optKey}>{optValue}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}