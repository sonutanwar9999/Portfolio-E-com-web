// /* eslint-disable react-hooks/exhaustive-deps */
// import axios from "axios";
// import React, {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useMemo,
//   useReducer,
//   useState,
// } from "react";

// const initialState = {
//   isInitialized: false,
//   isAuthenticated: false,
//   user: null,
// };

// const reducer = (state, action) => {
//   if (action.type === "INITIAL") {
//     return {
//       isInitialized: true,
//       isAuthenticated: action.payload.isAuthenticated,
//       user: action?.payload?.user,
//     };
//   }
//   if (action.type === "LOGIN") {
//     return {
//       ...state,
//       isAuthenticated: true,
//       user: action?.payload?.user,
//     };
//   }
//   if (action.type === "REGISTER") {
//     return {
//       ...state,
//       isAuthenticated: false,
//       user: action?.payload?.user,
//     };
//   }
//   if (action.type === "LOGOUT") {
//     return {
//       ...state,
//       isAuthenticated: false,
//       user: null,
//     };
//   }
//   if (action.type === "ONBOARD") {
//     return {
//       ...state,
//       isAuthenticated: true,
//       user: action?.payload?.user,
//     };
//   }
//   return state;
// };
// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, dispatch] = useReducer(reducer, initialState);
//   const initialize = useCallback(async () => {
//     try {
//       const accessToken = localStorage.getItem("accessToken") || "";
//       if (accessToken) {
//         // setSession(accessToken);
//         const response = await axios.get("/api/user/profile");
//         // const { user } = response.data;
//         // console.log({ user });
//         dispatch({
//           type: "INITIAL",
//           payload: {
//             isAuthenticated: true,
//             user,
//           },
//         });
//       } else {
//         dispatch({
//           type: "INITIAL",
//           payload: {
//             isAuthenticated: false,
//             user: null,
//           },
//         });
//       }
//     } catch (error) {
//       dispatch({
//         type: "INITIAL",
//         payload: {
//           isAuthenticated: false,
//           user: null,
//         },
//       });
//     }
//   }, []);
//   useEffect(() => {
//     initialize();
//   }, [initialize]);
//   const login = () => {
//     // setUser((prevUser) => ({ ...prevUser, username: "exampleUser" }));
//     console.log("User logged in:", user);
//   };

//   const logout = () => {
//     // Perform your logout logic (e.g., remove user information from state)
//     // setUser(null);
//   };

//   const memoizedValue = useMemo(
//     () => ({
//       isInitialized: user.isInitialized,
//       isAuthenticated: user.isAuthenticated,
//       user: user.user,
//       method: "jwt",
//       login,
//       logout,
//     }),
//     [user.isAuthenticated, user.isInitialized, user.user, login, logout]
//   );
//   console.log({ memoizedValue });
//   return (
//     <AuthContext.Provider value={memoizedValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const contaxt = useContext(AuthContext);
//   console.log({ contaxt });
//   return contaxt;
// };
