import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom"



export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleLogin() {
        try {
            const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/users/login', {email, password})

            toast.success("Login Successful")
            localStorage.setItem('token', response.data.token)

            if (response.data.role == "admin") {
                navigate('/admin')
            } else {
                navigate('/')
            }

        } catch (err) {
            toast.error("Login Failes")
            console.log(err);
        }
    }


    return (
        <div className="w-full h-screen flex flex-col md:flex-row font-raleway">

            {/* Left side */}
            <div className="w-full md:w-[600px] h-full px-[20px] py-[30px] flex flex-col">
                <Link to='/' className="text-[24px] text-black">CBC</Link>

                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-[24px] font-bold mt-[30px]">Welcome Back! Please Login</h1>
                    
                    <div className="p-[10px] mt-[20px] bg-red-100 rounded-md">
                        <p className="text-red-500 font-semibold">Please enter your credentials correctly</p>
                        <p className="text-[12px] text-gray-600 mt-[10px]">
                            Make sure your email and password are valid. Contact support if you forgot your credentials.
                        </p>
                    </div>

                    {/* login form */}
                    <div className="mt-[30px] flex flex-col gap-[20px]">
                        <input
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        placeholder="Email address"
                        className="w-full p-[12px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        />

                        <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        placeholder="Password"
                        className="w-full p-[12px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        />

                        <Link
                        to='/forget'
                        className="text-[12px] text-gray-600 underline"
                        >
                            Forget Password ?
                        </Link>

                        <button
                        onClick={handleLogin}
                        className="w-full p-[12px] mt-[10px] bg-black text-white rounded-md hover:text-primary duration-300 font-semibold"
                        >
                            Login
                        </button>
                    </div>

                    <div className="mt-[40px]">
                        <div className="flex items-center justify-center gap-[10px]">
                            <div className="flex-1 h-[1px] bg-gray-300" />
                            <span className="text-gray-400 text-sm">or</span>
                            <div className="flex-1 h-[1px] bg-gray-300" />
                        </div>

                        <div className="flex justify-center mt-[20px]">
                            <button className="px-[30px] py-[10px] flex items-center gap-[10px] border border-green-400 rounded-md hover:bg-green-100 duration-300 cursor-pointer">
                                <FcGoogle className="text-[24px]" />
                                <span className="font-medium text-sm text-black">Login with Google</span>
                            </button>
                        </div>

                        <div className="text-center mt-[40px] text-sm">
                            <p>
                                Don’t have an account?{' '}
                                <Link to="/register" className="text-green-500 hover:underline font-medium">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side image */}
            <div className="hidden md:block w-full h-full">
                <img 
                src="about-img.png" 
                alt="login visual" 
                className="w-full h-full object-cover"
                />
            </div>

        </div>
    )
}