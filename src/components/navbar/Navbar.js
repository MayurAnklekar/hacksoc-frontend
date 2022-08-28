import { Typography } from "@mui/material";
import useFirebaseAuth from "../../helpers/hooks/useFirebaseAuth";
import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
// import HistoryIcon from '@mui/icons-material/History';

export default function Navbar() {
  const { signOutFromApp } = useFirebaseAuth();
  return (
    <div className="navbar-position">
      <div className="navbar-container">
        <div>
          <Link to={"/"}>
            <Typography variant="h4" sx={{ color: "black", fontWeight: "700" }}>
              Humanity
            </Typography>
          </Link>
        </div>
        <div className="navbar-options">
          <button>
            <Typography variant="h7" sx={{ color: "black", fontWeight: "700" }}>
              History
            </Typography>
          </button>
          <button>
            <Typography
              variant="h7"
              sx={{ color: "black", fontWeight: "700" }}
              onClick={signOutFromApp}
            >
              LogOut
            </Typography>
          </button>
        </div>
      </div>

      {/* <hr />       */}
    </div>
  );
}
