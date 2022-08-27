import bookImage from '../images/bookImage.jpg';
import './History.css';
import { Typography } from '@mui/material';

function History() {
    return (
        <>
        <div className="book-item">
            <img src={bookImage} alt="" />
            <Typography variant="h4" sx={{marginTop:"1rem", marginBottom:"0.5rem",marginLeft:"auto",marginRight:"auto", fontFamily:"Ubuntu", fontWeight:"700"}}>Book Title</Typography>
            <Typography variant="h8"  sx={{margin:"auto", marginBottom:"0.5rem", fontFamily:"Ubuntu", fontWeight:"400"}}>160 pages</Typography>    
            
            <button>Read Book</button>
        </div>
        </>
    )
}

export default History
