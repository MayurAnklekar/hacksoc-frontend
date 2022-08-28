import { Typography } from "@mui/material";
import React from "react";

function card(props) {
  return (
    <>
    <div className="w-[25em] h-[20em] flex flex-col justify-start m-7 mt-28 rounded-xl  drop-shadow-2xl">
        <Typography variant="h4" sx={{fontWeight:"700", color:"rgb(105, 105, 76)", margin:"10px auto",}}>{props.title}</Typography>
      <img
        src={props.url}
        alt="img"
        className="object-cover h-full w-full rounded-xl "
      />
      <div className="flex justify-center content-center items-center text-4xl ">
      </div>
    </div>
    </>
  );
}

export default card;

