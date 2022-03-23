import React from "react";
import {Link} from 'react-router-dom';

class Aside extends React.Component {
    constructor(props){
        super()
    }

    render(){
    return (
        <aside className="aside">
            <ul className="nav-links">
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/Articles" >Articles</Link>
                </li>
                <li>
                    <Link to="/People" >People</Link>
                </li>
                <li>
                    <Link to="/Books" >Books</Link>
                </li>
                <li>
                    <Link to="/Help" >Help & Support</Link>
                </li>
            </ul>
        </aside>
    )
    }
}
export default Aside;