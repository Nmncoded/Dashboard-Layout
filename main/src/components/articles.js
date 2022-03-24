import React from 'react';
import {Link} from 'react-router-dom';

class Articles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            p: [] ,
        }
    }
    handleChange = ({target}) => {
        let {value} = target;
        // console.log(value);
        this.setState((prev) => {
            return {
                p: this.props.data.filter(article => article.title.includes(value))
            }
        })
    }
    
    render(){
        
        return (
            <>
                <input id='input' type="text" onChange={this.handleChange}  placeholder="Search"/>
                <ul className="articles-data">
                    {
                        (this.state.p.length === 0 ? this.props.data: this.state.p).map(p => {
                            return(
                                <li className='home-li' key={p.slug} >
                                    <Link to={`/Articles/${p.slug}`} >{p.title}</Link>
                                    <div>{p.author}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}
export default Articles;