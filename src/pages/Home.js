import React from 'react'
import {useEffect} from 'react'
import axiosConfig from "../services/axiosConfig";
import {useDispatch, useSelector} from "react-redux";
import useFirebaseAuth from "../helpers/hooks/useFirebaseAuth";

const Home = () => {

    const {user, history, level, currentBook, isAdmin} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { signOutFromApp } = useFirebaseAuth();

    useEffect(() =>{
        const fetchUser = async()=>{
            console.log(user)
            // const response = await axiosConfig.get('/users',);
            // console.log(response)
        }
        fetchUser();
    },[user])

  return (
    <div><div>Hello naman</div><button onClick={signOutFromApp}>LOGOUT</button></div>
  )
}

export default Home