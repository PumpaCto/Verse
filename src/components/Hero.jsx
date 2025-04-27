import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
        Welcome to Miraverse Token
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl">
        The next generation of decentralized finance in the anime and metaverse universe!
      </p>
      <div className="flex space-x-6">
        <Link to="/tokenomics" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
          View Tokenomics
        </Link>
        <button className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition">
          Coming Soon
        </button>
      </div>
    </section>
  );
}

export default Hero;
