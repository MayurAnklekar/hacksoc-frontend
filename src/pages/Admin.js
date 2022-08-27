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
            name: "currently reading",
            label: "Currently Reading",
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: "start data",
            label: "Start Date",
            options: {
                filter: true,
                sort: false,
            },
        },
    ];

    const data = [
        { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
        { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
        { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
        {
            name: "James Houston",
            company: "Test Corp",
            city: "Dallas",
            state: "TX",
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
