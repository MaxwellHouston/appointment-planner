import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  
  const[title, setTitle] = useState('');
  const[contact, setContact] = useState('');
  const[date, setDate] = useState('');
  const[time, setTime] = useState('');
  
  const handleTitle = ({target}) => {
    setTitle(target.value)
  };
  const handleContact = ({target}) => {
    setContact(target.value)
  };
  const handleDate = ({target}) => {
    setDate(target.value)
  };
  const handleTime = ({target}) => {
    setTime(target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    }
   props.handleAddAppointment(appointment);
   setTitle('');
   setContact('');
   setDate('');
   setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        contacts={props.contacts}
        title={title} 
        contact={contact} 
        date={date} 
        time={time}
        handleTitle={handleTitle}
        handleContact={handleContact}
        handleDate={handleDate} 
        handleTime={handleTime}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={props.appointments}/>
      </section>
    </div>
  );
};
