import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
    
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/contact/')
            .then(response => {
                setContacts(response.data)   
            }
        )
    }, []);

    useEffect(() => {
        console.log("contcs changed")
    },[contacts])
    console.log(contacts)
    const theme = {
        theme : {
            background:'cyan',
            color:'black',
            padding: '0px 10px 10px 10px',
            width: '32rem'
        }
    };
    return (
    <div style={{background:'#FFFDD0',width:'35rem',height:'55rem', margin:'auto'}}>
        <h1 style={{color:'black', textAlign:'center'}}>Contact List</h1>
        <div style={{display: 'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>
            {contacts.map(contact => (
                <div className='contacts'style={theme.theme}>
                    <h1 key={contact.id}> {contact.name}'s Info:</h1>
                    <ul>
                        <li>Phone: {contact.phone}</li>
                        <li>Email: {contact.email}</li>
                    </ul>
                </div>
            ))}
        </div> 
    </div>   
    );
}
