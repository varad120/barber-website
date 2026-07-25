import work1 from "../assets/images/work1.jpg";
function About() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div>
          <img
            src={work1}
            alt="hello"
            className="rounded-xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div>

          <p className="uppercase tracking-[5px] text-yellow-500">
            About Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            More Than Just
            <span className="text-yellow-500"> Haircuts</span>
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            We believe every haircut should boost confidence.
            From classic styles to modern fades, every client
            receives personal attention and premium grooming.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-10">

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">
                1000+
              </h3>

              <p className="text-gray-400 mt-2">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">
                7+
              </h3>

              <p className="text-gray-400 mt-2">
                Years Experience
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;