import React from 'react';
import {Link} from 'react-router-dom';

class DisplayUI extends React.Component {
    constructor(props){
        super()
    }
    render(){
        return (
            <>
                <h1 className='home-h1' >🚀 Welcome to Homepage! 🚀</h1>
                <ul className='home-ul' >
                    <li className='home-li' >
                        <Link to="/Articles" >ARTICLES PAGE</Link>
                    </li>
                    <li className='home-li' >
                        <Link to="/Books" >BOOKS PAGE</Link>
                    </li>
                    <li className='home-li' >
                        <Link to="/People" >PEOPLE PAGE</Link>
                    </li>
                </ul>
            </>
        )
    }
}

export default DisplayUI;