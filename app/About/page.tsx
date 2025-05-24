import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-300 pt-20 pb-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-stretch">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full px-4">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 text-center my-2">
            About Us
          </h1>
          <p className="text-2xl text-gray-700 mb-4 leading-relaxed">
            At Top Gypsum Board, we specialize in delivering high-quality,
            fire-resistant, and easy-to-install gypsum boards for modern
            construction needs. Our boards are trusted across residential,
            commercial, and industrial projects.
          </p>
          <p className="text-2xl text-gray-700 mb-4 leading-relaxed">
            With years of experience and a focus on innovation, we provide
            solutions tailored for walls, ceilings, and partitions that meet
            industry standards for safety, sustainability, and durability.
          </p>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Choose Top Gypsum Board for reliable performance and professional
            results.
          </p>
        </div>

        {/* Image Section */}

        <div className="relative w-full h-80 sm:h-96 lg:h-[600px] rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/IMG_5272.png"
            alt="Gypsum Board"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
          />
        </div>
      </div>
    </div>
  );
}
