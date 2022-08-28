import React, { useState } from "react";
import Card from "../components/card/card";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import axiosConfig from "../services/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar/Navbar";
import useFirebaseAuth from "../helpers/hooks/useFirebaseAuth";
import Profile from "../components/Profile/Profile";
import { Typography } from "@mui/material";
import Table from "../components/adminDashboard/Table";
import ProgressBar from "@ramonak/react-progress-bar";
import Book from "../components/Book/Book";
import { setLevel } from "../features/userSlice";

const Home = () => {
  const { user, history, level, currentBook, isAdmin } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [recom, setRecom] = useState([]);
  const [progress, setProgress] = useState("0");

  useEffect(() => {
    const getProg = async () => {
      const { data } = await axiosConfig.get(`/progress?uid=${user.uid}`);
      setProgress(data);
      if (+data >= 70) {
        const { data } = axiosConfig.post(`/level?uid=${user.uid}`);
        dispatch(setLevel({ level: level + 1 }));
      }
    };
    getProg();
  }, [user.uid]);

  useEffect(() => {
    const getRecom = async () => {
      const { data } = await axiosConfig.get(`/recommendation?uid=${user.uid}`);
      setRecom(data);
    };
    getRecom();
  }, [user.uid]);

  useEffect(() => {
    const fetchUser = async () => {
      console.log(user);
      // const response = await axiosConfig.get('/users',);
      // console.log(response)
    };
    fetchUser();
  }, [user]);

  const { signOutFromApp } = useFirebaseAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUser = async () => {
      const { data } = await axiosConfig.get("/getusers");
      console.log("dsacbbcbe", data);
      setUsers(data);
    };
    getAllUser();
  }, []);

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "level",
      label: "Level",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "curBookID",
      label: "Currently Reading",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "start date",
      label: "Start Date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options = {
    filterType: "checkbox",
  };

  return (
    <div>
      {isAdmin ? (
        <div>
          {/* <MUIDataTable title={"Student List"} data={data} columns={columns} options={options} /> */}
          <Table data={users} />
        </div>
      ) : (
        <div className="flex flex-row">
          <div className="bg-[#fff2b6] w-[25%] h-screen p-4 ">
            <Profile />
          </div>
          <div>
            <div className="flex flex-col justify-center align-middle w-full mx-auto mt-6">
              <div className="text-5xl m-5">Level: {level}</div>
              <p className="text-center font-bold mb-2">Progress</p>
              <div className="flex justify-center">
                <ProgressBar
                  bgColor="#00FF00"
                  completed={progress}
                  width="600px"
                  height="30px"
                  margin="2rem"
                />
              </div>
              <div className="mt-4 bg-slate-300 py-6">
                <h1 className="text-3xl font-bold text-center">
                  Your Recommendations
                </h1>
                <div className="flex flex-row flex-wrap items-end justify-around">
                  <Book
                    url={recom[0]?.picture}
                    title={recom[0]?.title}
                    key={recom[0]?.bookID}
                    id={recom[0]?.bookID}
                  />
                  <Book
                    url={recom[1]?.picture}
                    title={recom[1]?.title}
                    key={recom[1]?.bookID}
                    id={recom[1]?.bookID}
                  />
                  <Book
                    url={recom[2]?.picture}
                    title={recom[2]?.title}
                    key={recom[2]?.bookID}
                    id={recom[2]?.bookID}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-start w-full">
              <Link to={"/category/fiction"}>
                <Tilt>
                  <Card
                    url="https://i.pinimg.com/736x/8e/94/e5/8e94e585f7830619014967ce11ce72f3.jpg"
                    title="Fiction"
                  />
                </Tilt>
              </Link>

              <Link to={"/category/sports"}>
                <Tilt>
                  <Card
                    url="https://i.pinimg.com/736x/ce/bd/46/cebd4630fa99373ee6a3b3b1738a137d.jpg"
                    title="Sports"
                  />
                </Tilt>
              </Link>

              <Link to={"/category/fantasy"}>
                <Tilt>
                  <Card
                    url="https://i.pinimg.com/736x/f9/1f/9c/f91f9c8b298804a44daf338e9ebcff0e.jpg"
                    title="Fantasy"
                  />
                </Tilt>
              </Link>

              <Link to={"/category/comics"}>
                <Tilt>
                  <Card
                    url="https://wallpaperaccess.com/full/54674.jpg"
                    title="Comics"
                  />
                </Tilt>
              </Link>

              <Link to={"/category/horror"}>
                <Tilt>
                  <Card
                    url="https://wallpapercave.com/wp/wp1998719.jpg"
                    title="Horror"
                  />
                </Tilt>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
