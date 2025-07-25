import { Provider } from "react-redux";
import Home from "./pages/home";
import ContactUs from "./pages/contactUs";


import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router";

// const PrivateRoute = () => {
//   // const { token } = useSelector((state) => state.auth);
//   const token = "";

//   return token ? <Outlet /> : <Navigate to="/comingsoon" />;
// };



// const { hostname } = window.location;
// var basename = "/"
// if (hostname.includes("react.customdev.solutions")) {
//   basename = "/cruise-tails"
// }

function AppRoutes() {
  return (
    <>
      <Provider store={store}>
        {/* <BrowserRouter basename={basename}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactUs" element={<ContactUs />} />

            {/* <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard"  element={<Home />} />
            </Route> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default AppRoutes;
