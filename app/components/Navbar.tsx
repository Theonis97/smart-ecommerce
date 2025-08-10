import { FaHome, FaBoxOpen, FaUser, FaShoppingCart} from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center fixed top-0 left-0 z-10 w-full justify-between bg-white p-4 shadow-md">
      <h1 className="text-red-600">Madame-solde</h1>
      <div>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="flex gap-1 items-center">
              <FaHome />
              Acceuil
            </Link>
          </li>
          <li>
            <Link href="/produit" className="flex gap-1 items-center">
              <FaBoxOpen />
              Produits
            </Link>
          </li>
          <li className="ml-8">
            <a href="/panier" className="hover:text-gray-400">
              <FaShoppingCart size={20} />
            </a>
          </li>
          <li>
            <a href="/profil" className="hover:text-gray-400">
              <FaUser size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
