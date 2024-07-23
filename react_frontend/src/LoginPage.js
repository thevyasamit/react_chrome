import React from 'react';
import axios from 'axios';

const LoginPage = () => {
    const handleLogin = () => {
        axios.get('http://127.0.0.1:8000/auth/login/', {withCredentials:true})
            .then(response => {
                if (response.data.url) {
                    window.location.href = response.data.url;
                }
            })
            .catch(error => {
                console.error('Login request failed', error);
            });
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <div>
                    <p>Hi there 🙂 </p>
                    <p>Click below to sign in with Google</p>
                    <button onClick={handleLogin} style={styles.button}>
                        Login with Google
                    </button>
                </div>
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
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default LoginPage;
