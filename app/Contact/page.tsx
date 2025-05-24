import React from "react";

const page = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Contact Us
        </h1>
        <p className="text-lg sm:text-3xl text-gray-700 mb-12 font-semibold">
          We&apos;d love to hear from you. Reach out using any of the methods
          below.
        </p>

        <div className="space-y-6 text-left text-gray-800 text-lg sm:text-xl text -center">
          <div className="text-center">
            📍{" "}
            <strong>
              <p className="text-3xl mb-5 text-center">Address</p>
            </strong>{" "}
            <a
              href="https://www.google.com/maps/place/Top+Build+Industries"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              <p className="text-2xl text-center italic">
                123 Top Build Avenue, Innovation City, TX 75001
              </p>
            </a>
          </div>

          <div className="text-center">
            📞{" "}
            <strong>
              <p className="text-3xl mb-5 text-center">Phone</p>
            </strong>{" "}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              <p className="text-2xl mb-5 text-center italic">0911-15-12-01</p>
              <p className="text-2xl text-center italic">0911-15-12-01</p>
            </a>
          </div>

          <div className="text-center">
            <span className="bg-black text-white p-2 rounded">✉️</span>{" "}
            <strong className="text-3xl text-center block">Email</strong>{" "}
            <a
              href="mailto:heliossanta@gmail.com"
              className="text-blue-600 hover:underline"
            >
              <p className="text-2xl mb-5 text-center italic">
                heliossanta@gmail.com
              </p>
              <p className="text-2xl mb-5 text-center italic">
                contact@topbuild.com
              </p>
            </a>
          </div>

          <div className="text-center text-2xl">
            🌐{" "}
            <strong>
              <p className="text-3xl mb-5">Follow us</p>
            </strong>{" "}
            <a
              href="https://www.linkedin.com/company/top-build"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              <p className="text-2xl mb-5  italic">LinkedIn</p>
            </a>{" "}
            <a
              href="https://www.instagram.com/topbuild"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              <p className="text-2xl italic">Instagram</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
