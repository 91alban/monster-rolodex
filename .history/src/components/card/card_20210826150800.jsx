import React from 'react';
import './card.css';
import '../monster-profile/monster-profile';


function Card(props){ 

    return(    
        <div className="card-container" to='../monster-profile/monster-profile.jsx'>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h2>{props.monster.name}</h2>
            <p> { props.monster.email } </p>
        </div>
    );
}

export default Card;