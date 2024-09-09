import Footer from "@/components/footer";
import "./globals.css"
import Header from "@/components/header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Foreningen for Dyrevelfærd",
  description: "vi specialisere os i dyrevelfærd",
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
