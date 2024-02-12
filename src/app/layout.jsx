'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (

    
    <html lang="en">
      <body className={inter.className} >
        <header className="bg-[#7a1111] py-10 " >
          <nav className="container " >
            <ul className="flex gap-6 text-sm font-medium uppercase  " >
              <li><Link className={` link ${pathname === '/' ? 'bg-green-500': ''}`} href="/">Home</Link></li>
              <li><Link className={` link ${pathname === '/about' ? 'bg-green-500': ''}`} href="/about">About</Link></li>
              <li><Link className={` link ${pathname === '/contact' ? 'bg-green-500': ''}`} href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
