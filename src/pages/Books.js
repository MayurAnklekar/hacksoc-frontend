import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useSelector } from 'react-redux'
import axiosConfig from '../services/axiosConfig'
const Books = () => {
    const {id} = useParams();
    const {user} = useSelector((state) => state.user);
    console.log(id)

    useEffect(()=>{
        const getBooks = async() =>{
            const {books} = await axiosConfig.get('/books', {"genre":id, "level":user.level});
            console.log(books)
        }
        getBooks();
    },[id, user])

  return (
    <div>Books</div>
  )
}

export default Books