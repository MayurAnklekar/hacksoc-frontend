// import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

function Table(props) {
  //   const [search, setSearch] = useState('');

  //   const [filteredData, setFilteredData] = useState(props.data);

  //   const filterData = () => {
  //      setFilteredData(props.data);
  //   }
  //   useEffect(()=>{
  //     filterData();
  //   },[])

  // useEffect(()=>{
  //     setFilteredData(props.data)
  // },[])

  //   useEffect(()=>{
  //      const result = props.data.filter(data => {
  //          return data.name.toLowerCase().match(search.toLowerCase());
  //      })
  //      setFilteredData(result);

  //   },[search])

  console.log(props)

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Level",
      selector: (row) => row.level,
    },
    {
      name: "Current Book",
      selector: (row) => row.curBookID,
    },
    {
      name: "Start Date",
      selector: (row) => new Date(row.startDate).toLocaleDateString("en-US"),
    },
    {
      name: "Status",
      selector: (row) => "Due",
    },
    {
      name: "Summary",
      cell: (row) => (
        // <button className="cursor-pointer">View Submissions</button>
        <Link to={`/submission/${row.uid}`} className="cursor-pointer">
          View Submissions
        </Link>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={props.data}
        fixedHeader
        fixedHeaderScrollHeight="450px"
        title="Admin DashBoard"
        pagination
        highlightOnHover
        // subHeader
        // subHeaderComponent={
        //   <input
        //     type="text"
        //     placeholder="Search here..."
        //     className="border-2 p-2 rounded-md w-72 mb-10"
        //     value={search}
        //     onChange={(e) => setSearch(e.target.value)}
        //   />
        // }
        // subHeaderAlign="center"
      />
    </div>
  );
}

export default Table;
