import { Typography } from '@mui/material';
import useFirebaseAuth from "../../helpers/hooks/useFirebaseAuth";
import React from 'react';
import './navbar.css';
// import HistoryIcon from '@mui/icons-material/History';

export default function Navbar() {
    const { signOutFromApp } = useFirebaseAuth();
    return (
        <div className="navbar-position">
        <div className="navbar-container">
            <div>
                <Typography variant="h4" sx={{color:"rgb(105, 105, 76)", fontWeight:"700"}}>Humanity</Typography>
            </div>
            <div className="navbar-options">
            <button ><Typography variant="h7" sx={{color:"rgb(105, 105, 76)", fontWeight:"700"}}>History</Typography></button>
                <button ><Typography variant="h7" sx={{color:"rgb(105, 105, 76)", fontWeight:"700"}} onClick={signOutFromApp}>LogOut</Typography></button>
                
            </div>
         
        </div>
 
       {/* <hr />       */}
    </div>
    )
}
