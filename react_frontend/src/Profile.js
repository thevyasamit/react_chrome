import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
    
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/contact/')
            .then(response => setContacts(response.data))
            .catch(error => console.log(error));
    }, []);
    console.log(contacts)
    const theme = {
        theme : {
            background:'cyan',
            color:'black',
            padding: '0px 10px 10px'
        }
    };
    return (
    <>
        {contacts.map(contact => (
            <div className='contacts'style={theme.theme}>
                <h1 key={contact.id}> {contact.name}'s Info:</h1>
                <ul>
                    <li>Phone: {contact.phone}</li>
                    <li>Email: {contact.email}</li>
                </ul>
            </div>
        ))}
    </>    
    );
}
