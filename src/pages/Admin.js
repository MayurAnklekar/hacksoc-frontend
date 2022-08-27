import React, {useEffect, useState} from "react";
import useFirebaseAuth from "../helpers/hooks/useFirebaseAuth";
import Navbar from "../components/navbar/Navbar";
import MUIDataTable from "mui-datatables";
import axiosConfig from "../services/axiosConfig";


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
            <div className="text-2xl font-bold text-center m-5">Admin Dashboard</div>
            <MUIDataTable title={"Student List"} data={users} columns={columns} options={options} />
        </div>
    );
};

export default Admin;
