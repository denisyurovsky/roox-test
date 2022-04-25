import React from "react";
import './SideNav.scss'
import {CustomButton} from "../CustomButton/CustomButton";

export const SideNav = (props: any) => {
    return (
        <div className='sort-container'>
            <span>Сортировка</span>
            <CustomButton title={'по городу'} buttonAction={props.sortByCity}/>
            <CustomButton title={'по компании'} buttonAction={props.sortByCompany}/>
        </div>
    )
}