import bookImage from './images/bookImage.jpg';

export default function Book() {
    return (
        <div className="book-item">
            <img src={bookImage} alt="">
            <h3>Book Title</h3>
            <button>Read Book</button>
        </div>
    )
}
