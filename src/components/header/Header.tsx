import { Button, Col, Divider, Drawer, List, Row } from "antd";
import { CircleUser, Menu, ShoppingCart, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PaymentPage from "../../components/check-out";
import { UPLOADS_URL } from "../../constants/api";
import {
  removeFromCart,
  selectCartItems,
} from "../../redux/reducers/cartSlice";
import { toggleRegisterModal } from "../../redux/reducers/modalSlice";
import { logout, selectUser, setUser } from "../../redux/reducers/userSlice";
import {
  useForgetPasswordMutation,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useResetPasswordMutation,
  useVerifyOtpMutation,
} from "../../redux/services/authSlice";
import ChatWidget from "../chat-bot";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/aboutus" },
  { label: "Shop", path: "/shop" },
  { label: "Contact Us", path: "/contactUs" },
  { label: "My Orders", path: "/my-orders" },
];

const Header: React.FC = () => {
  const location = useLocation()
  const [activeItem, setActiveItem] = useState(location.pathname === "/" ? "Home" : navigationItems.find(item => location.pathname === item.path)?.label || "Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const isRegisterModalOpen = useSelector(
    (state: any) => state.modal.isRegisterModalOpen,
  );
  function closeModal() {
    dispatch(toggleRegisterModal());
  }

  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const myCart = useSelector(selectCartItems);

  const subTotal = myCart?.reduce(
    (total: number, item: any) => total + item.CollectionPrice,
    0,
  );
  // const tax = subTotal * 0.2;
  const handleNavClick = (label: string, path: string) => {
    setActiveItem(label);
    setMobileMenuOpen(false);
    navigate(path);
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showResetConfirmPassword, setShowResetConfirmPassword] =
    useState(false);
  const [signupData, setSignupDate] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: any) => {
    setSignupDate({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const [logoutUser, { isLoading: logoutLoading }] = useLogoutMutation();
  const [login, { isLoading }] = useLoginMutation();
  const [register] = useRegisterMutation();
  const [forgetPassword, { isLoading: forgetPasswordLoading }] =
    useForgetPasswordMutation();
  const [verifyOtp, { isLoading: verifyOtpLoading }] = useVerifyOtpMutation();
  const [resetPassword, { isLoading: resetPasswordLoading }] =
    useResetPasswordMutation();
  const handleCartClick = () => {
    const alreadyExists = localStorage.getItem("myBooleanFlag");
    if (!alreadyExists || alreadyExists === "false") {
      localStorage.setItem("myBooleanFlag", "true");
      window.dispatchEvent(new Event("localStorageUpdated"));

      console.log("Boolean value set in localStorage");
    } else {
      console.log("Already exists in localStorage");
    }
  };

  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    const checkStorage = () => {
      const storedVar = localStorage.getItem("myBooleanFlag");
      if (storedVar === "true") {
        setShowCart(true);
      } else {
        setShowCart(false);
      }
    };

    checkStorage(); // check once on mount

    window.addEventListener("localStorageUpdated", checkStorage);
    return () =>
      window.removeEventListener("localStorageUpdated", checkStorage);
  }, []);

  const onClose = () => {
    // setOpen(false)
    setShowCart(false);
    localStorage.setItem("myBooleanFlag", "false");
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  async function handleLogout() {
    try {
      const response: any = await logoutUser({});
      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response?.data?.message,
        });
        dispatch(logout());
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response?.data?.message || response?.error?.data?.message,
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong",
      });
    }
  }

  const handleLogin = async () => {
    try {
      const response: any = await login({ email: loginEmail, password });
      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response?.data?.message,
        });
        dispatch(
          setUser({
            ...response?.data?.user,
            token: response?.data?.accessToken,
          }),
        );
        setIsModalOpen(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.message || response?.error?.data?.message,
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || error?.data?.message || "Something went wrong",
      });
    }
  };

  async function handleRegister(token: any) {
    if (signupData.password !== signupData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password and Confirm Password should be same",
      });
      return;
    }

    const formdata = new FormData();

    formdata.append("fullName", signupData.fullName);
    formdata.append("email", signupData.email);
    formdata.append("password", signupData.password);
    formdata.append("confirmPassword", signupData.confirmPassword);
    formdata.append("role", "user");
    formdata.append("token", token);

    try {
      const response: any = await register(formdata);
      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response?.data?.message,
        });
        dispatch(toggleRegisterModal());
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.message || response?.error?.data?.message,
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || error?.data?.message || "Something went wrong",
      });
    }
  }

  async function handleForgotPassword() {
    try {
      const response: any = await forgetPassword({ email });
      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response?.data?.message,
        });
        setIsForgotModalOpen(false);
        setIsOtpModalOpen(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.message || response?.error?.data?.message,
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || error?.data?.message || "Something went wrong",
      });
    }
  }

  async function handleVerifyOtp() {
    try {
      const response: any = await verifyOtp({ email, otp: Number(otp) });
      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response?.data?.message,
          timer: 2000,
        });
        setIsOtpModalOpen(false);
        setIsResetModalOpen(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.message || response?.error?.data?.message,
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || error?.data?.message || "Something went wrong",
      });
    }
  }

  async function handleResetPassword() {
    if (newPassword !== confirmNewPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password and Confirm Password should be same",
      });
      return;
    }

    try {
      const response: any = await resetPassword({
        email,
        otp: Number(otp),
        password: newPassword,
      });
      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response?.data?.message,
        });
        setIsResetModalOpen(false);
        setIsModalOpen(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.message || response?.error?.data?.message,
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || error?.data?.message || "Something went wrong",
      });
    }
  }

  return (
    <>
      <ChatWidget />
      <header className="w-full z-40 bg-[#374159]">
        <Row justify="center">
          <Col lg={22} md={24} xs={24}>
            <div className="bg-[#374159] backdrop-blur-lg md:px-10 py-3 mx-auto flex  justify-end items-center gap-3">
              {/* <Logo /> */}
              <button
                className="text-white lg:hidden  rounded-full hover:bg-gray-700 transition-colors duration-200 h-10 w-10 flex items-center justify-center"
                style={{
                  borderRadius: "100px",
                  padding: "0",
                  border: "1px solid #fff",
                }}
                onClick={handleCartClick}
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button
                className="text-white lg:hidden  rounded-full hover:bg-gray-700 transition-colors duration-200 h-10 w-10 flex items-center justify-center"
                style={{
                  borderRadius: "100px",
                  padding: "0",
                  border: "1px solid #fff",
                }}
                onClick={() => navigate("/profile")}
              >
                <CircleUser className="h-5 w-5" />
              </button>

              <button
                style={{ color: "white" }}
                className="block lg:hidden text-white p-2 z-50 relative"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              <div className="hidden lg:flex items-center gap-6 w-full">
                {/* Home Icon */}
                <span
                  className="text-white hover:text-gray-300 transition cursor-pointer"
                  onClick={() => handleNavClick("home", "/")}
                >
                  <img
                    src="./images/logo.png"
                    className="w-16 h-14"
                    alt="logo"
                  />
                </span>

                {/* Center Message */}
                <div className="flex items-center justify-center text-center mx-auto">
                  {user && user._id ? (
                    <div className="text-white font-medium px-4 py-2 bg-gray-700 rounded-full text-lg">
                      Thank you for being a valued Pak Buy member.
                    </div>
                  ) : (
                    <div className="text-white font-medium px-4 py-2 bg-gray-700 rounded-full text-lg">
                      Become a Pak Buy member for{" "}
                      <span className="text-green-400">$119 annually.</span>{" "}
                      That’s less than $10 per month.
                    </div>
                  )}
                </div>
              </div>

              {user && user._id ? (
                <>
                  <div className="relative">
                    <button
                      onClick={handleCartClick}
                      className="text-white hidden lg:flex rounded-full hover:bg-gray-700 transition-colors duration-200 h-10 w-10 items-center justify-center"
                      style={{
                        borderRadius: "100px",
                        padding: "0",
                        border: "1px solid #fff",
                      }}
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>

                    {myCart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#C97873] text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {myCart.length}
                      </span>
                    )}
                  </div>
                  <button
                    // onClick={handleCartClick}
                    onClick={() => navigate("/profile")}
                    className="text-white hidden lg:flex rounded-full hover:bg-gray-700 transition-colors duration-200 h-10 w-10  items-center justify-center"
                    style={{
                      borderRadius: "100px",
                      padding: "0",
                      border: "1px solid #fff",
                    }}
                  >
                    <CircleUser className="h-5 w-5" />
                  </button>
                  <button
                    disabled={logoutLoading}
                    className=" hidden lg:flex justify-center items-center site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200 "
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure you want to logout?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, logout!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleLogout();
                        }
                      });
                    }}
                  >
                    <span className="">logout</span>
                  </button>
                </>
              ) : (
                <div className="hidden lg:flex items-center space-x-4 gap-2">
                  <button
                    className="site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200"
                    onClick={() => closeModal()}
                  >
                    <span className="">Member Sign up</span>
                  </button>
                  <button
                    className="site-btn bg-transparent hover:bg-gray-700 font-medium  rounded-full border border-gray-600 transition-colors duration-200"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span className="">Login</span>
                  </button>
                </div>
              )}
            </div>

            {/* Overlay */}
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${
                mobileMenuOpen
                  ? "opacity-50 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Sidebar Menu */}
            {createPortal(
              <>
                {/* Backdrop */}
                <div
                  className={`fixed inset-0 z-[998] bg-black/60 transition-opacity duration-300 lg:hidden ${
                    mobileMenuOpen
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                />

                {/* Mobile Sidebar Menu */}
                <div
                  className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] z-[999] transform transition-transform duration-300 ease-in-out lg:hidden ${
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                  style={{ background: "#0F1115" }}
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
                      <span className="text-lg font-semibold">
                        <span className="text-white">Pak</span>
                        <span className="text-[#d17f89]">Buy</span>
                      </span>
                      <button
                        className="text-white/70 hover:text-white transition-colors p-1"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Close menu"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-col px-3 py-4 gap-0.5 overflow-y-auto">
                      {navigationItems.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleNavClick(item.label, item.path)}
                          className={`text-left px-3 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                            activeItem === item.label
                              ? "bg-[#d17f89]/10 text-[#d17f89]"
                              : "text-white/80 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>

                    {/* Bottom Buttons */}
                    <div className="mt-auto px-4 py-5 border-t border-white/10 flex flex-col gap-2.5">
                      {user && user._id ? (
                        <button
                          className="w-full py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#d17f89] text-black transition-colors hover:bg-[#c26a75]"
                          onClick={() => {
                            Swal.fire({
                              title: "Are you sure you want to logout?",
                              text: "You won't be able to revert this!",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Yes, logout!",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                handleLogout();
                              }
                            });
                          }}
                        >
                          Logout
                        </button>
                      ) : (
                        <>
                          <button
                            className="w-full py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider border border-white/25 text-white transition-colors hover:border-[#d17f89] hover:text-[#d17f89]"
                            onClick={() => closeModal()}
                          >
                            Member Sign up
                          </button>
                          <button
                            className="w-full py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#d17f89] text-black transition-colors hover:bg-[#c26a75]"
                            onClick={() => setIsModalOpen(true)}
                          >
                            Login
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </>,
              document.body,
            )}
          </Col>
        </Row>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm transition-opacity duration-300 p-4">
          <div className="relative bg-white rounded-2xl p-8 w-full max-w-sm max-h-[95vh] shadow-xl text-left transform transition-all duration-300 ease-out text-black overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl z-10"
            >
              ✕
            </button>

            {/* Heading */}
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Welcome !
            </h3>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Login</h2>
            <p className="text-sm text-gray-500 mb-6">
              Enter Membership credentials.
            </p>

            {/* Form */}
            <div className="space-y-4">
              {/* Username */}
              <div>
                <label className="block text-sm !text-gray-900 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Enter your user name"
                  className="w-full px-4 py-2 border border-gray-300  !text-black !bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm !text-gray-900 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="w-full px-4 py-2 border border-gray-300  !text-black !bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <span
                    className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </span>
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-black" />
                  Remember Me
                </label>
                <button
                  className="hover:underline"
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsForgotModalOpen(true);
                  }}
                >
                  Forgot Password ?
                </button>
              </div>

              {/* Login Button */}
              <button
                disabled={isLoading}
                onClick={handleLogin}
                className="site-btn w-full bg-[#C97873] hover:bg-[#E08A83] text-black font-semibold py-2 rounded-full transition"
              >
                {isLoading ? "LOGGING IN" : "LOGIN"}
              </button>

              {/* Footer */}
              <p className="text-sm text-center text-gray-600 mt-4">
                Don’t have an Account?{" "}
                <span
                  className="font-semibold text-black cursor-pointer hover:underline"
                  onClick={() => {
                    setIsModalOpen(false);
                    closeModal();
                  }}
                >
                  Register Here
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm transition-opacity duration-300 overflow-y-auto p-4">
          <div className="relative bg-white rounded-2xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] shadow-xl text-left transform transition-all duration-300 ease-out text-black my-8 overflow-y-auto">
            <div className="flex justify-between items-start mb-3">
              {/* Close Button */}
              <button
                onClick={() => closeModal()}
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl z-10"
              >
                ✕
              </button>

              {/* Stripe Secure Badge */}
              <div className="flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 ">
                {/* Lock Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {/* Shield */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2l8 4v6c0 5-4 9-8 10-4-1-8-5-8-10V6l8-4z"
                  />
                  {/* Checkmark */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>

                <span className="text-sm font-semibold">
                  Secure Checkout powered by Stripe
                </span>
              </div>
            </div>

            <h3 className="text-sm font-medium text-gray-500 ">Welcome!</h3>
            <h2 className="text-2xl font-bold text-gray-900 ">
              Become a Pak Buy Member Now
            </h2>

            {/* Form */}
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm !text-gray-800 mb-1">
                    Full Name
                  </label>
                  <input
                    value={signupData.fullName}
                    name="fullName"
                    onChange={onChange}
                    type="text"
                    placeholder="Enter your user name"
                    className="w-full px-4 py-2 border border-gray-300  !text-black !bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm !text-gray-800 mb-1">
                    Email
                  </label>
                  <input
                    value={signupData.email}
                    name="email"
                    onChange={onChange}
                    type="email"
                    placeholder="Enter your user name"
                    className="w-full px-4 py-2 border border-gray-300  !text-black !bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <label className="block text-sm !text-gray-800 mb-1">
                    Password
                  </label>
                  <input
                    value={signupData.password}
                    name="password"
                    onChange={onChange}
                    type={showRegPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    className="w-full px-4 py-2 border border-gray-300  !text-black !bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <span
                    className="absolute right-3 top-9 text-gray-400 cursor-pointer"
                    onClick={() => setShowRegPassword(!showRegPassword)}
                  >
                    {showRegPassword ? "🙈" : "👁️"}
                  </span>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <label className="block text-sm !text-gray-800 mb-1">
                    Confirm Password
                  </label>
                  <input
                    value={signupData.confirmPassword}
                    name="confirmPassword"
                    onChange={onChange}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    className="w-full px-4 py-2 border border-gray-300  !text-black !bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <span
                    className="absolute right-3 top-9 text-gray-400 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </span>
                </div>
              </div>

              {/* Checkbox */}
              <div className="my-4 flex items-center gap-2 text-sm !text-gray-900">
                <input type="checkbox" className="accent-black" />
                <label>
                  I agree to the privacy policy and terms and conditions.
                </label>
              </div>

              <h4 className="text-white">Additional Information</h4>
              <h6>
                Please pay the subscription amount{" "}
                <span className="font-semibold text-[#C97873]">$119</span> to
                complete your signup journey
              </h6>

              {/* Stripe Implementaion */}
              <h4 className="text-black">Card Details ( Debit / Credit)</h4>
              <div className="payment119">
                <PaymentPage
                  handleSubmit={handleRegister}
                  showSubmitBtn={true}
                />
              </div>
            </form>

            {/* Register Button */}
            {/* <div className="mt-6">
                            <button
                                onClick={handleRegister}
                                disabled={registerLoading}
                                className="site-btn w-full bg-[#C97873] hover:bg-[#E08A83] text-black font-semibold py-2 rounded-full transition">
                                {registerLoading ? "REGISTERING..." : "REGISTER"}
                            </button>
                        </div> */}

            {/* Footer */}
            <p className="text-sm text-center !text-gray-900 mt-4">
              Already have an Account ?{" "}
              <span
                className="font-semibold text-black cursor-pointer hover:underline"
                onClick={() => {
                  closeModal();
                  setIsModalOpen(true);
                }}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      )}

      {isForgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm transition-opacity duration-300 overflow-y-auto p-4">
          <div className="relative bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl text-black my-8">
            <button
              onClick={() => setIsForgotModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl z-10"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Forgot Password
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Enter your email to receive an OTP
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              disabled={forgetPasswordLoading}
              className="site-btn w-full mt-4 bg-[#C97873] hover:bg-[#E08A83] text-black font-semibold py-2 rounded-full"
              onClick={handleForgotPassword}
              style={{ marginTop: "16px" }}
            >
              {forgetPasswordLoading ? "SENDING..." : "SEND OTP"}
            </button>
          </div>
        </div>
      )}

      {isOtpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm transition-opacity duration-300 overflow-y-auto p-4">
          <div className="relative bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl text-black my-8">
            <button
              onClick={() => setIsOtpModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl z-10"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Enter OTP</h2>
            <p className="text-sm text-gray-500 mb-4">
              We've sent a code to {email}
            </p>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              disabled={verifyOtpLoading}
              className="site-btn w-full mt-4 bg-[#C97873] hover:bg-[#E08A83] text-black font-semibold py-2 rounded-full"
              onClick={handleVerifyOtp}
              style={{ marginTop: "16px" }}
            >
              {verifyOtpLoading ? "VERIFYING..." : "VERIFY OTP"}
            </button>
          </div>
        </div>
      )}

      {isResetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm transition-opacity duration-300 overflow-y-auto p-4">
          <div className="relative bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl text-black my-8">
            <button
              onClick={() => setIsResetModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl z-10"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Reset Password
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Set a new password for your account
            </p>

            {/* New Password */}
            <div className="relative mb-4">
              <input
                type={showResetPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                onClick={() => setShowResetPassword(!showResetPassword)}
              >
                {showResetPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Confirm New Password */}
            <div className="relative mb-4">
              <input
                type={showResetConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                onClick={() =>
                  setShowResetConfirmPassword(!showResetConfirmPassword)
                }
              >
                {showResetConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button
              disabled={resetPasswordLoading}
              className="site-btn w-full bg-[#C97873] hover:bg-[#E08A83] text-black font-semibold py-2 rounded-full"
              onClick={handleResetPassword}
              style={{ marginTop: "16px" }}
            >
              {resetPasswordLoading ? "RESETING..." : "RESET PASSWORD"}
            </button>
          </div>
        </div>
      )}

      {/* cart */}
      {showCart && (
        <Drawer
          title="My Cart"
          placement="right"
          onClose={onClose}
          open={showCart}
          width={350}
          closeIcon={
            <span
              style={{
                padding: "15px",
                color: "#ffffff",
                fontSize: "13px",
                lineHeight: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "26px",
                height: "26px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.25)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#d17f89";
                e.currentTarget.style.color = "#d17f89";
                e.currentTarget.style.background = "rgba(209,127,137,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "transparent";
              }}
            >
              ✕
            </span>
          }
          styles={{
            header: {
              background:
                "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2a2a2a 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              padding: "16px 20px",
            },
            body: {
              background:
                "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2a2a2a 100%)",
              padding: "20px",
            },
            content: {
              background:
                "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2a2a2a 100%)",
            },
            mask: {
              background: "rgba(0,0,0,0.7)",
            },
          }}
          classNames={{
            header: "!text-[#d17f89]",
          }}
        >
          <div className="flex gap-10">
            <div className="w-full">
              <List
                itemLayout="horizontal"
                dataSource={myCart}
                renderItem={(item: any) => (
                  <List.Item
                    className="!border-white/10"
                    actions={[
                      <Button
                        size="small"
                        type="text"
                        onClick={() => handleRemove(item._id)}
                        className="!text-[#d17f89] hover:!text-[#e29aa2]"
                      >
                        ✕
                      </Button>,
                    ]}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <img
                          crossOrigin="anonymous"
                          src={UPLOADS_URL + item.image}
                          alt={item.name}
                          className="w-20 h-15 border-2 border-white/10 object-cover -ml-2 first:ml-0"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-white mt-1">
                          {item.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          ${item.CollectionPrice?.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </List.Item>
                )}
              />

              <Divider className="!border-white/10" />

              {myCart.length > 0 && (
                <div className="text-center space-y-1">
                  <p className="text-white">
                    Sub-total: <strong>${subTotal.toFixed(2)}</strong>
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      navigate("/checkout");
                    }}
                    className="mt-2 w-full site-btn bg-[#d17f89] !text-white border border-[#d17f89] font-semibold rounded-full py-3 hover:bg-[#c26a75] hover:border-[#c26a75] transition-colors"
                  >
                    CHECKOUT
                  </button>
                </div>
              )}
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
};

export default Header;
