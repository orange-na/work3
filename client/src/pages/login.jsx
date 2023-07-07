import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { AuthContext } from "@/context/authContext";

export default function Login() {
  const router = useRouter();

  const [input, setInput] = useState({
    username:"",
    password:"",
  })

  const [err, setErr] = useState(null);

  const  { currentUser, login } = useContext(AuthContext);

  console.log(currentUser);

  const handleChange = (e) => {
    setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  console.log(input);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      // await axios.post('http://localhost:8800/api/auth/login', input, { withCredentials: true });
      router.push('/');
    } catch (err) {
      setErr(err.response.data)
    }
  }

  
    return (
      <>
      <div className="flex justify-center flex-col items-center h-screen bg-green-300">
        <h1 className="text-2xl font-extrabold mb-4 text-green-800">Login</h1>
        <form className="flex flex-col gap-5 bg-white p-9">
            <input className="p-3 border-b-2" type="text" placeholder="Username" name="username" onChange={ handleChange }/>
            <input className="p-3 border-b-2" type="password" placeholder="Password" name="password" onChange={ handleChange }/>
            <button className="p-3 bg-green-800 text-white cursor-pointer" onClick={ handleLogin }>Login</button>
            {err && <p className="text-center text-red-500">{err}</p>}
            <span>Don't you have an account ?? <Link href='/register' className="text-red-500">Register</Link></span>
        </form>
      </div>
      </>
    )
  }
  