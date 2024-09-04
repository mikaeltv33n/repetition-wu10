import Footer from "@/components/footer";
import "./globals.css"
import Header from "@/components/header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Leah's Hundeinternat",
  description: "Find din næste hund hos os!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
