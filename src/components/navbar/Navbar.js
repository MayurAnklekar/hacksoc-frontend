import { Typography } from '@mui/material';
import useFirebaseAuth from "../../helpers/hooks/useFirebaseAuth";
import React from 'react';
import './navbar.css';

export default function Navbar() {
    const { signOutFromApp } = useFirebaseAuth();
    return (
        <div className="navbar-container">
            <div>
                <Typography variant="h5" sx={{color:"white"}}>Humanity</Typography>
            </div>
            <div className="navbar-options">
                <button>History</button>
                <button onClick={signOutFromApp}>Logout</button>
            </div>
        </div>
    )
}
