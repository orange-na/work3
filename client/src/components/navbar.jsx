import { AuthContext } from "@/context/authContext";
import { headers } from "next/dist/client/components/headers";
import Link from "next/link";
import { useContext } from "react";


export function Navbar() {

  const  { currentUser, logout } = useContext(AuthContext);

    return (
        <header>
            <div className="flex justify-between w-10/12 mx-auto py-5 items-center">
                 <Link href='/'><div className="text-3xl">Logo</div></Link>
                <nav>
                    <ul className="flex gap-5 items-center justify-center">
                        <li><Link className="font-light" href='/?cat=art'>ART</Link></li>
                        <li><Link className="font-light" href='/?cat=sience'>SIENCE</Link></li>
                        <li><Link className="font-light" href='/?cat=technology'>TECHNOLOGY</Link></li>
                        <li><Link className="font-light" href='/?cat=cinema'>CINEMA</Link></li>
                        <li><Link className="font-light" href='/?cat=design'>DESIGN</Link></li>
                        <li><Link className="font-light" href='/?cat=food'>FOOD</Link></li>
                        <span className="font-bold">{ currentUser?.username}</span>
                        { currentUser ? <span className="font-bold" onClick={ logout }>Logout</span> : <Link href="/login">Login</Link>}
                        <span className="font-bold bg-green-300 w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-200"><Link className="" href='/write'>Write</Link></span>
                    </ul>
                </nav>
            </div>
        </header>
    )
  }
  