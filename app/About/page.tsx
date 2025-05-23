"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-16 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full grid gap-12 lg:grid-cols-2 items-center">
        {/* Text Section */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            At Top Gypsum Board, we specialize in delivering high-quality,
            fire-resistant, and easy-to-install gypsum boards for modern
            construction needs. Our boards are trusted across residential,
            commercial, and industrial projects.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With years of experience and a focus on innovation, we provide
            solutions tailored for walls, ceilings, and partitions that meet
            industry standards for safety, sustainability, and durability.
          </p>
          <p className="text-lg text-gray-700">
            Choose Top Gypsum Board for reliable performance and professional
            results.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <Image
            src="/IMG_5272.png"
            alt="Gypsum Board"
            width={800}
            height={600}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
