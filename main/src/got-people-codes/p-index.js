
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
            people: got.houses.map(house => house.people),
        }
    }
    handleClick(name){
        this.setState({
            nameTag:name,
        })
    }
    handleChange = ({target}) => {
        let {value} = target;
        let allPeople = got.houses.reduce((acc,house) => {
            acc.push(house.people)
            return acc.flat();
        },[])
        // console.log(allPeople)
        this.setState({
            nameTag:"",
            people: allPeople.filter(person => person.name.includes(value))
        })
    }
    render () {
        // console.log(this.state.people)
        return (
        <>
            <input type="text" id='input' onChange={this.handleChange} placeholder="Search" />
            <Tags data={got.houses} nameTag={this.state.nameTag} handleClick={ (value) =>  this.handleClick(value)} />
            <Card allPeople={(!this.state.nameTag) ? this.state.people : got.houses.find(house => (house.name === this.state.nameTag)).people}/>
        </>
        )
        }
}


export default PeopleApp;