// import PropTypes from "prop-types";
// import { useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import LogineP from "./Header/LogineP";
// import { useAuth } from "./AuthContext";

// // ----------------------------------------------------------------------

// AuthGuard.propTypes = {
//   children: PropTypes.node,
// };

// export default function AuthGuard({ children }) {
//   const { isAuthenticated, isInitialized } = useAuth();

//   const { pathname } = useLocation();

//   const [requestedLocation, setRequestedLocation] = useState(null);

//   if (!isAuthenticated) {
//     if (pathname !== requestedLocation) {
//       setRequestedLocation(pathname);
//     }
//     return <LogineP />;
//   }

//   if (requestedLocation && pathname !== requestedLocation) {
//     setRequestedLocation(null);
//     return <Navigate to={requestedLocation} />;
//   }

//   return <> {children} </>;
// }
