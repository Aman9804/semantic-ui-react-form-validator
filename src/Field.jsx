import React,{Component} from 'react';
import {Form, Label,Input,TextArea as Te,Dropdown} from 'semantic-ui-react';
// import {DateInput} from 'semantic-ui-calendar-react';
// import {ReactComponent as AddImg} from '../images/add-image.svg';
export class Field extends Component{
    render(){
        const {width,error,errormsg,label, ...rest}=this.props;
        return (
            
            <Form.Field width={width || 12} error={error}>
                {this.props.inline ?<Input {...rest} label={label}/>:(<React.Fragment><label>{label}</label> <Input {...rest}/></React.Fragment>)}
               
                {error? <Label pointing >{errormsg}</Label> :""}
            </Form.Field>        )
    }
}
export class TextArea extends Component{
    render(){
        const {width,error,errormsg,label, ...rest}=this.props;
        return (
            <Form.Field width={width} error={error}>
            {label ? <label>{label}</label>:null}
            <Te {...rest} />
            {error? <Label pointing >{errormsg}</Label> :""}
            </Form.Field>
        )
    }
}

export class Drop extends Component{
    render(){
        
        const {width,error,errormsg,label, ...rest}=this.props;
        // console.log("dropdown label",label)
        return (
        <Form.Field width={width || 12} error={error}>
        {this.props.inline ? <span>{label} &nbsp; <Dropdown inline {...rest} /></span>:<React.Fragment><label>{label}</label><Dropdown {...rest} /></React.Fragment>}
        
        {error? <Label pointing >{errormsg}</Label> :""}
        </Form.Field>
        )
    }
}