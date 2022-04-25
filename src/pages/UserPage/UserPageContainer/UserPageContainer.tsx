import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {UserPageView} from "../UserPageView/UserPageView";
import axios from "axios";
import {Loader} from "../../../components/Loader/Loader";

export const UserPageContainer = () => {
    const {id} = useParams()

    const [userData, setUserData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            .then(data => setUserData(data.data[0]))
            .then(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return <UserPageView user={userData}/>
}