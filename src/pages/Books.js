import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosConfig from "../services/axiosConfig";
import Book from "../components/Book/Book";
import './books.css';

const Books = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  console.log(id);

  useEffect(() => {
    const getBooks = async () => {
      const { books } = await axiosConfig.get("/books", {
        category: id,
        level: user.level,
      });
      console.log(books);
    };
    getBooks();
  }, [id, user]);

  return <div className="book-item-container">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>    
  </div>;
};

export default Books;
