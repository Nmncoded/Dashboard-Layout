
import  './stylesheets/p-style.css';
import React from 'react';
import got from './codes/p-data.js'
// import ReactDOM from 'react-dom';
import Tags from './codes/tags'
import Card from './codes/cards.js'



class PeopleApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nameTag: "",
        }
    }
    handleClick(name){
        this.setState({
            nameTag:name,
        })
    }
    render () {
        return (
        <>
            <Tags data={got.houses} nameTag={this.state.nameTag} handleClick={ (value) =>  this.handleClick(value)} />
            <Card allPeople={(!this.state.nameTag) ? got.houses.map(house => house.people) : got.houses.find(house => (house.name === this.state.nameTag)).people}/>
        </>
        )
        }
}

// ReactDOM.render(<App />,document.getElementById(`parent-of-ul`));
export default PeopleApp;