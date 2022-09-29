import React from 'react'
import Form from 'react-bootstrap/Form';
import { CheckboxPropsInterface } from '../../../interfaces';

export default function CheckBox(props: CheckboxPropsInterface) {
  return (
    <div key={`default-checkbox`} className="mb-3">
          {props.items.map((item: any, index: number) => {
            return <Form.Check 
            type='checkbox'
            id='default-checkbox'
            label={item}
            aria-label={`item ${index + 1}`}
            key={index}
            defaultChecked={props.checked.includes(item)}
            onChange={props.change}
          />
          })}
        </div>
  )
}
