import React from 'react';

function GoogleLoginButton() {
    const handleGoogleLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/auth/login/',);
            if (response.redirected) {
                window.location.href = response.url;
            } else {
                // Handle errors if any
                console.error('Login failed', response);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <button onClick={handleGoogleLogin}>
            Login with Google
        </button>
    );
}

export default GoogleLoginButton;
