import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import './card.css';
import { MonsterProfile } from '../monster-profile/monster-profile';



class Card extends Component(props){ 
    
    routeChange = () => {
        let path = `../monster-profile/monster-profile.jsx`;
        let history = useHistory();
        history.push(path);
    }

    render(){
    return(
    <div className="card-container" onClick={routeChange}>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2>{props.monster.name}</h2>
        <p> { props.monster.email } </p>
    </div>
);
}

export default Card;