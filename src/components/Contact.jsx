function Contact() {
  return (
    <section className="bg-black text-white py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-400">Contact Us</h2>
        <p className="text-gray-400 mb-10">Join our community or reach out for collaborations!</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg transition-all duration-300"
          >
            Join Telegram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg transition-all duration-300"
          >
            Follow Twitter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
