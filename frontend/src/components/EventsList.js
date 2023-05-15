import Event from "./Event";
import classes from "./EventsList.module.css";

const EventsList = (props) => {
  return (
    <ul className={classes["events-list"]}>
      {props.events.map((event) => (
        <Event
          key={event.id}
          eventName={event.eventName}
          eventDesc={event.eventDesc}
          eventDate={event.eventDate}
        />
      ))}
    </ul>
  );
};

export default EventsList;
