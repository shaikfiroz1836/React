import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <img src='https://www.dashtech.org/wp-content/uploads/2020/06/coding-1920x1282.jpg' width={333}/>
       <h1>{props.title}</h1>
       <p>{props.description}</p>
    </div>
  )
}

export default Card
