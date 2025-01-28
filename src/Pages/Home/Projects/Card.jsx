import React from 'react'

const Card = ({name,image,description, method}) => {

  return (
    <div>
        <div className="card" onClick = {method} >
            <img src={image}/>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card