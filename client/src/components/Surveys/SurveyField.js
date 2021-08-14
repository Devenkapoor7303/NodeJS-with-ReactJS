import React from "react";

const surveyField=({input,label, meta:{error,touched}})=>{
    return(
        <div>
            <label>{label}</label>
            <input {...input} />
            <div className="red-text">
                {touched && error}
            </div>
        </div>
    );
}

export default surveyField;