"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const dresses = [
  {
    id: 1,
    name: "Princess Pink Dress",
    price: "$165.00",
    image: "/images/dress1.jpeg",
  },
  {
    id: 2,
    name: "Elegant White Dress",
    price: "$69.00",
    image: "/images/dress2.jpeg",
  },
  {
    id: 3,
    name: "Lavender Fairy Dress",
    price: "$71.00",
    image: "/images/dress3.jpeg",
  },
];

const accessories = [
  {
    id: 1,
    name: "Flower Crown",
    price: "$18.00",
    image: "/images/dress1.jpeg",
  },
  {
    id: 2,
    name: "Princess Tiara",
    price: "$29.00",
    image: "/images/dress2.jpeg",
  },
  {
    id: 3,
    name: "Royal Crown",
    price: "$29.00",
    image: "/images/dress3.jpeg",
  },
  {
    id: 4,
    name: "Pearl Bracelet",
    price: "$16.00",
    image: "/images/dress1.jpeg",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f1f4] py-10 px-4">
      <main className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-pink-100 px-8 py-6"
        >
          {/* Logo - Left Side */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/d4u.png"
              alt="Dream 4U Logo"
              width={140}
              height={140}
              className="object-contain"
            />
          </motion.div>

          {/* Navigation - Center */}
          <nav className="hidden md:flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-700">
            {["Home", "Dresses", "Accessories", "New Arrivals", "About", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: "#ec4899" }}
                  className="relative transition-colors"
                >
                  {item}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-pink-400"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              )
            )}
          </nav>

          {/* logina poga un parmetiens uz loginu  */}
          <Link href="/login">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-pink-400 to-pink-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all"
          >
            Login
          </motion.button>
        </Link>
        </motion.header>

        {/* Hero Section */}
        <section className="relative h-[500px] w-full overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/dress1.jpeg"
              alt="Princess Hero"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-semibold drop-shadow-lg"
            >
              Magical Dresses
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 max-w-xl text-lg drop-shadow-md"
            >
              Beautiful dresses for little princesses
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all"
            >
              Shop Collection
            </motion.button>
          </div>

          {/* spiduminu animacija */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white/60"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </section>

        {/* kleitas */}
        <section className="px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center text-4xl font-semibold text-gray-800"
          >
            Princess Collection
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {dresses.map((dress, index) => (
              <motion.div
                key={dress.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-2xl"
              >
                <div className="relative h-[350px] w-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={dress.image}
                      alt={dress.name}
                      fill
                      className="object-cover transition-transform"
                    />
                  </motion.div>
                  
                  {/* hoveris */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-pink-500/20 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-pink-500"
                    >
                      Quick View
                    </motion.span>
                  </motion.div>
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {dress.name}
                  </h3>

                  <motion.p
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="mt-2 text-xl font-bold text-pink-500"
                  >
                    {dress.price}
                  </motion.p>

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#f472b6",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 rounded-full bg-pink-300 px-6 py-2 text-sm font-medium text-white transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* aksesuaru sadala */}
        <section className="bg-[#faf5f7] px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center text-4xl font-semibold text-gray-800"
          >
            Accessories
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"
          >
            {accessories.map((item, index) => (
              <motion.div
                key={item.id}
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <div className="relative h-[220px] w-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-base font-medium text-gray-800">
                    {item.name}
                  </h3>

                  <p className="mt-2 font-bold text-pink-500">{item.price}</p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 rounded-full bg-pink-300 px-5 py-2 text-sm text-white transition-colors hover:bg-pink-400"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* futeris */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white py-8 text-center text-sm text-gray-500"
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="cursor-default"
          >
            © 2026 Dream 4U — All rights reserved
          </motion.p>
        </motion.footer>
      </main>
    </div>
  );
}
