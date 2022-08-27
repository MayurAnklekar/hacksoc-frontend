import bookImage from './images/bookImage.jpg';
import './book.css';
import { Typography } from '@mui/material';

export default function Book() {
    return (
        <div className="book-item">
            <img src={bookImage} alt="" />
            <Typography variant="h4" sx={{marginTop:"1rem", marginBottom:"0.5rem",marginLeft:"auto",marginRight:"auto", fontFamily:"Ubuntu", fontWeight:"700"}}>Book Title</Typography>
            <Typography variant="body1"  sx={{margin:"auto", fontFamily:"Ubuntu", fontWeight:"400"}}>160 pages</Typography>
            <button>Read Book</button>
        </div>
    )
}
