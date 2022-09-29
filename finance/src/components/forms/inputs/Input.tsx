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
        value={props.type==="tel" ? 
        `${props.value.slice(0,4)}${props.value.slice(4,6)} ${props.value.slice(6,9)} ${props.value.slice(9,11)} ${props.value.slice(11,13)}` : 
        props.value
        } 
        placeholder={props.placeholder} 
        onChange={props.Change}/>    
      </Form.Group>
  )
}
