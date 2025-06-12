import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const blogs = [
  {
    id: 1,
    title: "5 Tips to Keep Your AC Running Smoothly",
    desc: "Learn expert ways to maintain your air conditioner and save on electricity bills.",
    img: "/assets/blog1.jpg",
    tag: "Maintenance",
  },
  {
    id: 2,
    title: "Why Your Fridge Isn't Cooling",
    desc: "Common fridge problems and quick fixes you can try at home.",
    img: "/assets/blog2.jpg",
    tag: "Repair",
  },
  {
    id: 3,
    title: "Emergency Cooling Solutions in Summer",
    desc: "What to do when your AC breaks down in extreme heat? Here's a survival guide.",
    img: "/assets/blog3.jpg",
    tag: "Emergency",
  },
];

export default function Blog() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen p-6 md:p-10">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-3">
          CoolGhar Blog
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Stay updated with our latest tips, guides, and industry insights to keep your home cool and appliances working efficiently.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col space-y-3">
              <span className="text-sm text-blue-600 font-semibold uppercase">
                {blog.tag}
              </span>
              <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 text-sm">{blog.desc}</p>
              <button className="text-blue-700 font-semibold hover:underline w-max">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
