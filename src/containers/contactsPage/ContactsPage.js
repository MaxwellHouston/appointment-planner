import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const [email, setEmail] = useState('');
  const[duplicate, setDuplicate] = useState(false);

  useEffect(()=>{
    let contacts = props.contacts;
    for(const index of contacts){
      if(index.name === name){
        setDuplicate(true)
      }else {
        setDuplicate(false)
      }
    }
  },[name, props.contacts]);


  const handleNameInput = ({target}) => {
    setName(target.value);
  };
  const handleNumberInput = ({target}) => {
    setNumber(target.value);
  };
  const handleEmailInput = ({target}) => {
    setEmail(target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(duplicate){
      alert('Duplicate name detected, please enter a different name');
      return
    }
    let contact = {
      name: name,
      number: number,
      email: email
    };
    props.handleAddContact(contact);
    setName('');
    setNumber('');
    setEmail('');
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          duplicate={duplicate} 
          handleNameInput={handleNameInput} 
          handleNumberInput={handleNumberInput} 
          handleEmailInput={handleEmailInput}
          name={name} 
          number={number} 
          email={email}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={props.contacts}/>
      </section>
    </div>
  );
};
