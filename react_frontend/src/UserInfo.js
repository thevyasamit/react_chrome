
// // import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import LoginPage from './LoginPage';
// import React, { useState, useEffect } from 'react';

// const UserInfo = () => {
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/auth/user_data',)
//             .then(response => {
//                 if (response.data.email) {
//                     setUserData(response.data);
//                 }
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error fetching user data:', error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div style={styles.body}>
//             <div style={styles.container}>
//                 {userData ? (
//                     <div>
//                         <p>Hi {userData.given_name} 🙂</p>
//                         <p>Your email is {userData.email}</p>
//                         <img src={userData.picture} alt="User" style={styles.img} />
//                     </div>
//                 ) : (
//                     <LoginPage />
//                 )}
//             </div>
//         </div>
//     );
// };

// const styles = {
//     body: {
//         fontFamily: 'Arial, sans-serif',
//         backgroundColor: '#f4f4f4',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         margin: 0,
//     },
//     container: {
//         backgroundColor: 'white',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         textAlign: 'center',
//     },
//     img: {
//         borderRadius: '50%',
//         width: '100px',
//         height: '100px',
//         objectFit: 'cover',
//         marginTop: '10px',
//     },
// };

// export default UserInfo;


// import React, { useState, useEffect } from 'react';
// import { getCookie } from './utils';
// import LoginPage from './LoginPage';

// const UserInfo = () => {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const email = getCookie('user_email');
//         const name = getCookie('user_name');

//         if (email && name) {
//             setUserData({ email, given_name: name });
//         }
//     }, []);

//     return (
//         <div style={styles.body}>
//             <div style={styles.container}>
//                 {userData ? (
//                     <div>
//                         <p>Hi {userData.given_name} 🙂</p>
//                         <p>Your email is {userData.email}</p>
//                     </div>
//                 ) : (
//                     <LoginPage />
//                 )}
//             </div>
//         </div>
//     );
// };

// const styles = {
//     body: {
//         fontFamily: 'Arial, sans-serif',
//         backgroundColor: '#f4f4f4',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         margin: 0,
//     },
//     container: {
//         backgroundColor: 'white',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         textAlign: 'center',
//     },
// };

// export default UserInfo;


import React, { useState, useEffect } from 'react';
import { getQueryParams } from './utils';
import LoginPage from './LoginPage';

const UserInfo = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const queryParams = getQueryParams();
        const { email } = queryParams;

        if (email) {
            setUserData({ email });
        }
    }, []);

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                {userData ? (
                    <div>
                        <p>Hi 🙂</p>
                        <p>Your email is {userData.email}</p>
                    </div>
                ) : (
                    <LoginPage />
                )}
            </div>
        </div>
    );
};

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
    },
    container: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
};

export default UserInfo;
