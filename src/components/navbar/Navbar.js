import { Typography } from '@mui/material';
import React from 'react';
import './navbar.css';
// import HistoryIcon from '@mui/icons-material/History';

export default function Navbar() {
    return (
        <div className="navbar-position">
        <div className="navbar-container">
            <div>
                <Typography variant="h4" sx={{color:"black", fontWeight:"700"}}>Humanity</Typography>
            </div>
            <div className="navbar-options">
            <button ><Typography variant="h7" sx={{color:"black", fontWeight:"700"}}>History</Typography></button>
                <button ><Typography variant="h7" sx={{color:"black", fontWeight:"700"}}>LogOut</Typography></button>
                
            </div>
         
        </div>
 
       {/* <hr />       */}
    </div>
    )
}
