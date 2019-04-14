import React from 'react';
import { ValidatorForm } from 'react-form-validator-core';

export class Form extends React.Component{
    static addValidationRule=(type,callback)=>{
        ValidatorForm.addValidationRule(type,callback);
    }
    render(){
        return (
            <ValidatorForm
                className="ui form"
                {...this.props}
            >
            {this.props.children}
            </ValidatorForm>
        )
    }
}