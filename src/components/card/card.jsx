import React from 'react';
import './card.css';

const generate_random_link = () => {
    let link = 'https://i.imgur.com/';
    for (let index = 0; index < 5; index++) {
        link += generate_random_char();

    }
    return link + '.png';
}

const generate_random_char = () => {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26))
}

export const Card = (props) => (
    <div className="card-container">
        {
            props.luck
                ? <img className="max-img" alt="monster" src={generate_random_link()} />
                : <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        }
        <h2>{props.monster.name}</h2>
        <p> {props.monster.email} </p>
    </div>
)
