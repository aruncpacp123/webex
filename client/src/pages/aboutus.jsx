import Navbar from "@/components/navbar";
import React from "react";

export default function AboutUs() {
  return (
    <>
    <Navbar />
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are a passionate team dedicated to providing exceptional solutions 
          and creating impactful experiences for our clients.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our mission is to innovate and lead in our industry by delivering 
            value-driven solutions. We aim to inspire and empower our clients 
            and communities through our work.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-white text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white">John Doe</h3>
              <p className="text-sm text-gray-400">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Jane Smith</h3>
              <p className="text-sm text-gray-400">Lead Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white">Alex Johnson</h3>
              <p className="text-sm text-gray-400">Project Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
    </>
  );
}
