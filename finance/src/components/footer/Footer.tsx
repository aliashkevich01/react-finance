import React from 'react'
import { FOOTER_NAV } from '../../constants';
import Logo from '../logo/Logo'
import classes from './footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
        <Logo />
        <nav className={classes.nav}>
            <ul className={classes.list}>
                {FOOTER_NAV.map((item, index) => {
                  return  <li key={index} className={classes.item}>{item}</li>
                })}
            </ul>
        </nav>
        <h4 className={classes.header_name}>Finance</h4>
    </footer>
  )
}
