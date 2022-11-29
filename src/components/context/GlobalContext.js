// import React, { useReducer, useMemo, useEffect } from 'react';
// // import { fetchStates, fetchCountry } from '../api';
// import { useAuth } from '../hooks';
// import {GlobalReducer} from './reducers';

// const initialState = {
//   states: [],
//   countries: []
// }

// export const GlobalContext = React.createContext({})

// const GlobalContextProvider = ({ children }) => {
//   const [state] = useReducer(GlobalReducer, initialState)
//   // const [state, dispatch] = useReducer(GlobalReducer, initialState)
//   const {isSignedIn} = useAuth()

//   const getAppConfig = useMemo(() => () => {
//   }, [])

//   useEffect(() => {
//     if(isSignedIn){
//       getAppConfig()
//     } 
//   }, [getAppConfig, isSignedIn])

//   return <GlobalContext.Provider
//     value={{
//       states: state.states,
//     }}
//   >
//     {children}
//   </GlobalContext.Provider>
// }

// export default GlobalContextProvider