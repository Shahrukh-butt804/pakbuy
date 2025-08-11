import { Provider } from "react-redux";
import Home from "./pages/home";
import ContactUs from "./pages/contactUs";
import Checkout from "./pages/checkout";
import Shop from "./pages/shop";
import Aboutus from "./pages/aboutus";
import Orderlog from "./pages/orderlog";
import OrderDetails from "./pages/orderlog/orderDetails";
import Profile from "./pages/profile";
import EditProfile from "./pages/profile/editProfile";
import ChangePassword from "./pages/profile/changePassword";
import TermsConditions from "./pages/termsConditions";
import PrivacyPolicy from "./pages/privacyPolicy";


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
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route element={<PrivateRoute />}>
              <Route path="/my-orders" element={<Orderlog />} />
              <Route path="/track-order/:id" element={<OrderDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/profile/changePassword" element={<ChangePassword />} />
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
