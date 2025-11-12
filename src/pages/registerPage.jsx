import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom"



export default function RegisterPage() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleRegister() {
        try {
            const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/users/', { 
                firstName,
                lastName, 
                email, 
                password 
            });

            toast.success(response?.data?.message || 'Registration successful!');
            navigate('/login');

        } catch (err) {
            
            toast.error(err?.response?.data?.message || 'Registration failed!');
            console.log(err);

        }
    }

    return (
        <div className="w-full h-screen flex flex-col md:flex-row font-raleway">

            {/* Left Side */}
            <div className="w-full md:w-[600px] h-full px-[20px] py-[30px] flex flex-col">
                <Link to="/" className="text-[24px] text-black">CBC</Link>

                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-[24px] font-bold mt-[30px]">Create Your Account</h1>

                    {/* Optional Message */}
                    <div className="p-[10px] mt-[20px] bg-green-100 rounded-md">
                        <p className="text-green-600 font-semibold">Fill in your details to register</p>
                        <p className="text-[12px] text-gray-600 mt-[10px]">
                            Join Crystal Beauty Care and discover natural skincare solutions.
                        </p>
                    </div>

                    {/* Register Form */}
                    <div className="mt-[30px] flex flex-col gap-[10px]">
                        <input 
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            placeholder="First Name"
                            className="w-full p-[12px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <input 
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-[12px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-[12px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className="w-full p-[12px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        />

                        <button
                            onClick={handleRegister}
                            className="w-full p-[12px] mt-[10px] bg-black text-white rounded-md hover:text-primary duration-300 font-semibold"
                        >
                            Register
                        </button>
                    </div>

                    {/* Divider & Google Register */}
                    <div className="mt-[40px]">
                        <div className="flex items-center justify-center gap-[10px]">
                            <div className="flex-1 h-[1px] bg-gray-300" />
                            <span className="text-gray-400 text-sm">or</span>
                            <div className="flex-1 h-[1px] bg-gray-300" />
                        </div>

                        <div className="flex justify-center mt-[20px]">
                            <button className="px-[30px] py-[10px] flex items-center gap-[10px] border border-green-400 rounded-md hover:bg-green-100 duration-300">
                                <FcGoogle className="text-[24px]" />
                                <span className="font-medium text-sm text-black">Register with Google</span>
                            </button>
                        </div>

                        <div className="text-center mt-[40px] text-sm">
                            <p>
                                Already have an account?{' '}
                                <Link to="/login" className="text-green-500 hover:underline font-medium">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Image */}
            <div className="hidden md:block w-full h-full">
                <img
                    src="about-img.png"
                    alt="Register Visual"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}