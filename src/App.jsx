import React, { useState } from 'react';
import ChatScreen from './Screens/ChatScreen/ChatScreen';
import { Route, Routes, useParams } from 'react-router';
import ContactScreen from './Screens/ContactScreen/ContactScreen';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="contacts-panel">
        <ContactScreen />
      </div>
      <div className="chat-panel">
        <Routes>
          <Route 
            path='/contact/:contact_id/messages' 
            element={<ChatScreen />} 
          />
          <Route
            path='*'
            element={
              <div className="empty-chat">
                <p>Selecciona un contacto para empezar a chatear</p>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;