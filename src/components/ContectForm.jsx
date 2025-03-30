import React from "react";

const ContactForm = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Get in Touch
        </h2>
        <form className="space-y-5">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg transition duration-300 hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
