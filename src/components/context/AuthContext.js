// import dayjs from 'dayjs';
// import { useRouter } from 'next/router';
// import React, { useCallback, useEffect, useState } from 'react';
// // import { authorizeServiceApi, unauthorizeServiceApi } from '../api/config';
// import ShowLoader from '../../components/Loader/ShowLoader';
// // import {useLoader} from "../hooks";

// const TOKEN_VALIDITY_PERIOD = 1800;

// const UNAUTH_ROUTES = [
//   '/login',
// ]

// export const AuthContext = React.createContext({});

// const AuthContextProvider = ({ children }) => {
//   //const [loading, setLoading] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const [isSignedIn, setIsSignedIn] = useState(null);
//   const [userData, setUserData] = useState(null);
//   // const {displayLoader, hideLoader} = useLoader();
//   const router = useRouter()
//   const signIn = useCallback(
//     (userData) => {
//       displayLoader();
//       const auth = {
//         ...userData,
//         token: userData.signedToken,
//         expires: dayjs().add(TOKEN_VALIDITY_PERIOD, 's').toISOString(),
//       }
//       sessionStorage.setItem('auth', btoa(JSON.stringify(auth)));
//       authorizeServiceApi(userData.signedToken);
//       setUserData(auth);
//       setIsSignedIn(true);
//       setLoading(false);
//       router.push('/', undefined, { replace: true });
//       hideLoader();
//     },
//     [router]
//   );

//   const signOut = useCallback(() => {
//     sessionStorage.removeItem('auth');
//     unauthorizeServiceApi();
//     setUserData(null);
//     setIsSignedIn(false);
//     setLoading(false);
//   }, []);

//   const checkIfPreviousAuth = useCallback(() => {
//     const authValue = sessionStorage.getItem('auth');
//     if (authValue) {
//       const auth = JSON.parse(atob(authValue));
//       const tokenExpires = dayjs(auth.expires);
//       if (tokenExpires.isAfter(dayjs()) && auth.token) {
//         authorizeServiceApi(auth.token);
//         setUserData(auth);
//         setIsSignedIn(true);
//         setLoading(false);
//         return;
//       } else {
//         signOut();
//       }
//     }
//     setIsSignedIn(false);
//     setLoading(false);
//   }, [signOut]);

//   useEffect(() => {
//     if (!isSignedIn && !loading && !UNAUTH_ROUTES.includes(router.pathname)) {
//       router.push('/login', undefined, { replace: true });
//       return;
//     }
//     if (isSignedIn && router.pathname === '/login') {
//       router.push('/', undefined, { replace: true });
//       return;
//     }
//   }, [isSignedIn, router, loading]);

//   useEffect(() => {
//     checkIfPreviousAuth();
//   }, [checkIfPreviousAuth]);

//   useEffect(() => {
//     if (isSignedIn && userData) {
//       const checkSessionExpired = () => {
//         const tokenExpires = dayjs(userData.expires);
//         if (tokenExpires.isBefore(dayjs())) {
//           // display logout modal
//           signOut();
//         }
//       };
//       const interval = setInterval(checkSessionExpired, 30000);

//       return () => clearInterval(interval);
//     }
//   }, [isSignedIn, userData, signOut]);

//   const values = {
//     isSignedIn,
//     loading,
//     signIn,
//     signOut,
//     userData
//   };

//   return (
//     <AuthContext.Provider value={values}>
//       {loading 
//         ? <ShowLoader /> 
//         : (isSignedIn || router.pathname ==='/login') && children
//         }
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
