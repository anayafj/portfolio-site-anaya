// import { Inter } from 'next/font/google'
// import './global.scss';
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}