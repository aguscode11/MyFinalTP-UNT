import React, { useState } from 'react'
import './MessageStyle.css'

const Message = ({emisor, hora, id, texto, status, deleteMessageById}) => {
    const [message_selected, setMessageSelected] = useState(false)

    const handleChangeMessageSelected = (e) => {
        e.preventDefault()
        setMessageSelected(true)
    }
    
    return (
        <div 
            className={`message-container ${emisor === 'YO' ? 'my-message' : 'other-message'}`}
            onContextMenu={handleChangeMessageSelected}
        >
            <p className="message-text">{texto}</p>
            <div className="message-footer">
                <span className="message-time">{hora}</span>
                {emisor === 'YO' && status === 'visto' && (
                    <span className="message-status">✓✓</span>
                )}
            </div>
            {message_selected && (
                <button 
                    onClick={() => deleteMessageById(id)}
                    className="delete-button"
                >
                    Eliminar
                </button>
            )}
        </div>
    )
}
export default Message