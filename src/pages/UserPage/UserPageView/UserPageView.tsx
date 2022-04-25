import './UserPageView.scss'
import React, {useState} from "react";
import {SideNav} from "../../../components/sideNav/SideNav";
import {CustomInput} from "../../../components/CustomInput/CustomInput";
import {CustomButton} from "../../../components/CustomButton/CustomButton";
import {Title} from "../../../components/Title/Title";

export const UserPageView = (props: any) => {

    const {name, email, phone, website, username} = props.user
    const {city, street, zipcode} = props.user.address

    const [isDisabled, setIsDisabled] = useState(true)

    const [inputName, setInputName] = useState(name)
    const [inputUserName, setInputUserName] = useState(username)
    const [inputEmail, setInputEmail] = useState(email)
    const [inputStreet, setInputStreet] = useState(street)
    const [inputCity, setInputCity] = useState(city)
    const [inputZipcode, setInputZipcode] = useState(zipcode)
    const [inputPhone, setInputPhone] = useState(phone)
    const [inputWebsite, setInputWebsite] = useState(website)
    const [textarea, setTextarea] = useState('')

    const showData = () => {
        const data = {
            inputName,
            inputUserName,
            inputEmail,
            inputStreet,
            inputCity,
            inputZipcode,
            inputPhone,
            inputWebsite,
            textarea
        }
        console.log(JSON.stringify(data, undefined, 4));
    }

    return (
        <div className='wrapper'>
            <SideNav/>
            <div className='user-page-view__container'>
                <div className='user-page-view__header'>
                    <Title title={'Профиль пользователя'}/>
                    <CustomButton title={'Редактировать'} buttonAction={() => setIsDisabled(!isDisabled)}>
                        Редактировать
                    </CustomButton>
                </div>
                <div className='user-page-view__user-data'>
                    <CustomInput inputTitle={'Name'} onChange={(e: any) => setInputName(e.target.value)}
                                 disabled={isDisabled} defaultValue={inputName}/>
                    <CustomInput inputTitle={'User Name'} onChange={(e: any) => setInputUserName(e.target.value)}
                                 disabled={isDisabled} defaultValue={inputUserName}/>
                    <CustomInput inputTitle={'Email'} onChange={(e: any) => setInputEmail(e.target.value)}
                                 disabled={isDisabled} defaultValue={inputEmail}/>
                    <CustomInput inputTitle={'Street'} onChange={(e: any) => setInputStreet(e.target.value)}
                                 disabled={isDisabled} defaultValue={inputStreet}/>
                    <CustomInput inputTitle={'City'} onChange={(e: any) => setInputCity(e.target.value)}
                                 disabled={isDisabled} defaultValue={inputCity}/>
                    <CustomInput inputTitle={'Zip code'} onChange={(e: any) => setInputZipcode(e.target.value)}
                                 disabled={isDisabled} defaultValue={inputZipcode}/>
                    <CustomInput inputTitle={'Phone'} onChange={(e: any) => setInputPhone(e.target.value)}
                                 disabled={isDisabled} defaultValue={inputPhone}/>
                    <CustomInput inputTitle={'Website'} onChange={(e: any) => setInputWebsite(e.target.value)}
                                 disabled={isDisabled} defaultValue={inputWebsite}/>
                    <div className='user-page-view__comment'>
                        <span>Comment</span>
                        <textarea disabled={isDisabled} onChange={(e) => setTextarea(e.target.value)}/>
                    </div>
                    <button disabled={!inputName || !inputUserName
                        || !inputEmail || !inputStreet || !inputWebsite
                        || !inputPhone || !inputZipcode || !inputCity || isDisabled} onClick={showData} className='user-page-view__button'>Отправить
                    </button>
                </div>
            </div>
        </div>
    )
}