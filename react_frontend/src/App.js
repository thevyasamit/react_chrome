// // import './App.css';
// // import Home from './Home.js'
// // import Profile from './Profile.js';

// // export default Profile;



// // src/App.js
// // import React, { useEffect } from 'react';
// import GoogleLogin from './GoogleLogin';
// import UserInfo from './UserInfo';
// import LoginPage from './LoginPage';
// import GoogleLoginButton from './GoogleLogin';

// // function App() {
// //     useEffect(() => {
// //         // Check for the JWT token in the URL (if it exists) and store it
// //         const params = new URLSearchParams(window.location.search);
// //         const token = params.get('token');
// //         console.log(params)
// //         console.log(token)
// //         if (token) {
// //             localStorage.setItem('access_token', token);
// //             window.history.replaceState({}, document.title, "/"); // Clean URL
// //         }
// //     }, []);

// //     return (
// //         <div className="App">
// //             <h1>Login with Google</h1>
// //             <GoogleLogin />
// //             <UserInfo />
// //         </div>
// //     );
// // }

// // export default LoginPage;


// import React from 'react';

// export default LoginPage;
import LoginPage from './LoginPage';

// import axios from 'axios';

// import React from 'react';
// import UserInfo from './UserInfo';

// const App = () => {
//     return (
//         <div className="App">
//            "hi"
//         </div>
//     );
// };

// export default LoginPage;

import React from 'react';
import UserInfo from './UserInfo';

const App = () => {
    return (
        <div className="App">
            <UserInfo />
        </div>
    );
};

export default App;

