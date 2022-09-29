import React from 'react'
import Logo from '../logo/Logo';
import classes from './header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
        <Logo></Logo>
        <h4 className={classes.header_name}>Finance</h4>
    </header>
  )
}
