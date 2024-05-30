import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="max-w-screen-md mx-auto p-8 mt-24">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white p-3 rounded-md hover:bg-pink-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
