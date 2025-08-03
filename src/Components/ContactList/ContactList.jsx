import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactListStyle.css'

const ContactList = ({ contacts }) => {
  return (
    <div class = "contact">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;