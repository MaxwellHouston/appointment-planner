import React from "react";

export const ContactForm = (props) => {

  const duplicateStyle = {
    backgroundColor: 'red',
    color: 'white'
  }
  
  return (
    <form onSubmit={props.handleSubmit}>
      <p>Enter Name:    
      <span style={props.duplicate ? duplicateStyle : {display: 'none'}}>Duplicate name entered</span>
      </p>
      <input value={props.name} onChange={props.handleNameInput} required />
      <p>Enter Number: <span style={{backgroundColor: 'white', color: 'grey'}}>xxx-xxx-xxxx</span></p>
      <input pattern='\d{3}-\d{3}-\d{4}' value={props.number} onChange={props.handleNumberInput} required />
      <p>Enter Email:</p>
      <input type='email' value={props.email} onChange={props.handleEmailInput} required />
      <br/>
      <input type='submit' value='Add Contact' />
    </form>
  );
};
