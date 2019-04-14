import React from 'react';
import { ValidatorForm } from 'react-form-validator-core';

export class Form extends React.Component{
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