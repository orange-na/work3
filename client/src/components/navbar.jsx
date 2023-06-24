import { headers } from "next/dist/client/components/headers";
import Link from "next/link";


export function Navbar() {
    return (
        <header>
            <div className="flex justify-between w-10/12 mx-auto py-5 items-center">
                <div className="text-3xl">Logo</div>
                <nav>
                    <ul className="flex gap-5 items-center justify-center">
                        <li><Link className="font-light" href='/?cat=art'>ART</Link></li>
                        <li><Link className="font-light" href='/?cat=art'>ART</Link></li>
                        <li><Link className="font-light" href='/?cat=art'>ART</Link></li>
                        <li><Link className="font-light" href='/?cat=art'>ART</Link></li>
                        <li><Link className="font-light" href='/?cat=art'>ART</Link></li>
                        <li><Link className="font-light" href='/?cat=art'>ART</Link></li>
                        <span className="font-bold">Yuto</span>
                        <span className="font-bold">Logout</span>
                        <span className="font-bold bg-green-300 w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-200"><Link className="" href='/write'>Write</Link></span>
                    </ul>
                </nav>
            </div>
        </header>
    )
  }
  