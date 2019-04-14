# semantic-ui-react-form-validator

> A semantic-ui implementation of react-form-validator-core

[![NPM](https://img.shields.io/npm/v/semantic-ui-react-form-validator.svg)](https://www.npmjs.com/package/semantic-ui-react-form-validator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save semantic-ui-react-form-validator
```

## Usage
First Lets look at the simple input field validation.
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
      ref="form"
      onSubmit={this.onSubmit} 
      >
        <Input 
          type="text"
          label="Test Input"
          onChange={(e)=>{this.setState({value:e.target.value})}} 
          value={this.state.value} 
          validators={['required']} 
          errorMessages={['this field is required']} 
          width={6} 
          />
          
        <Button color="teal">Submit<Button>
      </From>
    )
  }
}
```
##Result
![](input_val.gif)
## License

MIT © [Aman9804](https://github.com/Aman9804)
