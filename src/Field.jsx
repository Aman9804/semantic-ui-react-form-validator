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
            {label ? <label></label>:null}
            <Te {...rest} />
            {error? <Label pointing >{errormsg}</Label> :""}
            </Form.Field>
        )
    }
}

// export class Date extends Component{
//     render(){
//         const {width,error,errormsg, ...rest}=this.props;
//         return (
//         <Form.Field width={width} error={error}>
//         <label>{this.props.label}</label>
//         <DateInput
//         {...rest}
//         />
//         {error? <Label pointing >{errormsg}</Label> :""}
//         </Form.Field>
//         )
//     }
// }
// export class Img extends Component{
//     triggerInput = () => this.fileInput.click()
//     render(){
//         const {width,error,errormsg,...rest}=this.props;
//         return (
//         <Form.Field width={width} error={error}>
//         <label>{this.props.label}</label>
//         <input {...rest} type="file" ref={r=>this.fileInput=r} autoComplete="off" style={{display:'none'}} />
//         {this.props.file ?
//         <Image src={URL.createObjectURL(this.props.file)} size="small" onDoubleClick={this.triggerInput}/>
//         : <AddImg onClick={this.triggerInput}  className="ui image small SVG"/>
//         }
//         <br/>
//         {error? <Label pointing >{errormsg}</Label> :""}
//         </Form.Field>
//         )
//     }
// }

export class Drop extends Component{
    render(){
        
        const {width,error,errormsg,label, ...rest}=this.props;
        console.log("dropdown label",label)
        return (
        <Form.Field width={width || 12} error={error}>
        {this.props.inline ? <span>{label}</span>:<label>{label}</label>}
        <Dropdown {...rest} />
        {error? <Label pointing >{errormsg}</Label> :""}
        </Form.Field>
        )
    }
}