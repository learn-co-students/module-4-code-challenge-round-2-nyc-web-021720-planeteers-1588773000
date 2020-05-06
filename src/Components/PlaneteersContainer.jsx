import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
    console.log("props check  1", props.planeteers)

  return (
    <ul className="cards">
      {
        props.planeteers.map(planeteer => <Planeteer key={planeteer.id} planeteer={planeteer}/>)
      }
    </ul>
  )

};

export default PlaneteersContainer;
