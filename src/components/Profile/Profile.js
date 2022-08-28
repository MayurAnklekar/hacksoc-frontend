import React from "react";
import "./profilecard.css";
import { useDispatch, useSelector } from "react-redux";
import useFirebaseAuth from "../../helpers/hooks/useFirebaseAuth";
import { Typography } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import SummarizeIcon from '@mui/icons-material/Summarize';

const Profile = () => {
  const dispatch = useDispatch();
  const { signOutFromApp } = useFirebaseAuth();
  const { user, currentBook } = useSelector((state) => state.user);
  console.log("Profile", user.photoURL);
  return (
    <div className="sidebar">
      <div className="avatar">
        <img
          src={"" + user.photoURL + ""}
          alt="profile_image"
          className="profilecard__dp roundimage "
        />
        <Typography variant="h4" sx={{fontWeight:"700", color:"rgb(254, 255, 225)"}}>Welcome Back</Typography>
        <Typography variant="h6"sx={{fontWeight:"700", color:"rgb(254, 255, 225)"}}>{user.name}</Typography>
      </div>

      
      <div className="sidebar-options">
      <div>
      <Typography variant="h5"sx={{fontWeight:"700", color:"rgb(105, 105, 76)", marginBottom:"1.5rem"}}>Currently Reading :</Typography>
      <Typography variant="h5"sx={{fontWeight:"700", color:"rgb(105, 105, 76)", marginBottom:"5rem"}}>Book Name</Typography>
      </div>

      

      <div>
         <SummarizeIcon sx={{marginRight:"1rem", color:"rgb(105, 105, 76)"}}/><button><Typography variant="h5"sx={{fontWeight:"700", color:"rgb(105, 105, 76)", marginBottom:"1.5rem"}}>Summarize</Typography></button>
      </div>

      <div>
        <LogoutIcon sx={{marginRight:"1rem", color:"rgb(105, 105, 76)"}}/><button onClick={signOutFromApp}><Typography variant="h5"sx={{fontWeight:"700", color:"rgb(105, 105, 76)"}}>LogOut</Typography></button>
      </div>
      </div>

      
    </div>
  );
};

export default Profile;
