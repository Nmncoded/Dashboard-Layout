import React from 'react';
import data from './b-data.js';
import {Link} from 'react-router-dom';
import withSearch from '../components/withSearch';
import './b-style.css';

class MainBooks extends React.Component{
    /* constructor(props){
        super(props);
        this.state = {
            bookArr:[],
        }
    }
    handleChange = ({target}) => {
        let {value} = target;
        // console.log(value);
        this.setState((prev) => {
            return {
                bookArr: data.filter(book => book.title.includes(value))
            }
        })
    } */
    
    render(){
        return(
            (
                <>
                    <input type="text" id='input' placeholder='Search' onChange={this.props.handleChange} />
                    <ul className='b-ul' >
                {
                    (this.props.data.length === 0 ? data: this.props.data).map(book => {
                        // console.log(book)
                        return (
                            <li key={book.isbn} className="b-li">
                                <img className="b-img" src={book.image} alt={book.isbn} />
                                <h1 className="b-h1" >{book.title}</h1>
                                <h2 className="b-h2" >{book.author}</h2>
                                <Link className="b-a" to={book.website}>Buy Now</Link>
                            </li>
                        )
                    })
                }
            </ul>
                </>
            )
        )
    }
}
let EnhancedBooks = withSearch(MainBooks,data);
export default EnhancedBooks;