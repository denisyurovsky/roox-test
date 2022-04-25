import './UserCard.scss'
import {useNavigate} from "react-router";
import {User} from "../../interfaces/UserInterface";

export const UserCard = (props: {user: User}) => {

    const navigate = useNavigate()

    const {name, id} = props.user
    const {city} = props.user.address
    const companyName = props.user.company.name

    return (
        <div className='user-card-container'>
            <div>
                <span className='user-card-container__row'>
                    ФИО:
                </span>
                <span>{name}</span>
            </div>
            <div>
                <span className='user-card-container__row'>
                    город:
                </span>
                <span> {city}</span>
            </div>
            <div>
                <span className='user-card-container__row'>
                    компания:
                </span>
                <span> {companyName}</span>
            </div>
            <button onClick={() => navigate(`/users/${id}`)} className='user-card-container__more-button'>
                Подробнее
            </button>
        </div>
    )
}