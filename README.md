# semantic-ui-react-form-validator

> A semantic-ui implementation of react-form-validator-core

[![NPM](https://img.shields.io/npm/v/semantic-ui-react-form-validator.svg)](https://www.npmjs.com/package/semantic-ui-react-form-validator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save semantic-ui-react-form-validator
```

## Usage

```jsx
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.css'; //Import the css only once in your project
import {Form,Input, Dropdown,TextArea} from 'semantic-ui-react-form-validator'
import {Button} from 'semantic-ui-react';
class App extends Component {
  componentDidMount(){
    //this is how you can add custom validation rules
    Form.addValidationRule('isFoo',value=>{
      var foo=/foo/;
      return foo.test(value)
    })
  }
  render () {
    return (
      <Form 
      ref="form" //Important
      onSubmit={this.onSubmit} 
      >
        <Input 
          type="text"
          label="Test Input"
          onChange={(e)=>{this.setState({value:e.target.value})}} //Required
          value={this.state.value} //
          validators={['required']} //array of validation rules
          errorMessages={['this field is required']} //Array of Error Messages for respective validation rules
          width={6} //optional
          />
          <Dropdown
          width={6}
          inline //optional
          label="Choose"
          placeholder="Select Authorized Deo"
          options={}
          onChange={(e,{value})=>this.setState({dropdwonValue:value})}
          value={this.state.dropdwonValue}
          validators={['required']}
          errorMessages={['You must select at least one Deo']}
          />

          <TextArea
          label="Thsi is a Text Area"
          validators={['required','isFoo']} //isFoo is a custom Validation rule
          errorMessages={['Cannot Be empty','Doesn\'t Contain the word foo']}
          value={this.state.txtValue}
          onChange={e=>{this.setState({txtValue:e.target.value})}}
          />
        <Button color="teal">Submit<Button>
      </From>
    )
  }
}
```

## License

MIT © [Aman9804](https://github.com/Aman9804)
