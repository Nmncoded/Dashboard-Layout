function Card(props) {
    // console.log(props);
    return (
      <ul className="ul">
        {props.allPeople.flat().map((person) => {
          return (
            <li className="c-li" key={person.name}>
              <div className="div-elm">
                <img src={person.image} alt={person.name} />
                <h1>{person.name}</h1>
              </div>
              <p className="p">{person.description}</p>
              <button>learn More!</button>
            </li>
          );
        })}
      </ul>
    );
  }
  
  export default Card;