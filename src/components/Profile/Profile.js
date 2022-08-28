import React, {useState} from "react";
import "./profilecard.css";
import { useDispatch, useSelector } from "react-redux";
import useFirebaseAuth from "../../helpers/hooks/useFirebaseAuth";
import { Typography } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axiosConfig from "../../services/axiosConfig";

const Profile = () => {
    const dispatch = useDispatch();
    const { signOutFromApp } = useFirebaseAuth();
    const {user, currentBook, currentBookName} = useSelector((state) => state.user);
    const [open, setOpen] = React.useState(false);
    const [summ, setSumm] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSubmit = async() => {
        setOpen(false);
        const {data} = await axiosConfig.post("/submit", {
            summary: summ,
            bookID: currentBook,
            userID: user.uid,
        });
        console.log(data);
        
    }

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <div className="sidebar">
         <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Summary of {currentBookName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here.
                        We will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        multiline
                        rows={12}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Summary"
                        fullWidth
                        variant="standard"
                        value={summ}
                        onChange={(e) => {
                        setSumm(e.target.value);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
    <div className="avatar">
      <img
        src={"" + user?.photoURL + ""}
        alt="profile_image"
        className="profilecard__dp roundimage "
      />
      <Typography variant="h4" sx={{fontWeight:"700", color:"rgb(254, 255, 225)"}}>Welcome Back</Typography>
      <Typography variant="h6"sx={{fontWeight:"700", color:"rgb(254, 255, 225)"}}>{user.name}</Typography>
    </div>

    
    <div className="sidebar-options">
    <div>
    <Typography variant="h5"sx={{fontWeight:"700", color:"rgb(105, 105, 76)", marginBottom:"1.5rem"}}>Currently Reading :</Typography>
    <Typography variant="h5"sx={{fontWeight:"700", color:"rgb(105, 105, 76)", marginBottom:"5rem"}}>{currentBookName}</Typography>
    </div>

    

    <div>
       <SummarizeIcon sx={{marginRight:"1rem", color:"rgb(105, 105, 76)"}}/><button  onClick={handleClickOpen}><Typography variant="h5"sx={{fontWeight:"700", color:"rgb(105, 105, 76)", marginBottom:"1.5rem"}}>Summarize</Typography></button>
    </div>

    <div>
      <LogoutIcon sx={{marginRight:"1rem", color:"rgb(105, 105, 76)"}}/><button onClick={signOutFromApp}><Typography variant="h5"sx={{fontWeight:"700", color:"rgb(105, 105, 76)"}}>LogOut</Typography></button>
    </div>
    </div>

    
  </div>
  )
}

export default Profile;