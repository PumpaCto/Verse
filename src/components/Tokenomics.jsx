function Tokenomics() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6" id="tokenomics">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-yellow-400">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border border-yellow-400 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Total Supply</h3>
            <p className="text-lg">1,000,000,000 MIRA</p>
          </div>
          <div className="border border-yellow-400 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Liquidity</h3>
            <p className="text-lg">Locked Forever</p>
          </div>
          <div className="border border-yellow-400 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Tax</h3>
            <p className="text-lg">0% Buy / 0% Sell</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
