import React, { useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import { getContactList } from '../../services/contactService';
import './ContactScreenStyle.css'



const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);

    return (
        <div class = "container">
            <div class = "leftside">
                <div class = "up-icons">
                    <i class="bi bi-chat-left-text"></i>
                    <i class="bi bi-clock-history"></i>
                    <i class="bi bi-broadcast"></i>
                    <i class="bi bi-people"></i>
                </div>
                <div class = "down-icons">
                    <i class="bi bi-gear"></i>
                    <i class="bi bi-person-circle"></i>
                </div>
            </div>
            <div class = "contacts-container">
                <div class = "contacts">
                <h1>QueOndaWeb</h1>
                <div class ="search">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder='Buscar un chat o iniciar uno nuevo' id='message' name='message' required class= "search-input"/>
                </div>
                <ContactList contacts={contactsState} />
                </div>
            </div>
        </div>
        
    );
};

export default ContactScreen;

/* 
v1:
Hace un componente de React llamado ContactScreen, que tenga un estado con la lista de contactos, dicha lista debera renderizarse dentro del componente, por cada contacto quiero que crees un <div></div> con la informacion del contacto. Observa las propiedades de cada contacto para mostrarlas en la pantalla, necesito que dividas el renderizado de la lista en un componente aparte llamado ContactList que reciba el estado de la lista y cada ContactItem tambien sera un componente aparte. 
*/