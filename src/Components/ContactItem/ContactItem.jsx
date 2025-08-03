import React from 'react';
import { Link } from 'react-router';
import './ContactItemStyle.css'

const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`}>
            <div class = "contact-card">
                <div class = "contact-card-left">
                    <img src={contact.avatar} alt={contact.name} class = "avatar" />
                </div>
                <div class = "contact-card-right">
                    <div class ="contact-card-right-info">
                        <h2>{contact.name}</h2>
                        <span class = "contact-card-message">{contact.messages[9].texto}</span>
                    </div>
                    <div class = "contact-card-right-time">
                        <span class = "contact-card-time">{contact.messages[9].hora}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ContactItem;