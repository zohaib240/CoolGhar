import React, { useState, useEffect } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const heroImages = [
  "/assets/img 1 (2).jpg",
  "/assets/img 2.jpg"
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/923320211826"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      {/* Hero Image Section */}
      <div className="w-full h-[calc(250px-5rem)] sm:h-[calc(350px-5rem)] md:h-[calc(500px-5rem)] lg:h-[calc(600px-5rem)] mb-4 overflow-hidden rounded-lg">
        <img
          key={currentSlide}
          src={heroImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover object-top transition duration-1000"
        />
      </div>
      <div className="w-full bg-gradient-to-r from-red-600 to-red-400 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
    <p className="text-sm sm:text-base md:text-lg font-medium">
  Fast & reliable service all over Karachi — call now!
</p>
    <div className="flex items-center gap-2 bg-white text-red-600 px-3 py-1 rounded-full shadow-md">
      <FaPhone className="text-lg sm:text-xl" />
      <span className="font-semibold text-sm sm:text-base tracking-wide">0332-0211826</span>
    </div>
  </div>
</div>


      {/* Service Sections */}
{[
  {
    title: "Professional AC Services",
    img: "/assets/img 3.jpg",
    content: `At CoolGhar, we offer expert-level AC repair and maintenance services delivered right to your doorstep. Our team of professionals is trained to handle all types of AC issues, ensuring optimal performance and energy efficiency.

✅ AC not cooling properly
✅ Gas refill and leakage detection
✅ Complete AC maintenance & servicing
✅ AC installation & uninstallation
✅ Water leakage from indoor unit
✅ Thermostat and sensor repair
✅ Filter cleaning and replacement`,
    btn: "Book AC Service"
  },
  {
    title: "Fridge Services by CoolGhar",
    img: "/assets/img 4.jpg",
    content: `CoolGhar provides comprehensive fridge repair and maintenance services for all major brands and models. Whether it's a cooling issue or a faulty component, our technicians will resolve it efficiently.

✅ Gas filling & leakage
✅ Cooling issues & temperature imbalance
✅ Compressor & thermostat repair
✅ Door seal replacement
✅ Noisy or vibrating fridge
✅ Fridge not turning on`,
    btn: "Book a Fridge Service"
  },
  {
    title: "Expert Chiller Services",
    img: "/assets/img 5.jpg",
    content: `CoolGhar provides reliable chiller services for residential and commercial clients. Our technicians are equipped to troubleshoot and fix all chiller-related problems.

✅ Compressor malfunction
✅ Chiller making noise
✅ Leaking pipes or blocked condensers
✅ Inconsistent cooling
✅ Circuit issues or short circuit
✅ Chiller making unusual noises
✅ Preventive maintenance`,
    btn: "Book Chiller Service"
  },
  {
    title: "Reliable Dispenser Services",
    img: "/assets/dispenser.webp",
    content: `CoolGhar provides efficient and affordable dispenser repair services. From water not heating/cooling to leakage problems, we handle it all.

✅ No cooling or heating
✅ Leaking water or low flow
✅ Wiring and short circuit issues
✅ Dispenser not turning on
✅ Tap or switch malfunction
✅ Regular service and cleaning
✅ Tank cleaning and sanitation`,
    btn: "Book Dispenser Service"
  }
].map((service, idx) => (
  <motion.section
    key={idx}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`px-6 py-10 flex flex-col ${
      idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
    } items-center gap-10`}
  >
    <div className="w-full md:w-1/2">
      <motion.img
        whileHover={{ scale: 1.03 }}
        src={service.img}
        alt={service.title}
        className="w-full rounded-lg shadow-md transition-all duration-300"
      />
    </div>
    <div className="w-full md:w-1/2">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">{service.title}</h1>
      <p className="text-gray-600 text-lg whitespace-pre-line mb-6">{service.content}</p>

      <a
        href="tel:03320211826"
        className="inline-block bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition"
      >
        {service.btn}
      </a>
    </div>
  </motion.section>
))}


      {/* Blog Section */}
      <motion.section
        className="px-6 py-8 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Blogs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "How to maintain your AC",
              desc: "Learn simple techniques to increase your AC life and performance..."
            },
            {
              title: "Fridge not cooling?",
              desc: "Common problems and what you can do before calling a technician..."
            }
          ].map((blog, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded shadow transition-all"
            >
              <h3 className="font-semibold text-lg text-blue-700">{blog.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{blog.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
