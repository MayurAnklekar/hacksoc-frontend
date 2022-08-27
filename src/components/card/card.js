import React from "react";

function card(props) {
  return (
    <div className="bg-slate-300  w-[30em] h-[20em]  mt-28 rounded-xl relative drop-shadow-2xl ">
      <img
        src={props.url}
        alt="img"
        className="object-cover h-full w-full rounded-xl "
      />
      <div className="flex justify-center content-center items-center text-4xl ">
        <h1 className="absolute top-0 text-white ">{props.title}</h1>
      </div>
    </div>
  );
}

export default card;
