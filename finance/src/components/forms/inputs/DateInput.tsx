import React from 'react'
import classes from './input.module.css';

export default function DateInput(props: any) {
  return (
    <div>
        <input 
        type='text' id="day"
        className={classes.date_input} 
        placeholder='DD' 
        value={props.day}
        onChange={props.onChange}/>
        <input 
        type='text' id="month" 
        className={classes.date_input} 
        placeholder='MM' 
        value={props.month}
        onChange={props.onChange}/>
        <input 
        type='text' id="year" 
        className={classes.date_input} 
        placeholder='YYYY' 
        value={props.year}
        onChange={props.onChange}/>
    </div>
  )
}
