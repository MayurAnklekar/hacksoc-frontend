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

const Home = () => {
  const { user, history, level, currentBook, isAdmin } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

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
      console.log(data);
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
      {user.isAdmin ? (
        <div>
          <span>Admin</span>
          <button onClick={signOutFromApp}>LOGOUT</button>
          {/* <MUIDataTable title={"Student List"} data={data} columns={columns} options={options} /> */}
          <Table data={users} />
        </div>
      ) : (
        <div className="flex flex-row">
          <div className="bg-[#fff2b6] w-[25%] h-screen p-4 border-r-2 border-[#69694c79]">
            <Profile />
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
      )}
    </div>
  );
};

export default Home;
