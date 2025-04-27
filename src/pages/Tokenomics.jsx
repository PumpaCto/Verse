function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Miraverse Tokenomics</h1>
      <div className="text-lg md:text-xl max-w-3xl text-center leading-8 space-y-4">
        <p><strong>Supply:</strong> 1,000,000,000 MIRV</p>
        <p><strong>Liquidity Locked:</strong> 100%</p>
        <p><strong>Community Allocation:</strong> 85%</p>
        <p><strong>Development Fund:</strong> 10%</p>
        <p><strong>Marketing:</strong> 5%</p>
      </div>
    </div>
  );
}

export default TokenomicsPage;
