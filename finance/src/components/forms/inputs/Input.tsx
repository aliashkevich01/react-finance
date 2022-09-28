import React from 'react'
import { Form } from 'react-bootstrap'
import { InputPropsInterface } from '../../../interfaces'
import classes from './input.module.css';

export default function Input(props: InputPropsInterface) {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{props.labelText}</Form.Label>
        <Form.Control 
        className={classes.input}
        type={props.type} 
        value={props.value} 
        placeholder={props.placeholder} 
        onChange={props.Change}/>
      </Form.Group>
  )
}
