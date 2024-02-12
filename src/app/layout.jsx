'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  return (

    
    <html lang="en">
      <body className={inter.className} >
        <header className="bg-[#7a1111] py-10 " >
          <nav className="container " >
            <ul className="flex gap-6 text-sm font-medium uppercase  " >
              <li><Link scroll={false} className={` link ${pathname === '/' ? 'bg-green-500': ''}`} href="/">Home</Link></li>
              <li><Link className={` link ${pathname === '/about' ? 'bg-green-500': ''}`} href="/about#setting">About</Link></li>
              <li><Link className={` link ${pathname === '/contact' ? 'bg-green-500': ''}`} href="/contact">Contact</Link></li>
              <li> <button type="button" onClick={()=> router.push('/about') } >useRouter</button> </li>
              
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
