import React, {useState} from "react";
import "./profilecard.css";
import { useDispatch, useSelector } from "react-redux";
import useFirebaseAuth from "../../helpers/hooks/useFirebaseAuth";
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
    const { user, currentBook, currentBookName } = useSelector(
        (state) => state.user
    );
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
        <div>
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
            <section className="profilecard gradient-border">
                <header>
                    <form>
                        <div className="flex justify-center content-center">
                            <img
                                // src={user?.preview || dp}
                                src={"" + user.photoURL + ""}
                                alt="profile_image"
                                className="profilecard__dp roundimage "
                            />
                        </div>
                    </form>
                    <h1>{user.name}</h1>
                </header>
                <article>
                    <div className="profilecard__info">
                        <h3>Email: </h3>
                        <h3>{user.email}</h3>
                    </div>
                    <div className="profilecard__info">
                        <h3>Currently Reading: </h3>
                        <h3>{currentBook === "" ? <>-</> : <>{currentBookName}</>}</h3>
                    </div>
                </article>
                <div className="btn-group">
                    <button
                        className="font-semibold bg-slate-600"
                        onClick={signOutFromApp}
                    >
                        Logout
                    </button>
                    {currentBook === "" ? (
                        <></>
                    ) : (
                        <button
                            className="font-semibold bg-slate-600"
                            onClick={handleClickOpen}
                        >
                            Summarise Book
                        </button>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Profile;
