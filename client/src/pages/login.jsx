import Link from "next/link"


export default function Login() {
    return (
      <>
      <div className="flex justify-center flex-col items-center h-screen bg-green-300">
        <h1 className="text-2xl font-extrabold mb-4 text-green-800">Login</h1>
        <form className="flex flex-col gap-5 bg-white p-9">
            <input className="p-3 border-b-2" type="text" placeholder="Username" />
            <input className="p-3 border-b-2" type="password" placeholder="Password" />
            <button className="p-3 bg-green-800 text-white cursor-pointer">Login</button>
            <p className="text-center text-red-500">This is an error!!</p>
            <span>Don't you have an account ?? <Link href='/register' className="text-red-500">Register</Link></span>
        </form>
      </div>
      </>
    )
  }
  