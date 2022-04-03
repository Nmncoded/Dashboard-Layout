import React from 'react';
import {Link} from 'react-router-dom';
import withSearch from './withSearch';
import data from './data';
import userContext from './userContext';

class Articles extends React.Component {
    /* constructor(props){
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
    } */
    static contextType = userContext;
    render(){
        // console.log(this.context);
        // console.log(this.props);
        return (
            <>
                <input id='input' type="text" onChange={this.props.handleChange}  placeholder="Search"/>
                <ul className="articles-data">
                    {
                        (this.props.data.length === 0 ? data: this.props.data).map(p => {
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
let EnhancedArticles  = withSearch(Articles,data);
export default EnhancedArticles;