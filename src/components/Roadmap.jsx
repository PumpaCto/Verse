function Roadmap() {
  return (
    <section className="bg-black text-white py-20 px-6" id="roadmap">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-yellow-400">Roadmap</h2>
        <div className="space-y-12">
          <div className="border-l-4 border-yellow-400 pl-6 relative">
            <div className="absolute left-[-10px] top-0 w-5 h-5 bg-yellow-400 rounded-full animate-ping"></div>
            <h3 className="text-2xl font-semibold mb-2">Phase 1: Launch</h3>
            <p className="text-gray-300">Website release, community building, first CEX listing targets.</p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-6 relative">
            <div className="absolute left-[-10px] top-0 w-5 h-5 bg-yellow-400 rounded-full animate-ping"></div>
            <h3 className="text-2xl font-semibold mb-2">Phase 2: Expansion</h3>
            <p className="text-gray-300">Massive marketing, partnerships, NFT integrations, game development start.</p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-6 relative">
            <div className="absolute left-[-10px] top-0 w-5 h-5 bg-yellow-400 rounded-full animate-ping"></div>
            <h3 className="text-2xl font-semibold mb-2">Phase 3: Domination</h3>
            <p className="text-gray-300">Global events, advanced blockchain integration, Miraverse Universe Expansion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
