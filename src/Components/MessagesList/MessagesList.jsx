import React from "react"
import Message from "../Message/Message"
import "./MessagesListStyle.css"

const MessagesList = ({ messages, deleteMessageById }) => {
    if (messages.length === 0) {
        return (
            <div className="empty-messages">
                <span>Envía un mensaje para iniciar la conversación</span>
            </div>
        )
    }
    
    return (
        <div className="messages-container">
            {messages.map((message) => (
                <div 
                    key={message.id}
                    className={`message-wrapper ${message.emisor === 'YO' ? 'my-message' : 'other-message'}`}
                >
                    <Message 
                        emisor={message.emisor} 
                        hora={message.hora} 
                        id={message.id} 
                        texto={message.texto} 
                        status={message.status}
                        deleteMessageById={deleteMessageById}
                    />
                </div>
            ))}
        </div>
    )
}

export default MessagesList