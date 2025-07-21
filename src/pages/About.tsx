import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

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

        {/* Our Story Section */}
        <section className="text-white py-16 px-4  lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-poppins md:text-center">
            Our Story
          </h1>

          <div>
            <p className="text-lg mb-6 font-merriweather">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              ipsa. Voluptate nisi iusto vero laboriosam cumque quaerat repellat
              rerum mollitia quo velit placeat fuga voluptas, consectetur eius
              dolorum minima sunt sequi nesciunt at quod! Possimus, vel fuga
              nesciunt laborum eius ipsum laudantium. Pariatur animi, ad eaque
              harum nemo quidem in.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Porro ipsa facilis vero minus quo alias,
              molestiae quas corporis, adipisci deserunt harum libero quae?
              Illum odio deserunt dolor. Voluptatem rerum necessitatibus
              sapiente nisi beatae libero unde aut soluta itaque veritatis id
              qui magnam ut, quod saepe labore a quam tempore odit.
            </p>
            <p className="text-lg mb-6 font-merriweather">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              ipsa facilis vero minus quo alias, molestiae quas corporis,
              adipisci deserunt harum libero quae? Illum odio deserunt dolor.
              Voluptatem rerum necessitatibus sapiente nisi beatae libero unde
              aut soluta itaque veritatis id qui magnam ut, quod saepe labore a
              quam tempore odit.Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Est, ipsa. Voluptate nisi iusto vero laboriosam
              cumque quaerat repellat rerum mollitia quo velit placeat fuga
              voluptas, consectetur eius dolorum minima sunt sequi nesciunt at
              quod! Possimus, vel fuga nesciunt laborum eius ipsum laudantium.
              Pariatur animi, ad eaque harum nemo quidem in.
            </p>
          </div>
        </section>

        {/* Stats */}

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                Our Mission
              </h2>
              <p className="text-lg mb-6 font-merriweather">
                At Arqyn, we believe technology should serve humanity, not the
                other way around. We're dedicated to creating tools that address
                real social challenges, from civic engagement to environmental
                sustainability.
              </p>
              <p className="text-lg mb-6 font-merriweather">
                Our team of technologists, designers, and community organizers
                work together to build solutions that are both impactful and
                accessible.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-xl">
              <div className="bg-black p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 font-poppins">
                  Core Values
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span className="font-merriweather">
                      Social impact first
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span className="font-merriweather">
                      Open and transparent
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span className="font-merriweather">
                      Community-driven design
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span className="font-merriweather">
                      Sustainable solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span className="font-merriweather">
                      Remote-first collaboration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default About;
