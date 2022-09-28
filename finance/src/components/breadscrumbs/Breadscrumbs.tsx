import React from 'react'
import classes from './breadscrumbs.module.css';

export default function Breadscrumbs(props: {isAuth: boolean}) {
  const renderScrumbs = (list: Array<string>) => {
    return list.map((el: string) => {
        return (
          <span key={el} className={classes.scrumb}>
            {el} <span>{el === list[list.length - 1] ? '' : ' -> '}</span>
          </span>
        )
    })
  } 
  return (
    <div className={classes.scrumb_wrap}>
      {props.isAuth ? 
      renderScrumbs(['Register info']) : 
      renderScrumbs(['Register info', 'Sign up info'])}
      </div>
  )
}
