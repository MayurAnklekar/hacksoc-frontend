import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosConfig from "../services/axiosConfig";
import Book from "../components/Book/Book";
import "./books.css";

const Books = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const { user, level } = useSelector((state) => state.user);
  //   console.log(level, "for level");

  useEffect(() => {
    const getBooks = async () => {
      console.log("catetory id", id);
      console.log("level", user.level);
      const books = await axiosConfig.post("/books", {
        category: id,
        level: level,
      });
      setBook(books.data);
      //   console.log("for level", level);
      // await fetch('https://hacksoc-app.herokuapp.com/api/books', {
      // method: 'POST', body: JSON.stringify({id: "123",title: "homework", isDone: false, user: "foo"})})
      // .then(response => response.json())
      // .then(data => {
      // console.log(data)
      // })
    };
    getBooks();
  }, [user, id, level]);

  return (
    <div>
      <div className="text-5xl m-5">Level: {level}</div>
      <div className="book-item-container">
        {book.map((datas) => {
          return (
            <Book
              url={datas.picture}
              title={datas.title}
              key={datas.bookID}
              id={datas.bookID}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Books;
