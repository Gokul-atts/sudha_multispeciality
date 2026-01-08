import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/pages/header/Navbar";
import Footer from "@/pages/footer/Footer";



const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// const nunito = Nunito({
//   subsets: ['latin'],
//   weight: ['200','300','400','500','600','700','800','900','1000'],
//   variable: '--font-nunito',
// });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased` } 
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
