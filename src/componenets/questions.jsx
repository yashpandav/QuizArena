import React from "react";
export default function Questions({examArr}){
    return (
        <div className="examContainer">
            {examArr.map((exam, index) => (
                <div className="exam_module" key={index}>
                    <span>{index + 1}</span>
                    <div className="que">{exam.question}</div>
                    {Object.entries(exam.options).map(([optKey, optValue]) => (
                        <div key={optKey}>
                            <input type="radio" name={`op${index}`} value={optValue} id={`op${index + optKey}`} />
                            <label htmlFor={`op${index + optKey}`}>{optValue}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}