import React from 'react'
import {useEffect} from 'react'
import axiosConfig from "../services/axiosConfig";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {

    const {user, history, level, currentBook, isAdmin} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() =>{
        const fetchUser = async()=>{
            console.log(user)
            // const response = await axiosConfig.get('/users',);
            // console.log(response)
        }
        fetchUser();
    },[user])

  return (
    <div>Hello</div>
  )
}

export default Home