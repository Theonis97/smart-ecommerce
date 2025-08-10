 import Image from "next/image";
 export default function Hero() {
  return (
    <header className="hero-header">
      <Image src="/images/iphone.jpeg" alt="Hero" layout="fill" objectFit="cover" quality={100} />
      <div>
        <h1>Bienvenu sur Madame Solde</h1>
      </div>
    </header>
  );
}
