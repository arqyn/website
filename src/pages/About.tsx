import Navbar from "../components/Navbar";

const About = () => {
  

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen mt-5">
        {/* Hero Section with Background Image */}
        <section
          className="relative py-40 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
          style={{
            backgroundImage: "url('about-arqyn.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay to make text more readable */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-7xl mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-poppins tracking-tight ">
              <span className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto bg-white/30 backdrop-blur-sm p-1 rounded-sm md:mb-50">
                About
              </span>
            </h1>
            <p className="mt-6 text-md md:text-xl max-w-3xl mx-auto p-4 rounded-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Expedita, sequi numquam laborum voluptatem deleniti iure vel natus
              eum earum aut corporis architecto harum quo quibusdam? Assumenda
              repudiandae adipisci perferendis? Voluptatem?
            </p>
          </div>
        </section>

       
      </div>
    </>
  );
};

export default About;
