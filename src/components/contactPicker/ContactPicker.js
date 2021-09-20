import React from "react";

export const ContactPicker = (props) => {

  const renderContacts = (array) => {
    let contacts = [];
    for(const contact of array){
      contacts.push(<option key={contacts.length} value={contact.name}>{contact.name}</option>)
    }
    return contacts;
  }

  return (
    <select onChange={props.handleContact} required>
      <option value='' />
      {renderContacts(props.contacts)}
    </select>
  );
};
