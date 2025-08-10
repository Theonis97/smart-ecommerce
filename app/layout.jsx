import "./globals.css";
import Navbar from "./components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
