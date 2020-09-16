import React from 'react'
import './card.styles.css'

    // &size180x180 were hardcoded in the link

export const Card = (props) => (
    <div className="card-container">
        <img 
            alt="monster" 
            src={`https://robohash.org/${props.monster.id}/set=set2&size180x180`}
        />
        <h2>{ props.monster.name }</h2>
        <p> {props.monster.email} </p>
    </div>
) 