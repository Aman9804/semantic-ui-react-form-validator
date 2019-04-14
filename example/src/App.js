import React, { Component } from 'react'
import 'semantic-ui-css/semantic.css';
import {Form,Input, Dropdown,TextArea} from 'semantic-ui-react-form-validator'
import {Header,Container, Button} from 'semantic-ui-react';
export default class App extends Component {
  onSubmit=()=>{
    alert("Submitted");
  }
  state={
    value:""
  }
  componentDidMount(){
    Form.addValidationRule('isFoo',value=>{
      var foo=/foo/;
      return foo.test(value)
    })
  }
  render () {
    return (
      <Container>
        <Header color="teal" content="TEST FROM VALIDATION"/>
        <Form onSubmit={this.onSubmit} ref="form">
          <Input type="text"
          label="Test Input"
          onChange={(e)=>{this.setState({value:e.target.value})}}
          value={this.state.value}
          validators={['required']}
          errorMessages={['this field is required']}
          width={6}
          />
          <Dropdown
          width={6}
          label="Choose"
          placeholder="Select Authorized Deo"
          options={ [
            {
              key: 'Jenny Hess',
              text: 'Jenny Hess',
              value: 'Jenny Hess',
              image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
            },
            {
              key: 'Elliot Fu',
              text: 'Elliot Fu',
              value: 'Elliot Fu',
              image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
            },
            {
              key: 'Stevie Feliciano',
              text: 'Stevie Feliciano',
              value: 'Stevie Feliciano',
              image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
            },
            {
              key: 'Christian',
              text: 'Christian',
              value: 'Christian',
              image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
            },
            {
              key: 'Matt',
              text: 'Matt',
              value: 'Matt',
              image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
            },
            {
              key: 'Justen Kitsune',
              text: 'Justen Kitsune',
              value: 'Justen Kitsune',
              image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
            },
          ]}
          />

          <TextArea
          label="Thsi is a Text Area"
          validators={['required','isFoo']}
          errorMessages={['CAnnot Be empty','Doesn\'t Contain to word foo']}
          value={this.state.txtValue}
          onChange={e=>{this.setState({txtValue:e.target.value})}}
          />
          <Button color="teal" inverted>Submit</Button>
        </Form>
      </Container>
    )
  }
}
