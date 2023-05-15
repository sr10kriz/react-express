import React, { useRef } from "react";

import classes from "./AddEvents.module.css";

function AddEvents(props) {
  const eventName = useRef("");
  const eventDesc = useRef("");
  const eventDate = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const events = {
      eventName: eventName.current.value,
      eventDesc: eventDesc.current.value,
      eventDate: eventDate.current.value,
    };

    props.onAddEvent(events);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Event Name</label>
        <input type="text" id="name" ref={eventName} />
      </div>
      <div className={classes.control}>
        <label htmlFor="desc">Event Desc</label>
        <textarea rows="5" id="desc" ref={eventDesc}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Event Date</label>
        <input type="date" id="date" ref={eventDate} />
      </div>
      <button>Add Event</button>
    </form>
  );
}

export default AddEvents;
