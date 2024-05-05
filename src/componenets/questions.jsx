import React from "react";
import './questions.css'
export default function Questions({examArr}){
    return (
        <div className="examContainer">
            {examArr.map((exam, index) => (
                <div className="exam_module" key={index}>
                    <span>{index + 1}. </span>
                    <span className="que">{exam.question}</span>
                    {Object.entries(exam.options).map(([optKey, optValue]) => (
                        <div className="options" key={optKey}>
                            <input type="radio" name={`op${index}`} value={optValue} id={`op${index + optKey}`} />
                            <label htmlFor={`op${index + optKey}`}>{optValue}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}