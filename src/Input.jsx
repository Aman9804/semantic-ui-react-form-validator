import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';

import {Field,TextArea as Tx,Drop} from './Field.jsx';
export class Input extends ValidatorComponent{
    render(){
        const { errorMessages, validators, requiredError, validatorListener,width, ...rest } = this.props;
        return (
            
            <Field 
            {...rest}
            width={width}
            error={!this.state.isValid}
            ref={(r) => { this.input = r; }}
            errormsg={this.errorText()}
            />
            
        );
    }
    errorText() {
        const { isValid } = this.state;
 
        if (isValid) {
            return null;
        }
 
        return (
            <div style={{ color: 'red' }}>
                {this.getErrorMessage()}
            </div>
        );
    }
}

export class TextArea extends ValidatorComponent{
    render(){
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
        return (
            
                <Tx
                    {...rest}
                    ref={(r) => { this.input = r; }}
                    error={!this.state.isValid}
                    errormsg={this.errorText()}
                />
                
            
        );
    }
    errorText() {
        const { isValid } = this.state;
 
        if (isValid) {
            return null;
        }
 
        return (
            <div style={{ color: 'red' }}>
                {this.getErrorMessage()}
            </div>
        );
    }
}
// export class DateValidator extends ValidatorComponent{
//     render(){
//         const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
//         return (
            
//                 <Date
//                     {...rest}
//                     ref={(r) => { this.input = r; }}
//                     error={!this.state.isValid}
//                     errormsg={this.errorText()}
//                 />
                
            
//         );
//     }
//     errorText() {
//         const { isValid } = this.state;
 
//         if (isValid) {
//             return null;
//         }
 
//         return (
//             <div style={{ color: 'red' }}>
//                 {this.getErrorMessage()}
//             </div>
//         );
//     }
// }
// export class ImgValidator extends ValidatorComponent{
//     render(){
//         const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
//         return (
            
//                 <Img
//                     {...rest}
//                     ref={(r) => { this.input = r; }}
//                     error={!this.state.isValid}
//                     errormsg={this.errorText()}
//                     input={this.input}
//                 />
                
            
//         );
//     }
//     errorText() {
//         const { isValid } = this.state;
 
//         if (isValid) {
//             return null;
//         }
 
//         return (
//             <div style={{ color: 'red' }}>
//                 {this.getErrorMessage()}
//             </div>
//         );
//     }
// }
export class Dropdown extends ValidatorComponent{
    render(){
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
        return (
            
                <Drop
                    {...rest}
                    ref={(r) => { this.input = r; }}
                    error={!this.state.isValid}
                    errormsg={this.errorText()}
                    input={this.input}
                />
                
            
        );
    }
    errorText() {
        const { isValid } = this.state;
 
        if (isValid) {
            return null;
        }
 
        return (
            <div style={{ color: 'red' }}>
                {this.getErrorMessage()}
            </div>
        );
    }
}