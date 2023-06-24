import Link from "next/link"

export default function Register() {
    return (
      <>
      <div className="flex justify-center flex-col items-center h-screen bg-green-300">
        <h1 className="text-2xl font-extrabold mb-4 text-green-800">Register</h1>
        <form className="flex flex-col gap-5 bg-white p-9">
            <input className="p-3 border-b-2" type="text" placeholder="Username" />
            <input className="p-3 border-b-2" type="email" placeholder="E-mail" />
            <input className="p-3 border-b-2" type="password" placeholder="Password" />
            <button className="p-3 bg-green-800 text-white cursor-pointer">Register</button>
            <p className="text-center text-red-500">This is an error!!</p>
            <span>Do you have an account ?? <Link href='/login' className="text-red-500">Login</Link></span>
        </form>
      </div>
      </>
    )
  }
  