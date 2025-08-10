import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body className="flex flex-col min-h-screen">
        
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN → prend tout l'espace restant */}
        <main className="flex-1 bg-gray-100 p-6">
          {children}
        </main>

        {/* FOOTER */}
        <Footer/>
      </body>
    </html>
  );
}

