import React from "react";
import Card from "../components/card/card";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import axiosConfig from "../services/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import useFirebaseAuth from "../helpers/hooks/useFirebaseAuth";

const Home = () => {
  const { user, history, level, currentBook, isAdmin } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const { signOutFromApp } = useFirebaseAuth();

  useEffect(() => {
    const fetchUser = async () => {
      console.log(user);
      // const response = await axiosConfig.get('/users',);
      // console.log(response)
    };
    fetchUser();
  }, [user]);

  return (
    <div className="flex flex-row">
      <div className="bg-slate-100 w-[25%] h-screen p-4 ">
        <button onClick={signOutFromApp}>LOGOUT</button>
      </div>
      <div className="flex flex-row flex-wrap justify-around w-full">
        <Link to={"/"}>
          <Tilt>
            <Card
              url="https://i.pinimg.com/736x/8e/94/e5/8e94e585f7830619014967ce11ce72f3.jpg"
              title="Fiction"
            />
          </Tilt>
        </Link>

        <Link to={"/"}>
          <Tilt>
            <Card
              url="https://i.pinimg.com/736x/ce/bd/46/cebd4630fa99373ee6a3b3b1738a137d.jpg"
              title="Sports"
            />
          </Tilt>
        </Link>

        <Link to={"/"}>
          <Tilt>
            <Card
              url="https://i.pinimg.com/736x/f9/1f/9c/f91f9c8b298804a44daf338e9ebcff0e.jpg"
              title="Fantasy"
            />
          </Tilt>
        </Link>

        <Link to={"/"}>
          <Tilt>
            <Card
              url="https://wallpaperaccess.com/full/54674.jpg"
              title="Comics"
            />
          </Tilt>
        </Link>

        <Link to={"/"}>
          <Tilt>
            <Card
              url="https://wallpapercave.com/wp/wp1998719.jpg"
              title="Horror"
            />
          </Tilt>
        </Link>
      </div>
    </div>
  );
};

export default Home;
