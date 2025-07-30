import { Provider } from "react-redux";
import Home from "./pages/home";
import ContactUs from "./pages/contactUs";
import Checkout from "./pages/checkout";
import Shop from "./pages/shop";


import { store } from "./redux/store";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/reducers/userSlice";
import Swal from "sweetalert2";




const PrivateRoute = () => {
  const user = useSelector(selectUser);

  const isAuthenticated = user && user._id;

  if (!isAuthenticated) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You need to login first!',
    })
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};


function AppRoutes() {
  return (
    <>
      <Provider store={store}>
        {/* <BrowserRouter basename={basename}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactUs" element={<ContactUs />} />

            <Route element={<PrivateRoute />}>
            <Route path="/checkout" element={<Checkout />} />
              <Route path="/shop" element={<Shop />} />
            </Route>

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
