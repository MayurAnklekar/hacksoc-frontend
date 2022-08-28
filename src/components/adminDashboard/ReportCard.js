import React from "react";
import axiosConfig from "../../services/axiosConfig";

function ReportCard(props) {
  const handler = async () => {
    const res = await axiosConfig.post("/approval", {
      bookID: props.bk,
      uid: props.uid,
      eval: "approved",
    });
    console.log(res);
  };

  return (
    <div>
      <div className="flex flex-col h-[30em] w-[25em] justify-center  items-center bg-gray-100 m-5 rounded-tl-3xl">
        <h2 className="m-5 my-5 text-3xl">{props.title}</h2>
        <p className="m-5">{props.summary}</p>
        <div className="flex flex-row">
          <button
            className="bg-yellow-300 w-24 h-10 rounded-md mx-4"
            onClick={handler}
          >
            Approve
          </button>
          <button className="bg-yellow-300 w-24 h-10 rounded-md ">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReportCard;
