const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 px-4 sm:px-6 lg:px-8 text-center bg-[#1e1e1f]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
        Connect with Us
      </h2>
      <p className="text-lg mb-6 font-merriweather">
        We’d love to hear from you! Whether you have a question, feedback,
        or just want to say hi, feel free to reach out.
      </p>
      <a
        href="https://forms.gle/ftUMrUfHQWcURee88"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-bold bg-[#374053] text-white py-2 px-4 rounded-lg hover:bg-white hover:scale-105 hover:text-black transition transform"
      >
        Get in Touch
      </a>
    </section>
  );
};

export default Contact;
