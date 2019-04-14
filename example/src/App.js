import React, { Component } from 'react'
import 'semantic-ui-css/semantic.css';
import {Form,Input, Dropdown,TextArea} from 'semantic-ui-react-form-validator'
import {Header,Container, Button, Grid, Segment} from 'semantic-ui-react';
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
    const options=[
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
    ];
    return (
      <Container>
        <Grid centered columns={1}>
          <Grid.Column width={10}>
          <Segment>
        <Segment inverted color="teal"><Header inverted content="TEST FROM VALIDATION" centered/></Segment>
        
        <Form onSubmit={this.onSubmit} ref="form">
          <Input type="text"
          label="INPUT LABEL"
          onChange={(e)=>{this.setState({value:e.target.value})}}
          value={this.state.value}
          validators={['required']}
          errorMessages={['this field is required']}
          />
          <Input
          inline
          type="text"
          label="INLINE LABEL"
          onChange={(e)=>{this.setState({value2:e.target.value})}}
          value={this.state.value2}
          // validators={['required']}
          errorMessages={['this field is required']}
          
          />
          <Dropdown
          width={6}
          label="DROPDOWN LABEL"
          placeholder="Select From Dropdown"
          options={options }
          />
          <Dropdown
          inline
          width={12}
          label="DROPDOWN INLINE LABEL"
          placeholder="Select From Dropdown"
          options={options }
          />

          <TextArea
          label="TEXTAREA LABEL"
          // validators={['required','isFoo']}
          errorMessages={['CAnnot Be empty','Doesn\'t Contain to word foo']}
          value={this.state.txtValue}
          onChange={e=>{this.setState({txtValue:e.target.value})}}
          />
          <Button color="teal">Submit</Button>
        </Form>
        </Segment>
        </Grid.Column>
        </Grid>
        
      </Container>
    )
  }
}
