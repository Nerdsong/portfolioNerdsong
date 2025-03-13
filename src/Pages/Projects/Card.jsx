import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({name,image,description,rute}) => {
  const navigate = useNavigate()
  return (
    <div>
        <div onClick={()=> navigate(rute)} className="card">
            <img src={image}/>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card