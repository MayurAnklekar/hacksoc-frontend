import React, {useEffect, useState} from "react";
import useFirebaseAuth from "../helpers/hooks/useFirebaseAuth";
import Navbar from "../components/navbar/Navbar";
// import MUIDataTable from "mui-datatables";
import axiosConfig from "../services/axiosConfig";
import Table from "../components/adminDashboard/Table";


const Admin = () => {
    const { signOutFromApp } = useFirebaseAuth();
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const getAllUser = async () => {
            const {data} = await axiosConfig.get('/getusers');
            console.log(data);
            setUsers(data);
        }
        getAllUser();
    },[]);

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
            <Navbar />
            <span>Admin</span>
            <button onClick={signOutFromApp}>LOGOUT</button>
            {/* <MUIDataTable title={"Student List"} data={data} columns={columns} options={options} /> */}
            <Table data={users}/>
        </div>
    );
};

export default Admin;
