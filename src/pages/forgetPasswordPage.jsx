import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { SiGmail } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

export default function ForgetPasswordPage() {
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function sentOtp() {
    axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/send-otp", {
        email: email,
    }).then((res) => {
        setOtpSent(true);
        toast.success("OTP sent to your email");
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
        toast.error("Failed to send OTP");
    })
  }

  function verifyOtp() {
    const otpInNumberFormat = parseInt(otp);

    axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/reset-password", {
        email: email,
        otp: otpInNumberFormat,
        newPassword: newPassword
    }).then((res) => {
        toast.success("Password reset successful");
        navigate("/login");
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
        toast.error("Failed to reset password");
    })
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      {otpSent ? (
        <div className="w-[400px] p-[40px] flex flex-col gap-[20px] justify-center items-center rounded-2xl bg-primary/10">
          <Link to="/" className="text-[24px] font-raleway mb-[30px]">
            CBC
          </Link>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[24px] font-bold">Reset Your Password</h2>
            <p className="text-[14px] text-gray-500 mb-[20px]">
              Enter the OTP sent to your email and choose a new password.
            </p>
          </div>

          <div className="w-full flex flex-col gap-[10px] items-end">
            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-[10px] border-2 rounded-md bg-white border-gray-200"
            />
            <button className="w-fit p-[10px] bg-primary text-white rounded-md hover:bg-primary/80 duration-300" onClick={() => sentOtp()}>Resent Otp</button>
          </div>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-[10px] border-2 rounded-md bg-white border-gray-200"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-[10px] border-2 rounded-md bg-white border-gray-200"
          />

          <button 
          onClick={() => verifyOtp()}
          className="w-full p-[10px] bg-primary text-white rounded-md hover:bg-primary/80 duration-300">
            Submit
          </button>

          <Link to="/login" className="text-gray-600 underline mt-[10px]">
            Go Back
          </Link>
        </div>
      ) : (
        <div className="w-[400px] p-[40px] flex flex-col gap-[20px] justify-center items-center rounded-2xl bg-primary/10">
          <Link to="/" className="text-[24px] font-raleway mb-[30px]">
            CBC
          </Link>
          <div className="p-[20px] bg-primary/20 rounded-md">
            <SiGmail className="text-[34px] text-primary" />
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[24px] font-bold">Enter Your Email Address</h2>
            <p className="text-[14px] text-gray-500 mb-[20px]">
              We will send an OTP to your email address
            </p>
          </div>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-[10px] border-2 rounded-md bg-white border-gray-200"
          />

          <button
            className="w-full p-[10px] bg-primary text-white rounded-md hover:bg-primary/80 duration-300"
            onClick={() => sentOtp()}
          >
            Send OTP
          </button>

          <Link to="/login" className="text-gray-600 underline mt-[10px]">
            Go Back
          </Link>
        </div>
      )}
    </div>
  );
}
