import React from 'react';

class SingleArticle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            slug : null,
        }
    }
    componentDidMount(){
        this.setState({
            slug:this.props.match.params.id,
        })
    }
    render(){
        // console.log(this.props.match.params.id);
        if(!this.state.slug){
            return <h1>Loading... </h1>
        }
        return(
            <h1>Your slug article is: {this.state.slug} </h1>
        )
    }
}

export default SingleArticle;