import React, {useEffect, useState} from "react";
import axios from "axios";
import {Loader} from "../../../components/Loader/Loader";
import {MainPage} from "../MainPage";

export const MainPageContainer = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => setUsers(data.data))
            .then(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <MainPage data={users}/>
    )


}