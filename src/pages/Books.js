import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosConfig from "../services/axiosConfig";

function Books() {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    const getBooks = async () => {
      const { data } = await axiosConfig.get("/books", {
        genre: id,
        level: user.level,
      });
    };
    getBooks();
  }, [id, user]);

  return <div>Books</div>;
}

export default Books;
