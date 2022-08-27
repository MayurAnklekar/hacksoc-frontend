import "./book.css";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBook } from "../../features/userSlice";
import axiosConfig from "../../services/axiosConfig";

export default function Book(props) {
  const today = new Date();
  const dispatch = useDispatch();
  const { currentBook, user } = useSelector((state) => state.user);
  const handler = async () => {
    if (!currentBook) {
      dispatch(setCurrentBook(props.id));
      const data = await axiosConfig.post("/currentread", {
        currentBook: props.id,
        uid: user.uid,
        startDate: today,
        title: props.title,
      });
    } else {
    }
  };

  return (
    <div className="book-item">
      {/* <div className="h-[15em] flex justify-center content-center"> */}
      <img src={props.url} alt="img" />
      {/* </div> */}
      <Typography
        variant="h7"
        sx={{
          marginTop: "1rem",
          marginBottom: "0.5rem",
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily: "Ubuntu",
          fontWeight: "700",
          maxWidth: "200px",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ margin: "auto", fontFamily: "Ubuntu", fontWeight: "400" }}
      >
        {props.pages}
      </Typography>
      <button onClick={handler}>
        {currentBook === props.id ? <>Currently reading</> : <>Read Now</>}
      </button>
    </div>
  );
}
