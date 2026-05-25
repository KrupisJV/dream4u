import Image from "next/image";

const dresses = [
  {
    id: 1,
    name: "Princess Pink Dress",
    price: "$165.00",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Elegant White Dress",
    price: "$69.00",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Lavender Fairy Dress",
    price: "$71.00",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
  },
];

const accessories = [
  {
    id: 1,
    name: "Flower Crown",
    price: "$18.00",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Princess Tiara",
    price: "$29.00",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Royal Crown",
    price: "$29.00",
    image:
      "https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Pearl Bracelet",
    price: "$16.00",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f1f4] py-10 px-4">
      <main className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <header className="flex flex-col items-center border-b border-pink-100 py-8">
          <div className="mb-2 text-6xl">👑</div>

          <h1 className="text-6xl font-light tracking-wide text-[#7a2948]">
            Dream
          </h1>

          <p className="mt-2 text-lg text-[#7a2948]">Dream 4U</p>

          {/* Navigation */}
          <nav className="mt-8 flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="transition hover:text-pink-500">
              Home
            </a>
            <a href="#" className="transition hover:text-pink-500">
              Dresses
            </a>
            <a href="#" className="transition hover:text-pink-500">
              Accessories
            </a>
            <a href="#" className="transition hover:text-pink-500">
              New Arrivals
            </a>
            <a href="#" className="transition hover:text-pink-500">
              About
            </a>
            <a href="#" className="transition hover:text-pink-500">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative h-[500px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1600&auto=format&fit=crop"
            alt="Princess Hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-5xl font-semibold drop-shadow-lg">
              Magical Dresses
            </h2>

            <p className="mt-4 max-w-xl text-lg drop-shadow-md">
              Beautiful dresses for little princesses
            </p>

            <button className="mt-8 rounded-full bg-pink-400 px-8 py-3 text-sm font-semibold text-white transition hover:bg-pink-500">
              Shop Collection
            </button>
          </div>
        </section>

        {/* Dresses */}
        <section className="px-6 py-16">
          <h2 className="mb-10 text-center text-4xl font-semibold text-gray-800">
            Princess Collection
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {dresses.map((dress) => (
              <div
                key={dress.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[350px] w-full">
                  <Image
                    src={dress.image}
                    alt={dress.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {dress.name}
                  </h3>

                  <p className="mt-2 text-xl font-bold text-pink-500">
                    {dress.price}
                  </p>

                  <button className="mt-4 rounded-full bg-pink-300 px-6 py-2 text-sm font-medium text-white transition hover:bg-pink-400">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accessories */}
        <section className="bg-[#faf5f7] px-6 py-16">
          <h2 className="mb-10 text-center text-4xl font-semibold text-gray-800">
            Accessories
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {accessories.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-lg"
              >
                <div className="relative h-[220px] w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-base font-medium text-gray-800">
                    {item.name}
                  </h3>

                  <p className="mt-2 font-bold text-pink-500">
                    {item.price}
                  </p>

                  <button className="mt-3 rounded-full bg-pink-300 px-5 py-2 text-sm text-white transition hover:bg-pink-400">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-8 text-center text-sm text-gray-500">
          © 2026 Dream 4U — All rights reserved
        </footer>
      </main>
    </div>
  );
}