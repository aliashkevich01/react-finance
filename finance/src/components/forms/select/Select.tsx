import React from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './select.module.css';
import { SelectPropsInterface } from '../../../interfaces';

export default function Select(props: SelectPropsInterface) {
  return (
    <Form.Select 
    className={classes.select} 
    aria-label="Select your ocean" 
    onChange={props.change} 
    defaultValue={props.default}>
      {props.items.map((item: string) => {
        return <option key={item} value={item}>{item}</option>
      })}
    </Form.Select>
  )
}
