"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Top Swiper Section */}
      <div className="relative w-full h-90 md:h-96">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="w-full h-full"
        >
          {/* Slides */}
          {["/1..png", "/11.jpg", "/13.jpg", "/images2.jpeg"].map(
            (src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-70 md:h-96 overflow-hidden">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover object-center overflow-hidden"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-gray-300 text-2xl md:text-5xl font-semibold">
                      Top Gypsum Board Solutions
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      {/* Hero Section */}

      <section className="bg-gray-100 py-24 px-4 sm:px-8 lg:px-12 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center">
          Welcome to Top Build Industries
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-16">
          {/* Image */}

          <div className="w-full relative h-full min-h-[300px]">
            <Image
              src="/12.jpg"
              alt="Top Build Gypsum Boards"
              fill
              sizes="(max-width: 768px) 80vw, 50vw"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Article */}
          <article className="text-left w-full">
            <h3 className="text-4xl font-semibold mb-6 text-gray-600 text-center md:text-center">
              Top Build
            </h3>

            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">
              We are passionate about shaping the future of construction through
              innovative and dependable gypsum board solutions. Whether you're
              building a home, office, or commercial space, our products are
              engineered to deliver lasting quality and ease of use.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
              We collaborate closely with architects, contractors, and
              developers to offer tailored gypsum board solutions that suit
              specific project requirements. From fire-rated walls to
              moisture-resistant ceilings, Top Build delivers versatility you
              can rely on.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Join thousands of satisfied clients across the globe who trust Top
              Build for performance, durability, and support — every step of the
              way.
            </p>
          </article>
        </div>
      </section>

      {/* About Section */}

      <section className="bg-gray-300">
        <div className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
          {/* Heading with moderate width */}
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 leading-tight tracking-tight">
              <span className="text-primary">About</span> Our Gypsum Boards
            </h2>
          </div>

          {/* Readable Paragraphs */}
          <div className="max-w-4xl mx-auto text-left space-y-8 text-gray-800">
            <p className="text-2xl leading-8">
              Our{" "}
              <span className="font-semibold text-primary">gypsum boards</span>{" "}
              are engineered for exceptional performance in both residential and
              commercial settings. Whether you&apos;re building ceilings, walls,
              or partitions, we provide tailored solutions to meet the highest
              construction standards.
            </p>

            <p className="text-2xl leading-8">
              Backed by a commitment to{" "}
              <span className="font-semibold text-green-700">quality</span>,
              <span className="font-semibold text-blue-700">
                {" "}
                sustainability
              </span>
              , and
              <span className="font-semibold text-purple-700"> innovation</span>
              , our products consistently exceed industry expectations —
              delivering strength, fire resistance, and ease of installation
              that you can depend on.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="bg-gray-200 py-16 px-6">
        <h2 className="text-5xl font-bold mb-10 text-center text-gray-900">
          Why Choose Us?
        </h2>
        <div className="grid gap-8 md:grid-cols-3 text-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-primary">
              Fire Resistance
            </h3>
            <p className="text-gray-700 leading-relaxed text-2xl">
              Our gypsum boards offer excellent fire resistance for safer
              buildings.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-primary">
              Sound Insulation
            </h3>
            <p className="text-gray-700 leading-relaxed text-2xl">
              Reduce noise levels with our high-quality sound-insulating boards.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-3 text-primary">
              Easy Installation
            </h3>
            <p className="text-gray-700 leading-relaxed text-2xl">
              Lightweight, durable, and designed for fast, easy installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 text-gray-800 text-lg sm:text-xl">
            {/* Address */}
            <div className="text-center">
              <h2 className="font-semibold text-gray-900 mb-4 md:mb-3 lg:mb-2 text-4xl">
                📍 Address
              </h2>
              <a
                href="https://www.google.com/maps/place/Top+Build+Industries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline inline-block"
              >
                <p className="text-2xl mb-2 md:mb-1 lg:mb-0 italic">
                  123 Top Build Avenue
                </p>
                <p className="text-2xl italic">Innovation City, TX 75001</p>
              </a>
            </div>

            {/* Phone */}
            <div className="text-center">
              <h2 className="font-semibold text-gray-900 mb-4 md:mb-3 lg:mb-2 text-4xl">
                📞 Phone
              </h2>
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:underline inline-block"
              >
                <p className="text-2xl mb-2 md:mb-1 lg:mb-0 italic">
                  0911-15-12-01
                </p>
                <p className="text-2xl italic">0911-36-43-87</p>
              </a>
            </div>

            {/* Email */}
            <div className="text-center">
              <h2 className="font-semibold text-gray-900 mb-4 md:mb-3 lg:mb-2 text-4xl">
                <span className="bg-black text-white p-2 rounded">✉️</span>
                Email
              </h2>
              <a
                href="mailto:contact@topbuild.com"
                className="text-blue-600 hover:underline inline-block"
              >
                <p className="text-2xl mb-2 md:mb-1 lg:mb-0">
                  contact@topbuild.com
                </p>
                <p className="text-2xl">Pedro@gmail.com</p>
              </a>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h2 className="font-semibold text-gray-900 mb-4 md:mb-3 lg:mb-2 text-4xl">
                🌐 Social
              </h2>
              <a
                href="https://www.linkedin.com/company/top-build"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline block text-2xl mb-4 md:mb-3 lg:mb-2"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/topbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline block text-2xl mb-4 md:mb-3 lg:mb-2"
              >
                Instagram
              </a>
              <a
                href="https://www.topbuild.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline block text-2xl"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
