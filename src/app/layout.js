import "./globals.css"

export const metadata = {
  title: "Leah's Hundeinternat",
  description: "Find din næste hund hos os!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  )
}
