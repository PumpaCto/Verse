function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 Miraverse Token. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-400">Twitter</a>
          <a href="#" className="hover:text-yellow-400">Telegram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
