import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router";
import * as actions from "../../actions/index";

const surveyFormReview = ({onCancel, formValues, submitSurvey, history})=>{
    const reviewFields = formFields.map((field)=>{
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        );
    })

    return(
        <div>
            <h5>
                Please Review the form!
            </h5>
            {reviewFields}
            <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>Back</button>
            <button 
                onClick={()=>submitSurvey(formValues,history)}
                className="green btn-flat right white-text">
                    Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
}

function mapStateToProps(state){
    return {formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps,actions)(withRouter(surveyFormReview));