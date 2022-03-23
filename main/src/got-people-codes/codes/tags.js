import React from 'react';

// console.log(got);


function Tags(props){
    return (
        <>
        <ul className="all-house-names">
            {
                props.data.map(house => <li key={house.name} className={(props.nameTag === house.name) ? 'active' : ''} onClick={() => props.handleClick(house.name)} >{house.name}</li>)
            }
        </ul>
        
        </>
    )
}

export default Tags;