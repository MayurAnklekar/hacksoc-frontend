import { Typography } from '@mui/material';
import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div>
                <Typography variant="h5" sx={{color:"white"}}>Humanity</Typography>
            </div>
            <div className="navbar-options">
                <button>History</button>
                <button>Logout</button>
            </div>
        </div>
    )
}
