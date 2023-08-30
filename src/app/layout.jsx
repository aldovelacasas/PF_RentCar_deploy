import Navbar from "../components/NavBar"
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
           <Navbar />
        <div className='h-[calc(100vh-5rem)]'>{children}</div>
        </body>
    </html>
  )
}
