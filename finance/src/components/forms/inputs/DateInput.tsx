import React from 'react'
import { BIRTH_DATA } from '../../../constants';
import { DateInputInterface, DateInterface } from '../../../interfaces';
import classes from './input.module.css';

export default function DateInput(props: DateInputInterface) {
  const date: DateInterface ={day: props.day, month: props.month, year: props.year}
  return (
    <div>
      {BIRTH_DATA.map((item) => {
        return <input
        key={item} 
        type='text' 
        id={item}
        className={classes.date_input} 
        placeholder={item} 
        value={props[item as keyof typeof date]}
        onChange={props.onChange}/>
      })}
    </div>
  )
}
