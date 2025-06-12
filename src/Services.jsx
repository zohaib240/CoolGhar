import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const servicesData = [
  {
    title: "Professional AC Services",
    image: "/assets/img 3.jpg",
    description: `
      At CoolGhar, we offer expert-level AC repair and maintenance services for all major brands and models.
      Our services include:
      ✅ AC not cooling properly
      ✅ Gas refill and leakage detection
      ✅ Complete AC maintenance & servicing
      ✅ Water leakage from indoor unit
      ✅ Noise, remote & sensor issues
      ✅ AC installation & uninstallation
    `,
    btnText: "Book AC Service",
  },
  {
    title: "Fridge Repair & Maintenance",
    image: "/assets/img 4.jpg",
    description: `
      Whether it's a single or double-door fridge, CoolGhar provides:
      ✅ Gas filling & leakage control
      ✅ Cooling imbalance & compressor issues
      ✅ Water drainage problems
      ✅ Thermostat and door seal replacement
      ✅ Noise, shock or wiring faults
    `,
    btnText: "Book Fridge Service",
  },
  {
    title: "Expert Chiller Services",
    image: "/assets/img 5.jpg",
    description: `
      We specialize in residential & commercial chiller systems:
      ✅ Uneven cooling or tripping
      ✅ Compressor overheating
      ✅ Water flow & pipe leakage issues
      ✅ Periodic maintenance and gas filling
      ✅ Noisy or non-functional chillers
    `,
    btnText: "Book Chiller Service",
  },
  {
    title: "Water Dispenser Services",
    image: "/assets/dispenser.webp",
    description: `
      We provide professional hot & cold dispenser repair services:
      ✅ No cooling or heating
      ✅ Leaking taps or tank issues
      ✅ Low water flow & clogged pipes
      ✅ Electrical problems & regular filter replacement
    `,
    btnText: "Book Dispenser Service",
  },
];

const Services = () => {
  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen relative">
      {/* WhatsApp Floating Icon */}
            <a
              href="https://wa.me/923320211826"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <FaWhatsapp className="text-white text-2xl" />
            </a>
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          💡 Premium Home Appliance Services by CoolGhar
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Fast, affordable, and reliable repair & maintenance services for your everyday essentials – just one call away.
        </p>
      </div>

      {/* Services List */}
      <div className="grid md:grid-cols-2 gap-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-blue-700 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 whitespace-pre-line text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
              <a
                href="tel:03320211826"
                className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition text-sm sm:text-base text-center">
                {service.btnText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
