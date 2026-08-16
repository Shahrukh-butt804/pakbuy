import { CircleUser, Eye, EyeOff, LogOut, Menu, ShoppingCart, Sparkles, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PaymentPage from "../../components/check-out";
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
import { useGetMyCartQuery } from "../../redux/services/cartSlice";
import { Cart } from "../cart";
import ChatWidget from "../chat-bot";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/aboutus" },
  { label: "Shop", path: "/shop" },
  { label: "Contact Us", path: "/contactUs" },
  { label: "My Orders", path: "/my-orders" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(
    location.pathname === "/"
      ? "Home"
      : navigationItems.find((item) => location.pathname === item.path)
        ?.label || "Home",
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const isRegisterModalOpen = useSelector((state: any) => state.modal.isRegisterModalOpen);

  function closeModal() {
    dispatch(toggleRegisterModal());
  }

  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const { data: myCart } = useGetMyCartQuery({ skip: !user }, { pollingInterval: 2000 });

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
  const [showResetConfirmPassword, setShowResetConfirmPassword] = useState(false);
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
  const [forgetPassword, { isLoading: forgetPasswordLoading }] = useForgetPasswordMutation();
  const [verifyOtp, { isLoading: verifyOtpLoading }] = useVerifyOtpMutation();
  const [resetPassword, { isLoading: resetPasswordLoading }] = useResetPasswordMutation();

  const handleCartClick = () => {
    const alreadyExists = localStorage.getItem("myBooleanFlag");
    if (!alreadyExists || alreadyExists === "false") {
      localStorage.setItem("myBooleanFlag", "true");
      window.dispatchEvent(new Event("localStorageUpdated"));
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

    checkStorage();
    window.addEventListener("localStorageUpdated", checkStorage);
    return () => window.removeEventListener("localStorageUpdated", checkStorage);
  }, []);

  const onClose = () => {
    setShowCart(false);
    localStorage.setItem("myBooleanFlag", "false");
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
          })
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
      {user && <ChatWidget />}

      {/* Sticky Modern Header Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#0d0d10]/95 backdrop-blur-xl border-b border-[#C97873]/25 shadow-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">

            {/* Logo Brand (Hidden on small mobile screens to prevent stacked double logos) */}
            <div
              className="hidden sm:flex items-center gap-2 cursor-pointer group"
              onClick={() => handleNavClick("home", "/")}
            >
              <img
                src="./images/logo.png"
                className="!w-16 !h-14 object-contain filter drop-shadow(0_0_6px_rgba(201,120,115,0.3)) group-hover:scale-105 transition-transform"
                alt="Pak Buy"
              />
            </div>

            {/* Desktop Center Pill Banner matching reference image */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
              {user && user._id ? (
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#18181b]/90 border border-[#C97873]/40 text-sm font-semibold tracking-wide text-white shadow-inner">
                  <Sparkles className="w-4 h-4 text-[#C97873]" />
                  <span>Thank you for being a valued Pak Buy member</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#18181b]/90 border border-[#C97873]/40 text-sm font-semibold tracking-wide text-white shadow-inner">
                  <span>Become a Pak Buy member for</span>
                  <span className="text-[#C97873] font-bold">$119 annually.</span>
                  <span className="text-gray-300 text-xs font-normal">(&lt; $10/mo)</span>
                </div>
              )}
            </div>

            {/* Right Side Actions Desktop */}
            <div className="hidden lg:flex items-center gap-2.5">
              {user && user._id ? (
                <>
                  {/* Cart Button with Count Badge */}
                  <div className="relative">
                    <button
                      onClick={handleCartClick}
                      className="icon-nav-btn"
                      title="View Cart"
                    >
                      <ShoppingCart className="w-4 h-4 text-[#C97873]" />
                    </button>
                    {myCart && myCart?.items?.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#C97873] text-black text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center shadow-md animate-pulse">
                        {myCart?.items?.length}
                      </span>
                    )}
                  </div>

                  {/* Profile Button */}
                  <button
                    onClick={() => navigate("/profile")}
                    className="icon-nav-btn"
                    title="Profile"
                  >
                    <CircleUser className="w-4 h-4 text-[#C97873]" />
                  </button>

                  {/* Logout Button */}
                  <button
                    disabled={logoutLoading}
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure you want to logout?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#C97873",
                        cancelButtonColor: "#333",
                        confirmButtonText: "Yes, logout!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          handleLogout();
                        }
                      });
                    }}
                    className="py-1.5 px-4 rounded-xl border border-[#C97873]/60 bg-[#C97873]/15 hover:bg-[#C97873] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 flex items-center gap-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>LOGOUT</span>
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => closeModal()}
                    className="py-1.5 px-4 rounded-xl bg-white/5 hover:bg-[#C97873]/20 border border-white/10 hover:border-[#C97873]/40 text-xs font-bold tracking-wider text-white transition-all duration-200"
                  >
                    Member Sign up
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="py-1.5 px-5 rounded-xl bg-[#C97873] hover:bg-[#b86762] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#C97873]/20 transition-all duration-200 active:scale-95"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Actions Controls */}
            <div className="flex items-center gap-2 lg:hidden ml-auto">
              {user && user._id && (
                <>
                  <div className="relative">
                    <button
                      onClick={handleCartClick}
                      className="icon-nav-btn"
                    >
                      <ShoppingCart className="w-4 h-4 text-[#C97873]" />
                    </button>
                    {myCart && myCart?.items?.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#C97873] text-black text-[9px] font-bold rounded-full h-3.5 w-3.5 flex items-center justify-center">
                        {myCart?.items?.length}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => navigate("/profile")}
                    className="icon-nav-btn"
                  >
                    <CircleUser className="w-4 h-4 text-[#C97873]" />
                  </button>
                </>
              )}

              <button
                className="mobile-menu-btn z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#C97873]" /> : <Menu className="w-5 h-5 text-[#C97873]" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Portal */}
      {createPortal(
        <>
          <div
            className={`fixed inset-0 z-[998] bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[999] bg-gradient-to-b from-[#18181b] via-[#141417] to-[#0f0f11] border-l border-[#C97873]/30 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl flex flex-col justify-between ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="text-lg font-extrabold uppercase tracking-wider text-white">
                  Pak <span className="text-[#C97873]">Buy</span>
                </span>
                <button
                  className="drawer-close-btn w-8 h-8 rounded-full bg-white/10 hover:bg-[#C97873] text-white flex items-center justify-center transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-4 h-4 text-[#C97873] hover:text-white" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col px-4 py-6 gap-1.5">
                {navigationItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.label, item.path)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeItem === item.label
                      ? "bg-[#C97873]/20 border border-[#C97873]/50 text-white shadow-sm"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="p-6 border-t border-white/10 space-y-3 bg-[#0d0d0f]">
              {user && user._id ? (
                <button
                  className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C97873] hover:bg-[#b86762] text-white transition-colors shadow-lg shadow-[#C97873]/20 flex items-center justify-center gap-2"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    Swal.fire({
                      title: "Are you sure you want to logout?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#C97873",
                      cancelButtonColor: "#333",
                      confirmButtonText: "Yes, logout!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        handleLogout();
                      }
                    });
                  }}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              ) : (
                <>
                  <button
                    className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 text-white hover:border-[#C97873] hover:text-[#C97873] transition-colors"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      closeModal();
                    }}
                  >
                    Member Sign up
                  </button>
                  <button
                    className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C97873] hover:bg-[#b86762] text-white transition-colors shadow-lg shadow-[#C97873]/20"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </>,
        document.body
      )}

      {/* Styled Dark Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity duration-300">
          <div className="relative bg-gradient-to-b from-[#1c1c20] via-[#141417] to-[#0f0f11] border border-[#C97873]/30 rounded-3xl p-6 sm:p-8 w-full max-w-sm max-h-[90vh] shadow-2xl text-white overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="modal-close-btn absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#C97873] text-gray-300 hover:text-white flex items-center justify-center transition-all z-10"
            >
              ✕
            </button>

            <span className="text-xs font-bold text-[#C97873] uppercase tracking-widest block mb-1">
              Welcome Back
            </span>
            <h2 className="text-2xl font-black text-white mb-2">Member Login</h2>
            <p className="text-xs text-gray-400 mb-6">
              Enter your Pak Buy membership credentials below.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 bg-[#0a0a0c] text-white border border-[#C97873]/30 rounded-xl focus:outline-none focus:border-[#C97873] text-sm placeholder-gray-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 bg-[#0a0a0c] text-white border border-[#C97873]/30 rounded-xl focus:outline-none focus:border-[#C97873] text-sm placeholder-gray-600 transition-colors pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <button
                  className="hover:text-[#C97873] transition-colors"
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsForgotModalOpen(true);
                  }}
                >
                  Forgot Password?
                </button>
              </div>

              <button
                disabled={isLoading}
                onClick={handleLogin}
                className="w-full py-3 rounded-full bg-[#C97873] hover:bg-[#b86762] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#C97873]/25 transition-all active:scale-95 mt-2"
              >
                {isLoading ? "LOGGING IN..." : "LOGIN"}
              </button>

              <p className="text-xs text-center text-gray-400 !mt-4">
                Don’t have an account?{" "}
                <span
                  className="font-bold text-[#C97873] cursor-pointer hover:underline"
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

      {/* Styled Dark Register Modal */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity duration-300 overflow-y-auto">
          <div className="relative bg-gradient-to-b from-[#1c1c20] via-[#141417] to-[#0f0f11] border border-[#C97873]/30 rounded-3xl p-6 sm:p-8 w-full max-w-2xl max-h-[90vh] shadow-2xl text-white my-8 overflow-y-auto">

            <button
              onClick={() => closeModal()}
              className="modal-close-btn absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#C97873] text-gray-300 hover:text-white flex items-center justify-center transition-all z-10"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-bold text-[#C97873] uppercase tracking-widest block mb-1">
                  Exclusive Access
                </span>
                <h2 className="text-2xl font-black text-white">
                  Become a Pak Buy Member
                </h2>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    value={signupData.fullName}
                    name="fullName"
                    onChange={onChange}
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 bg-[#0a0a0c] text-white border border-[#C97873]/30 rounded-xl focus:outline-none focus:border-[#C97873] text-sm placeholder-gray-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    value={signupData.email}
                    name="email"
                    onChange={onChange}
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 bg-[#0a0a0c] text-white border border-[#C97873]/30 rounded-xl focus:outline-none focus:border-[#C97873] text-sm placeholder-gray-600 transition-colors"
                  />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Password
                  </label>
                  <input
                    value={signupData.password}
                    name="password"
                    onChange={onChange}
                    type={showRegPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 bg-[#0a0a0c] text-white border border-[#C97873]/30 rounded-xl focus:outline-none focus:border-[#C97873] text-sm placeholder-gray-600 transition-colors pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-8 text-gray-400 hover:text-white"
                    onClick={() => setShowRegPassword(!showRegPassword)}
                  >
                    {showRegPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Confirm Password
                  </label>
                  <input
                    value={signupData.confirmPassword}
                    name="confirmPassword"
                    onChange={onChange}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 bg-[#0a0a0c] text-white border border-[#C97873]/30 rounded-xl focus:outline-none focus:border-[#C97873] text-sm placeholder-gray-600 transition-colors pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-8 text-gray-400 hover:text-white"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#C97873]/10 border border-[#C97873]/30 my-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-gray-300">Annual Membership Subscription</span>
                  <span className="text-[#C97873] font-mono text-base">$119 / year</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  Unlocks member-only collections, wholesale product pricing, and zero markup.
                </p>
              </div>

              {/* Stripe Payment Integration */}
              <div className="payment119 custom-stripe-theme">
                <PaymentPage handleSubmit={handleRegister} showSubmitBtn={true} />
              </div>
            </form>

            <p className="text-xs text-center text-gray-400 mt-5">
              Already have an account?{" "}
              <span
                className="font-bold text-[#C97873] cursor-pointer hover:underline"
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

      {/* Styled Forgot Password Modal */}
      {isForgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity duration-300">
          <div className="relative bg-gradient-to-b from-[#1c1c20] via-[#141417] to-[#0f0f11] border border-[#C97873]/30 rounded-3xl p-6 sm:p-8 w-full max-w-sm shadow-2xl text-white">
            <button
              onClick={() => setIsForgotModalOpen(false)}
              className="modal-close-btn absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#C97873] text-gray-300 hover:text-white flex items-center justify-center transition-all z-10"
            >
              ✕
            </button>

            <h2 className="text-2xl font-black text-white mb-1">Forgot Password</h2>
            <p className="text-xs text-gray-400 mb-5">
              Enter your account email to receive a verification OTP.
            </p>

            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#0a0a0c] text-white border border-[#C97873]/30 rounded-xl focus:outline-none focus:border-[#C97873] text-sm placeholder-gray-600 transition-colors mb-4"
            />

            <button
              disabled={forgetPasswordLoading}
              className="w-full !mt-3 py-3 rounded-full bg-[#C97873] hover:bg-[#b86762] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#C97873]/25 transition-all active:scale-95"
              onClick={handleForgotPassword}
            >
              {forgetPasswordLoading ? "SENDING..." : "SEND OTP"}
            </button>
          </div>
        </div>
      )}

      {/* Styled OTP Verification Modal */}
      {isOtpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity duration-300">
          <div className="relative bg-gradient-to-b from-[#1c1c20] via-[#141417] to-[#0f0f11] border border-[#C97873]/30 rounded-3xl p-6 sm:p-8 w-full max-w-sm shadow-2xl text-white">
            <button
              onClick={() => setIsOtpModalOpen(false)}
              className="modal-close-btn absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#C97873] text-gray-300 hover:text-white flex items-center justify-center transition-all z-10"
            >
              ✕
            </button>

            <h2 className="text-2xl font-black text-white mb-1">Enter Verification Code</h2>
            <p className="text-xs text-gray-400 mb-5">
              We've sent a 6-digit OTP code to <span className="text-[#C97873] font-mono">{email}</span>
            </p>

            <input
              type="text"
              placeholder="Enter OTP Code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#0a0a0c] text-white border border-[#C97873]/30 rounded-xl focus:outline-none focus:border-[#C97873] text-sm placeholder-gray-600 transition-colors mb-4 text-center font-mono text-lg tracking-widest"
            />

            <button
              disabled={verifyOtpLoading}
              className="w-full py-3 rounded-full bg-[#C97873] hover:bg-[#b86762] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#C97873]/25 transition-all active:scale-95"
              onClick={handleVerifyOtp}
            >
              {verifyOtpLoading ? "VERIFYING..." : "VERIFY OTP"}
            </button>
          </div>
        </div>
      )}

      {/* Styled Reset Password Modal */}
      {isResetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity duration-300">
          <div className="relative bg-gradient-to-b from-[#1c1c20] via-[#141417] to-[#0f0f11] border border-[#C97873]/30 rounded-3xl p-6 sm:p-8 w-full max-w-sm shadow-2xl text-white">
            <button
              onClick={() => setIsResetModalOpen(false)}
              className="modal-close-btn absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#C97873] text-gray-300 hover:text-white flex items-center justify-center transition-all z-10"
            >
              ✕
            </button>

            <h2 className="text-2xl font-black text-white mb-1">Set New Password</h2>
            <p className="text-xs text-gray-400 mb-5">
              Enter and confirm your new password.
            </p>

            <div className="space-y-4 mb-5">
              <div className="relative">
                <input
                  type={showResetPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0a0a0c] text-white border border-[#C97873]/30 rounded-xl focus:outline-none focus:border-[#C97873] text-sm placeholder-gray-600 transition-colors pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  onClick={() => setShowResetPassword(!showResetPassword)}
                >
                  {showResetPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showResetConfirmPassword ? "text" : "password"}
                  placeholder="Confirm New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0a0a0c] text-white border border-[#C97873]/30 rounded-xl focus:outline-none focus:border-[#C97873] text-sm placeholder-gray-600 transition-colors pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  onClick={() => setShowResetConfirmPassword(!showResetConfirmPassword)}
                >
                  {showResetConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              disabled={resetPasswordLoading}
              className="w-full py-3 rounded-full bg-[#C97873] hover:bg-[#b86762] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#C97873]/25 transition-all active:scale-95"
              onClick={handleResetPassword}
            >
              {resetPasswordLoading ? "RESETTING..." : "RESET PASSWORD"}
            </button>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <Cart showCart={showCart} onClose={onClose} />
    </>
  );
};

export default Header;

