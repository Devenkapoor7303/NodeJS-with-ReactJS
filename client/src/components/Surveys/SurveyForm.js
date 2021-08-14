import React from "react";
import {reduxForm, Field} from "redux-form";
import surveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmail from "../../utils/validateEmail";
import formFields from "./formFields";

const FIELDS = formFields;

class SurveyForm extends React.Component{
    renderFields(){
        return(
            FIELDS.map((field)=>{
                return(
                    <Field key={field.name} component={surveyField} type="text" label={field.label} name={field.name} />
                );
            })
        );
    }
    render(){
        return (
            <div>
                <form onSubmit={this,this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const error={};

    error.recipients= validateEmail(values.recipients || "");

    if(!values.title){
        error.title="You must provide a value";
    }

    if(!values.subject){
        error.subject="You must provide a value";
    }

    if(!values.body){
        error.body="You must provide a value";
    }



    return error;
}

export default reduxForm({
    validate,
    destroyOnUnmount:false,
    form: "surveyForm"
})(SurveyForm);