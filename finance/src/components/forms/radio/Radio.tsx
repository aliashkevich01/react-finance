import React from 'react'
import { Form } from 'react-bootstrap'
import { ALL_SEX } from '../../../constants'
import { RadioGroupInterface } from '../../../interfaces'

export default function Radio(props: RadioGroupInterface) {
  return (
    <div key={`default-radio`} className="mb-3">
        {ALL_SEX.map((item) => {
        return <Form.Check 
            value={item}
            type='radio'
            id='default-radio'
            label={item}
            key={item}
            checked={item === props.checked}
            onChange={(e) => {props.onChange(e)}}
          />
    })}
    </div>
  )
}
