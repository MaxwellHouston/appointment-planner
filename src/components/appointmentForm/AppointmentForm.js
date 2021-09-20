import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  let today = getTodayString();
  return (
    <form onSubmit={props.handleSubmit}>
      <p>Enter title:</p>
      <input value={props.title} onChange={props.handleTitle}/>
      <p>Enter appointment date:</p>
      <input type='date' value={props.date} onChange={props.handleDate} min={today} />
      <p>Enter appointment time:</p>
      <input type='time' value={props.time} onChange={props.handleTime} />
      <p>Select contact:</p>
      <ContactPicker contacts={props.contacts} handleContact={props.handleContact} />
      
      <input type='submit' value='Add appointment' />
    </form>
  );
};
