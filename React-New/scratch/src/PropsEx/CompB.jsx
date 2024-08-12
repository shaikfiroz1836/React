import React from 'react'

const CompB = (props) => {
  return (
    <div>
        <h1>Component B</h1>
        <h1>Emp Id:{props.id}</h1>
        <h1>Emp Name:{props.name}</h1>
        <h1>Emp Sal:{props.sal}</h1>
    </div>
  )
}

export default CompB
