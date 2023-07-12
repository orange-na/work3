import { AuthContext } from "@/context/authContext";
import { headers } from "next/dist/client/components/headers";
import Link from "next/link";
import { useContext } from "react";


export function Navbar() {

  const  { currentUser, logout } = useContext(AuthContext);

    return (
        <header className="border-b-2 fixed w-full bg-white z-10">
            <div className="flex justify-between w-10/12 mx-auto py-5 items-center">
                 <Link href='/'><div className="text-4xl"><span className="text-blue-400">Post</span> Site</div></Link>
                <nav>
                    <ul className="flex gap-10 items-center justify-center">
                        <li><Link className="font-bold" href='/'>HOME</Link></li>
                        <li className="font-bold cursor-pointer group relative">  
                            <p>CATEGORY</p>
                            <div className="opacity-0 -z-50 group-hover:opacity-100 group-hover:z-10 group-hover:top-1 absolute left-1/2 -top-72 -ml-16 duration-300">
                                <ul className="">
                                    <li className="bg-white px-2 py-2 text-center  hover:bg-slate-100 border-2"><Link className="font-medium" href='/?cat=art'>ART</Link></li>
                                    <li className="bg-white px-2 py-2 text-center  hover:bg-slate-100 border-2"><Link className="font-medium" href='/?cat=sience'>SIENCE</Link></li>
                                    <li className="bg-white px-2 py-2 text-center  hover:bg-slate-100 border-2"><Link className="font-medium" href='/?cat=technology'>TECHNOLOGY</Link></li>
                                    <li className="bg-white px-2 py-2 text-center  hover:bg-slate-100 border-2"><Link className="font-medium" href='/?cat=cinema'>CINEMA</Link></li>
                                    <li className="bg-white px-2 py-2 text-center  hover:bg-slate-100 border-2"><Link className="font-medium" href='/?cat=design'>DESIGN</Link></li>
                                    <li className="bg-white px-2 py-2 text-center  hover:bg-slate-100 border-2"><Link className="font-medium" href='/?cat=food'>FOOD</Link></li>
                                </ul>
                            </div>
                        </li>
                        { currentUser?.username && <span className="font-bold bg-gray-100 px-4 py-2 rounded-md">{ currentUser?.username}</span>}
                        { currentUser ? <span className="font-bold cursor-pointer bg-blue-300 py-2 px-4 rounded-full hover:bg-blue-400 text-white" onClick={ logout }>Logout</span> : <Link href="/login" className="font-bold cursor-pointer bg-blue-300 py-2 px-4 rounded-full hover:bg-blue-400 text-white">Login</Link>}
                        <span className="text-gray-800 font-bold border-2 border-blue-400 bg-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-blue-300 hover:text-white duration-200"><Link className="p-2" href='/write'>Post</Link></span>
                    </ul>
                </nav>
            </div>
        </header>
    )
  }
  