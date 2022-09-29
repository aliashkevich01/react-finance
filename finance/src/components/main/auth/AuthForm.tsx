import React, { ChangeEvent, useState } from 'react'
import { Button } from 'react-bootstrap';
import classes from './auth-form.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../forms/inputs/Input';
import { AuthorizeAction } from '../../../redux/actions';
import { StoreIterface } from '../../../interfaces';


export default function AuthForm() {
  const {mobilePhone, email, password} = useSelector((state: StoreIterface) => state.userReducer);
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [Inputpassword, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [mail, setMail] = useState('');
  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    let value = (e.target as HTMLInputElement).value;
    value = value.replace(/ /gm, '');
    setPhone(value);
    let num = `${value.substring(0, 4)}-${value.substring(4, 6)}-${value.substring(6, value.length)}`;
    (e.target as HTMLInputElement).textContent = num;
  }
  const handleChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  }
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  const handleChangeRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  }
  const validate = () => {
    (password === repeatPassword) &&
    (password === Inputpassword) && 
    (phone === mobilePhone) &&
    mail === email
    ? dispatch(AuthorizeAction()) 
    : alert('no success');
  }
  const inputsInfo = [
  {
    type: "tel", 
    value: phone,
    Change: handleChangePhone,
    labelText:"Phone",
    placeholder:"+375 xx xxx-xx-xx",
  },
  {
    type: "mail", 
    value: mail,
    Change: handleChangeMail,
    labelText:"Mail",
    placeholder:"example@example.com",
  },
  {
    type: "password", 
    value: Inputpassword,
    Change: handleChangePassword,
    labelText: "Password",
    placeholder: "",
  },
  {
    type: "password", 
    value: repeatPassword,
    Change: handleChangeRepeatPassword,
    labelText:"Repeat password",
    placeholder:"",
  }
  ]
  return (
    <section className={classes.auth_wrapper}>
      <Form className={classes.auth_form}>
      {inputsInfo.map((item, index) => {
        return <Input 
        key={index}
        type={item.type} 
        value={item.value} 
        Change={item.Change} 
        labelText={item.labelText} 
        placeholder={item.placeholder}
        />
      })}
      <Button variant="primary" onClick={validate}>Next</Button>
    </Form>
    </section>
  )
}
