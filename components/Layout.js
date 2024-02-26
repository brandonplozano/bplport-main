import Navbar from "./Navbar"
import Footer from "./Footer"
import { Open_Sans } from '@next/font/google'

const opensans = Open_Sans({
  weight: "400",
  subsets: ["latin"]
})


export default function Layout({children}) {
  return (
    <div className={`min-h-screen flex flex-col w-full overflow-x-hidden  h-full ${opensans.className}`}>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
