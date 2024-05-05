import React from "react";
import './questions.css'

export default function Questions({examArr}){
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
                            <input type="radio" name={`op${index}`} value={optValue} id={`op${index + optKey}`} />
                            <label htmlFor={`op${index + optKey}`}>{optValue}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}