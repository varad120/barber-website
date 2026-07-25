import { motion } from "framer-motion";
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-bold tracking-wide text-yellow-500">
          The Ashvani Sharma Studio
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
          <li><a href="#home" className="hover:text-yellow-500 transition">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-500 transition">Services</a></li>
          <li><a href="#gallery" className="hover:text-yellow-500 transition">Gallery</a></li>
          <li><a href="#contact" className="hover:text-yellow-500 transition">Contact</a></li>
        </ul>

        <motion.a
          href="tel:+919876543210"
          className="inline-flex items-center gap-2 bg-yellow-500 text-black  px-6 py-3 rounded-lg font-semibold shadow-lg"
          animate={{
            scale: [1, 1.03, 1],
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
    </nav>
  );
}

export default Navbar;