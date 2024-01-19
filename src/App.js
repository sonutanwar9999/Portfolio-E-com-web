import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Header/Home";
import Contect from "./Header/Contect";
import Mobile from "./ITEMS/Mobile";
import Laptop from "./ITEMS/Laptop";
import Tablets from "./ITEMS/Tablets";
import TotalOrder from "./ITEMS/TotalOrder";
import LogineP from "./Header/LogineP";

import NavBar from "./com/NavBar";

function App() {
  return (
    <>
      <div className="App ">
        <Router className="position-fixed">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/TotalOrder" element={<TotalOrder />}></Route>
            {/* <Route path="" element={<Homm />}></Route> */}
            <Route path="/Contect" element={<Contect />}></Route>
            <Route path="/LogineP" element={<LogineP />}></Route>
            <Route path="/Laptop" element={<Laptop />}>
              Laptop
            </Route>
            <Route path="/Mobile" element={<Mobile />}>
              Mobile
            </Route>
            <Route path="/Tablets" element={<Tablets />}>
              Tablets
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

// import { AuthProvider, useAuth } from "./AuthContext";
// import AuthGuard from "./AuthGuard";
// // console.log(useAuth);
// function App() {
//   const { isAuthenticated } = useAuth();
//   console.log({ isAuthenticated });
//   return (
//     // <AuthProvider>
//     <div className="App ">
//       <Router className="position-fixed">
//         <NavBar />
//         <AuthGuard>
//           <Routes>
//             <Route path="/Home" element={<Home />} />
//             <Route path="/TotalOrder" element={<TotalOrder />}></Route>
//             {/* <Route path="" element={<Homm />}></Route> */}
//             <Route path="/Contect" element={<Contect />}></Route>
//             {/* //  <Route path="/LogineP" element={<LogineP />}></Route> */}
//             <Route path="/Laptop" element={<Laptop />}>
//               Laptop
//             </Route>
//             <Route path="/Mobile" element={<Mobile />}>
//               Mobile
//             </Route>
//             <Route path="/Tablets" element={<Tablets />}>
//               Tablets
//             </Route>
//           </Routes>
//         </AuthGuard>
//       </Router>
//     </div>
//     // </AuthProvider>
//   );
// }

// export default App;
