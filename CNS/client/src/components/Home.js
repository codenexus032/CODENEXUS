// src/components/Home.js
import React from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { FaBook, FaGraduationCap, FaCertificate } from "react-icons/fa";

// Import slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ animateKey }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // ✅ hide arrows
  };

  return (
    <section id="home" className="bg-white text-black pt-52 pb-40 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side - Text */}
      <AnimatePresence>
        <motion.div
          key={animateKey}
          className="space-y-6 text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* WELCOME LINE */}
          <p className="uppercase tracking-widest text-sm text-gray-600">
            Welcome to Code Nexus
          </p>

          {/* MAIN QUOTE */}
          {/* MAIN QUOTE */}
<h2 className="text-4xl md:text-5xl font-extrabold leading-tight whitespace-nowrap">
  Learn. Grow.{" "}
  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
    Get Certified
  </span>
</h2>


          {/* FEATURE TAGS */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-800 shadow"
            >
              <FaBook className="text-indigo-600 text-sm animate-pulse" />
              Free Courses
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-800 shadow"
            >
              <FaGraduationCap className="text-indigo-600 text-sm animate-bounce" />
              Quality Education
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-800 shadow"
            >
              <FaCertificate className="text-indigo-600 text-sm animate-spin" />
              Certificates & Badges
            </motion.span>
          </div>

          {/* SHORT DESCRIPTION */}
          <p className="text-lg text-gray-700 leading-relaxed mt-6 max-w-2xl mx-auto">
            Code Nexus Technology is a forward-thinking software and IT services
            company dedicated to building scalable, secure, and innovative
            digital solutions. We help organizations modernize their systems,
            adopt AI-powered tools, and move seamlessly to the cloud.
          </p>

          {/* EXPLORE BUTTON */}
          <button
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-lg shadow-md hover:opacity-90 transition text-lg"
            onClick={() => {
              const element = document.getElementById("signup-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explore
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Right Side - Carousel */}
      <motion.div
        key={`carousel-${animateKey}`}
        className="w-full max-w-md mx-auto"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <Slider {...settings}>
          <div>
            <img
              src="https://images.ctfassets.net/5i1m3im8l2b5/uP8R4sj9jDRbqawg3vfhb/fb307cebbd6f38a50a10813633c7cdba/You-can-use-remote-access-to-work-from-home.jpg?w=450&h=236&fl=progressive&q=75&fm=jpg&fit=fill"
              alt="Company Image 1"
              className="rounded-xl shadow-lg w-full h-72 object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1000&q=80"
              alt="Company Image 2"
              className="rounded-xl shadow-lg w-full h-72 object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
              alt="Company Image 3"
              className="rounded-xl shadow-lg w-full h-72 object-cover"
            />
          </div>
        </Slider>
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default Home;
