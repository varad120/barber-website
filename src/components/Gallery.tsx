import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import work1 from "../assets/images/work1.jpg";
import work2 from "../assets/images/work2.jpg";
import work3 from "../assets/images/work3.jpg";
import work4 from "../assets/images/work4.jpg";
import work5 from "../assets/images/work5.jpg";
import work6 from "../assets/images/work6.jpg";

const galleryImages = [
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
];

function Gallery() {
const [selectedImage, setSelectedImage] = useState<string | null>(null);  return (
    <section
      id="gallery"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          My <span className="text-yellow-500">Work</span>
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Every fade, trim and beard sculpt is crafted with precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                src={image}
                alt={`Haircut ${index + 1}`}
                className="w-full h-80 object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />

              <div
                className="
                  absolute inset-0
                  bg-black/50
                  opacity-0
                  group-hover:opacity-100
                  transition duration-300
                  flex items-center justify-center
                "
              >
                <span className="text-white text-xl font-semibold">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected haircut"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white text-5xl hover:text-yellow-500 transition"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;