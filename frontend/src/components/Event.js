import classes from "./Event.module.css";

const Event = (props) => {
  return (
    <li className={classes.event}>
      <h2>{props.eventName}</h2>
      <h3>{props.eventDesc}</h3>
      <p>{props.eventDate}</p>
    </li>
  );
};

export default Event;
