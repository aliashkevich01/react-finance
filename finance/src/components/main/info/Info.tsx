import React, { ChangeEvent, useState } from 'react'
import classes from './info.module.css';
import { parsedData } from '../../../constants';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckBox from '../../forms/checkbox/CheckBox';
import { useSelector } from 'react-redux';
import Select from '../../forms/select/Select';
import Radio from '../../forms/radio/Radio';
import { useDispatch } from 'react-redux';
import Input from '../../forms/inputs/Input';
import ModalWindow from '../../modal/Modal';
import { unAuthorizeAction, updateAction } from '../../../redux/actions';
import DateInput from '../../forms/inputs/DateInput';
import { ObjectInterface, StoreIterface } from '../../../interfaces';


export default function Info() {
 const dispatch = useDispatch();
 const {hobby, ocean, sex, firstName, lastName, mobilePhone, email, password, birthday} = useSelector((state: StoreIterface) => state.userReducer); 
 const [curFirstName, setCurFirstName] = useState(firstName);
 const [curLastName, setCurLastName] = useState(lastName);
 const [hobbies, setChecks] = useState(hobby);
 const [curOcean, setCurOcean] = useState(ocean);
 const [curSex, setCurSex] = useState(sex);
 const [phone, setPhone] = useState(mobilePhone);
 const [Inputpassword, setPassword] = useState(password);
 const [mail, setMail] = useState(email);
 const [curYear, setYear] = useState({
  'year': birthday.slice(0, 4),
  'month': birthday.slice(5, 7),
  'day': birthday.slice(8, 10)
});
 const [isModalShow, setModalShow] = useState(false);
 const handleModalClick = () => {
  setModalShow(false)
 }
 const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
  setCurFirstName(e.target.value);
 } 
 const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
  setCurLastName(e.target.value);
 } 
 const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
  const curHobbie = e.target.checked;
  curHobbie ? 
  setChecks([...hobbies, e.target.nextElementSibling?.textContent!]) :
   setChecks(
    [...hobbies].filter((item: string) => {
      return item !== e.target.nextElementSibling?.textContent
    })
   );
 };
 const handleChangeOcean = (e: ChangeEvent<HTMLSelectElement>) => {
  setCurOcean(e.target.value);
 }
 const handleChangeSex = (e: ChangeEvent<HTMLInputElement>) => {
  setCurSex(e.target.value);
 }
  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\s+/g, '');
    setPhone(val);
    console.log(val);
  }
  const handleChangeMail = (e: ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  }
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  const handleChangeYear = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if(target.id === 'year') {
      setYear({...curYear, year: target.value})
    } else if (target.id === 'month') {
      setYear({...curYear, month: target.value})
    } else {
      setYear({...curYear, day: target.value})
    }
  } 
  const countYear = (str: string) => {
    return (new Date().getTime() - new Date(str).getTime()) / 31536000000;
  }
  const inputsInfo = [
    {
      type: "text", 
      value: curFirstName,
      Change: handleChangeFirstName,
      labelText:"First name",
      placeholder:"",
    },
    {
      type: "text", 
      value: curLastName,
      Change: handleChangeLastName,
      labelText:"Last name",
      placeholder:"",
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
      type: "tel", 
      value: phone,
      Change: handleChangePhone,
      labelText:"Phone",
      placeholder:"+375 xx xxx-xx-xx",
    },
  ]
  const validateAll = () => {
    if(curFirstName.length <= parsedData.firstName.maxLength &&
       curFirstName.length >= parsedData.firstName.minLength &&
       curLastName.length <= parsedData.lastName.maxLength &&
       curLastName.length >= parsedData.lastName.minLength &&
       new RegExp(parsedData.email.regExp).test(mail) &&
       new RegExp(parsedData.mobilePhone.regExp).test(phone) &&
       countYear(`${curYear.year}-${curYear.month}-${curYear.day}`) <= parsedData.birthday.maxAge &&
       countYear(`${curYear.year}-${curYear.month}-${curYear.day}`) >= parsedData.birthday.minAge &&
       curSex &&
       curOcean &&
       hobbies.length
       ){
      dispatch(updateAction({
        firstName: curFirstName, 
        lastName: curLastName, 
        mobilePhone: phone, 
        password: Inputpassword, 
        email: mail, 
        birthday: '20',
        ocean: curOcean, 
        hobby: hobbies, 
        sex: curSex,
      }));
      dispatch(unAuthorizeAction());
    } else {
      alert('One or more inputs are invalid')
    }
  }
  const handleApplyClick = () => {
    setModalShow(true);
  }
  return (
    <section className={classes.info_wrap}>
      <h1 className={classes.info_header}>Register fieldset</h1>
      {Object.keys(parsedData).map((item: string, index) => {
        const temp:ObjectInterface = parsedData[item];
          if (temp.minLength || temp.regExp)
          {
            const curItem = inputsInfo[index];
            return <Input 
            key={index} 
            {...curItem}
            />;
          }
          else if(temp.maxAge) {
            return (
              <React.Fragment key={item}>
                <h5 className={classes.topic_header}>Your birthday</h5>
                <DateInput 
                year={curYear.year}
                month={curYear.month}
                day={curYear.day}
                onChange={handleChangeYear}
              />
              </React.Fragment>
            )
          }
          else if(temp.oneOf){
            return (
              <React.Fragment key={index} >
                <h5 className={classes.topic_header}>Favourite ocean</h5>
                <Select 
                items={temp.oneOf} 
                change={handleChangeOcean} 
                default={curOcean}
                />
              </React.Fragment>
            )
          }
          else if(temp.anyOf){
            return (
              <React.Fragment key={index} >
                <h5 className={classes.topic_header}>Hobbies</h5>
                <CheckBox
                change={handleChangeCheckbox} 
                items={temp.anyOf} 
                checked={hobbies} 
                />
              </React.Fragment>
            );
          }
          else{
            return (
              <React.Fragment key={index} >
                <h5 className={classes.topic_header}>Your sex</h5>
                <Radio checked={curSex} onChange={handleChangeSex}/>
              </React.Fragment>
            );  
        }
      })}
      <Button variant='success' onClick={handleApplyClick}>Show info</Button>
      <Button variant='primary' onClick={validateAll}>Complete</Button>
      <ModalWindow 
      items={
        [curFirstName, curLastName, mail, phone, Inputpassword, hobbies, curOcean, curSex, birthday]
      }
      show={isModalShow} 
      onHide={handleModalClick}/>
    </section>
  )
}
