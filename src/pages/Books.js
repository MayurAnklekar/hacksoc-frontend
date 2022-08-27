import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosConfig from "../services/axiosConfig";
import Book from "../components/Book/Book";
import "./books.css";

const Books = () => {
    const { id } = useParams();
    const { user } = useSelector((state) => state.user);
    console.log(id);

    useEffect(() => {
        const getBooks = async () => {
            console.log("catetory id", id);
            console.log("level", user.level);
            const books = await axiosConfig.post("/books", {
                category: id,
                level: user.level||1
            });
            console.log("books", books);
            // await fetch('https://hacksoc-app.herokuapp.com/api/books', {
            // method: 'POST', body: JSON.stringify({id: "123",title: "homework", isDone: false, user: "foo"})})
            // .then(response => response.json())
            // .then(data => {
            // console.log(data) 
            // })

        };
        getBooks();
    }, [user]);

    return (
        <div className="book-item-container">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </div>
    );
};

export default Books;
