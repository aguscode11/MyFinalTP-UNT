import React, { useState, useEffect } from 'react';
import MessagesList from '../../Components/MessagesList/MessagesList';
import { NewMessageForm } from '../../Components/NewMessageForm/NewMessageForm';
import { useParams } from 'react-router';
import { getContactById } from '../../services/contactService';
import './ChatScreenStyle.css';

const ChatScreen = () => {
    const { contact_id } = useParams();
    const [messages, setMessages] = useState([]);
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const contactData = getContactById(contact_id);
        if (contactData) {
            setContact(contactData);
            setMessages(contactData.messages || []);
        }
    }, [contact_id]);

    const deleteMessageById = (message_id) => {
        setMessages(prev => prev.filter(msg => msg.id !== message_id));
    };

    const addNewMessage = (text) => {
        const newMessage = {
            emisor: 'YO',
            hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            texto: text,
            status: 'no-visto',
            id: messages.length + 1
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const deleteAllMessages = () => {
        setMessages([]);
    };

    if (!contact) {
        return null; // O muestra un loader
    }

    return (
        <div className="chat-container">
            <div className="chat-header">
                <div className="avatar-container">
                    <img src={contact.avatar} alt={contact.name} className="avatar" />
                </div>
                <div className="contact-info">
                    <h2>{contact.name}</h2>
                    <span className="contact-status">últ. vez hoy a la(s) {contact.messages[9].hora}</span>
                </div>
            </div>
            
            {messages.length > 0 && (
                <button 
                    onClick={deleteAllMessages} 
                    className="delete-all-messages-button"
                >
                    Borrar todos los mensajes
                </button>
            )}

            <MessagesList messages={messages} deleteMessageById={deleteMessageById} />
            <NewMessageForm addNewMessage={addNewMessage} />
        </div>
    );
};

export default ChatScreen;