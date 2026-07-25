const services = [
  {
    title: "Classic Haircut",
    price: "₹80",
    description: "Precision haircut tailored to your style."
  },
  {
    title: "Beard Trim",
    price: "₹60 - ₹80",
    description: "Sharp lines and a perfectly shaped beard."
  },
  {
    title: "Hair + Beard",
    price: "₹150 - ₹200",
    description: "Complete grooming experience."
  },
  {
    title: "Kids Haircut",
    price: "₹70 - ₹100",
    description: "Comfortable and stylish cuts for kids."
  }
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#111] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Our <span className="text-yellow-500">Services</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Professional grooming for every style.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#1b1b1b] rounded-xl p-8 border border-gray-800 hover:border-yellow-500 transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="text-yellow-500 text-xl mt-2">
                {service.price}
              </p>

              <p className="text-gray-400 mt-4">
                {service.description}
              </p>

              <a
                href="tel:+919889855014"
                className="inline-block bg-yellow-500 text-black  mt-5 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 hover:scale-105"
              >
                Book Now
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;