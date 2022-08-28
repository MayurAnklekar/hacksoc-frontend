import React from "react";

function ReportCard() {
  return (
    <div>
      <div className="flex flex-col h-[30em] w-[25em] justify-center  items-center bg-gray-100 m-5 rounded-tl-3xl">
        <h2 className="m-5 my-5 text-3xl">Title</h2>
        <p className="m-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corporis
          ipsa fugit natus sunt. Sint aliquid totam et incidunt nulla debitis
          officiis maiores? Qui placeat maiores culpa facere reprehenderit
          exercitationem, iusto provident delectus reiciendis ex laborum
          explicabo necessitatibus quo nemo deleniti fugiat atque repudiandae.
          Obcaecati explicabo magnam repudiandae perferendis adipisci!
        </p>
        <div className="flex flex-row">
          <button className="bg-yellow-300 w-24 h-10 rounded-md mx-4">
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
