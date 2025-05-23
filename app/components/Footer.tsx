import React from "react";
import Link from "next/link";
export const Footer = () => {
  return (
    <div>
      {/* Call to Action */}
      <section className="bg-gray-800 py-12 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6">
          Contact us today to get expert guidance and the best gypsum board
          products.
        </p>
        <Link
          href="/Contact"
          className="bg-white text-gray-800 px-6 py-3 rounded font-semibold hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};
