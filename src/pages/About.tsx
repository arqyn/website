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

        
      </div>
    </>
  );
};

export default About;
