"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Top Swiper Section */}
      <div className="relative w-full h-80 md:h-96">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="w-full h-full"
        >
          {/* Slides */}
          {[
            "/gypsum.jpeg",
            "/download.jpeg",
            "/images.jpeg",
            "/images2.jpeg",
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-64 md:h-96 overflow-hidden">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h1 className="text-gray-300 text-2xl md:text-5xl font-semibold">
                    Top Gypsum Board Solutions
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Section */}

      <section className="bg-gray-200 py-16 px-4 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed max-w-2xl mx-auto mb-8">
          Durable, fire-resistant, and easy-to-install gypsum boards built for
          the demands of modern construction.
        </p>
        <Link
          href="/Quote"
          className="inline-block bg-gray-800 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow hover:bg-gray-700 transition duration-300"
        >
          Get a Quote
        </Link>
      </section>

      {/* About Section */}

      <section className="bg-gray-300">
        <div className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-8 sm:mb-10 text-center text-gray-800 tracking-tight leading-tight">
            <span className="text-primary">About</span> Our Gypsum Boards
          </h2>

          <div className="w-[92%] sm:w-[80%] mx-auto text-justify space-y-4 sm:space-y-6 font-medium">
            <p className="text-base sm:text-2xl text-gray-700 leading-[1.6] sm:leading-[2.2]">
              Our{" "}
              <span className="font-semibold text-primary">gypsum boards</span>{" "}
              are engineered for exceptional performance in both residential and
              commercial settings. From ceilings and walls to partitions, we
              offer specialized solutions tailored to your construction needs.
            </p>

            <p className="text-base sm:text-2xl text-gray-700 leading-[1.6] sm:leading-[2.2]">
              Backed by a commitment to{" "}
              <span className="font-semibold text-green-700">quality</span>,{" "}
              <span className="font-semibold text-blue-700">
                sustainability
              </span>
              , and{" "}
              <span className="font-semibold text-purple-700">innovation</span>,
              our products consistently meet and exceed industry
              standards—delivering reliability you can build on.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us?</h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Fire Resistance</h3>
            <p className="text-gray-600">
              Our gypsum boards offer excellent fire resistance for safer
              buildings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sound Insulation</h3>
            <p className="text-gray-600">
              Reduce noise levels with our high-quality sound-insulating boards.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Easy Installation</h3>
            <p className="text-gray-600">
              Lightweight, durable, and designed for fast, easy installation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
