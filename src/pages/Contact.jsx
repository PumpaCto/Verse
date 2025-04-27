function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Connect With Miraverse</h1>
      <div className="flex flex-col items-center space-y-6 text-lg">
        <p>Stay tuned and be part of the revolution.</p>
        <div className="flex space-x-8 mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="/logo.png" alt="Telegram" className="w-12 h-12" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="/logo.png" alt="Twitter" className="w-12 h-12" />
          </a>
        </div>
        <p className="mt-8 text-gray-400 text-sm">Official links coming soon...</p>
      </div>
    </div>
  );
}

export default ContactPage;
