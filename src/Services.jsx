import React from "react";

const servicesData = [
  {
    title: "Professional AC Services",
    image: "src/assets/img 3.jpg",
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
    image: "src/assets/img 4.jpg",
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
    image: "src/assets/img 5.jpg",
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
    image: "src/assets/dispenser.webp",
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
    <div className="px-6 py-12 bg-gray-50 min-h-screen">
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
              <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition text-sm sm:text-base">
                {service.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
