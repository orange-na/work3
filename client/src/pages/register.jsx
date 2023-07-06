import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"


export default function Register() {
  const router = useRouter();

  const [input, setInput] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  console.log(input);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/auth/register', input);
      router.push('/login');
    } catch (err) {
      setErr(err.response.data)
    }
  }

    return (
      <>
      <div className="flex justify-center flex-col items-center h-screen bg-green-300">
        <h1 className="text-2xl font-extrabold mb-4 text-green-800">Register</h1>
        <form className="flex flex-col gap-5 bg-white p-9">
            <input className="p-3 border-b-2" type="text" placeholder="Username" name="username" onChange={ handleChange } />
            <input className="p-3 border-b-2" type="email" placeholder="E-mail" name="email" onChange={ handleChange }/>
            <input className="p-3 border-b-2" type="password" placeholder="Password" name="password" onChange={ handleChange }/>
            <button className="p-3 bg-green-800 text-white cursor-pointer" onClick={ handleRegister }>Register</button>
            {err && <p className="text-center text-red-500">{err}</p>}
            <span>Do you have an account ?? <Link href='/login' className="text-red-500">Login</Link></span>
        </form>
      </div>
      </>
    )
  }
  