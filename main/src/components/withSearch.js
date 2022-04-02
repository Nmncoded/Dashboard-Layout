import React from 'react';
// import data from './components/data.js';

function withSearch(Component,mainData){
    // console.log(Component)
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                data: [] ,
            }
        }
        
        handleChange = ({target}) => {
            let {value} = target;
            // console.log(value);
            this.setState((prev) => {
                return {
                    data: mainData.filter(single => single.title.includes(value))
                }
            })
        }
        render(){
            // console.log(this.props)
            return(
                <Component data={this.state.data} handleChange={this.handleChange} />
            )
        }
    }
}

export default withSearch ;