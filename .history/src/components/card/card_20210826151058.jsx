import React from 'react';
import { useHistory } from "react-router-dom";
import './card.css';
import '../monster-profile/monster-profile';


export function Card(props){ 

    const history = useHistory();
    const routeChange = () =>{ 
        let path = `newPath`; 
        history.push(path);
    }

    return(    
        <div className="card-container" onClick={routeChange}>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            <h2>{props.monster.name}</h2>
            <p> { props.monster.email } </p>
        </div>
    );
}
