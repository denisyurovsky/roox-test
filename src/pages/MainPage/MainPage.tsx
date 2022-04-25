import {UserCard} from "../../components/userCard/UserCard";
import React, {useState} from "react";
import './MainPage.scss'
import {SideNav} from "../../components/sideNav/SideNav";
import {User} from "../../interfaces/UserInterface";
import {Title} from "../../components/Title/Title";

export const MainPage = (props: any) => {

    const [users, setUsers] = useState(props.data)

    const sortByCity = () => {
        setUsers(() => [...users].sort((a: User, b: User) => {
            return a.address.city.localeCompare(b.address.city)
        }))
    }

    const sortByCompany = () => {
        setUsers(() => [...users].sort((a: User, b: User) => {
            return a.company.name.localeCompare(b.company.name)
        }))
    }

    return (
        <div className='app-container'>
            <SideNav sortByCity={sortByCity} sortByCompany={sortByCompany}/>
            <div className='users-container'>
                <Title title={'Список пользоваетелей'}/>
                {users.map((user: User) => {
                    return <UserCard key={user.id} user={user}/>
                })}
                <span className='users-container__footer'>Найдено: {users.length} Пользователей</span>
            </div>
        </div>
    )
}