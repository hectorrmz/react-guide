import React from 'react';
import classes from './MeetupItem.module.css';

const MeetupDetails = (props) => {
  return (
    <div>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default MeetupDetails;
