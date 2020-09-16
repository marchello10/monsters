import React from 'react'
import { Card } from '../card/card.component'
import './card-list.styles.css'

// The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.
// this is a functional component
// props are any parameters provided in App.js in <CardList  > element
//children are anything we enter between <CardList></CardList> (props.children)
export const CardList = (props) => (
    <div className='card-list'>
        {
            props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}/> ))
//Anytime you use the map() function inside of render, or you have a list of 
//the same jsx elements one after another, they need a key attribute
        }
    </div>)



