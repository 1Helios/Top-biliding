import React from "react";
import Link from "next/link";
export const Footer = () => {
  return (
    <div>
      {/* Call to Action */}
      <section className="bg-gray-800 py-12 px-6 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-base sm:text-lg md:text-2xl mb-6">
          Contact us today to get expert guidance and the best gypsum board
          products.
        </p>

        <Link
          href="/Contact"
          className="bg-white text-gray-800 px-6 py-3 rounded hover:bg-gray-100 text-2xl"
        >
          Contact Us
        </Link>
        <br />

        <p className="text-center text-gray-100 text-sm mt-12">
          © {new Date().getFullYear()} Top Build Industries. All rights
          reserved.
        </p>
      </section>
    </div>
  );
};
