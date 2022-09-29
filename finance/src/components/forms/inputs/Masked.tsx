import React, { ChangeEvent } from 'react'
import { InputMask } from 'react-input-mask';

export default function Masked (props: {value: string, Change: (e: ChangeEvent<HTMLInputElement>) => void})  {
  return (
    <InputMask 
      mask='+375(11)111-11-11'
      value=''
      onChange={props.Change}
      >
    </InputMask>
  );
}
