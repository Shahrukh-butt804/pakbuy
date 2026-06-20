import { Provider } from "react-redux";
import Aboutus from "./pages/aboutus";
import Checkout from "./pages/checkout";
import ContactUs from "./pages/contactUs";
import Home from "./pages/home";
import Orderlog from "./pages/orderlog";
import OrderDetails from "./pages/orderlog/orderDetails";
import PrivacyPolicy from "./pages/privacyPolicy";
import Profile from "./pages/profile";
import ChangePassword from "./pages/profile/changePassword";
import EditProfile from "./pages/profile/editProfile";
import Shop from "./pages/shop";
import TermsConditions from "./pages/termsConditions";
import Tips from "./pages/tips";


import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import Swal from "sweetalert2";
import { logout, selectUser } from "./redux/reducers/userSlice";
import { store } from "./redux/store";


interface JwtPayload {
  exp: number;
  email?: string;
  isAdmin?: boolean;
  [key: string]: any;
}


const PrivateRoute = () => {
  const dispatch = useDispatch();

  const token = Cookies.get("accessToken") || useSelector(selectUser).user.token as any || {};

  if (!token) {
    dispatch(logout())
    return <Navigate to="/" replace />;
  }

  let decoded: JwtPayload;

  try {

    decoded = jwtDecode<JwtPayload>(token);

  } catch (_error) {
    dispatch(logout())

    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    return <Navigate to="/" replace />;

  }
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    Swal.fire({
      icon: 'error',
      title: 'Session Expired',
      text: '',
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        return <Navigate to="/login" replace />;
      }
    })

    dispatch(logout())
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    return <Navigate to="/" replace />;

  }

  return <Outlet />;
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
            <Route path="/termsconditions" element={<TermsConditions />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/tips" element={<Tips />} />

            <Route element={<PrivateRoute />}>
              <Route path="/my-orders" element={<Orderlog />} />
              <Route path="/track-order/:id" element={<OrderDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/profile/changePassword" element={<ChangePassword />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shop/:id" element={<Shop />} />
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
