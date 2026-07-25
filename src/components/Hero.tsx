import { motion } from "framer-motion";
function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="uppercase tracking-[8px] text-yellow-500 mb-4">
          Premium Grooming
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Sharp Cuts.
          <br />
          Clean Style.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Experience modern haircuts, beard styling and luxury grooming in a
          relaxing atmosphere.
        </p>

        <motion.a
  href="tel:+919876543210"
  className="inline-flex items-center gap-2 bg-yellow-500 text-black mt-10 px-6 py-3 rounded-lg font-semibold shadow-lg"
  animate={{
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 0 rgba(234,179,8,0)",
      "0 0 20px rgba(234,179,8,0.5)",
      "0 0 0 rgba(234,179,8,0)"
    ]
  }}
  whileHover={{
    scale: 1.1,
    y: -3
  }}
  whileTap={{
    scale: 0.95
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
   📞 Book Now
</motion.a>
      </div>
    </section>
  );
}

export default Hero;