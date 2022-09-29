import React from 'react'
import { useSelector } from 'react-redux'
import Breadscrumbs from '../breadscrumbs/Breadscrumbs';
import AuthForm from './auth/AuthForm';
import Info from './info/Info';

export default function Main() {
  const isAuth = useSelector((state: any) => state.userReducer.isAuthorized);
  return (
    <React.Fragment>
      <Breadscrumbs isAuth={isAuth}/>
      <div>{isAuth ? <Info /> : <AuthForm />}</div>
    </React.Fragment>
  )
}
