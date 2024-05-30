import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="max-w-screen-lg mx-auto p-8 mt-16">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Welcome to our Bookstore! Established in 2018, our store has been
              a haven for book lovers in the community. We offer a wide variety
              of books across genres, from fiction and non-fiction to mystery,
              fantasy, and educational materials. Our mission is to foster a
              love for reading and provide a place where readers of all ages can
              find their next great read.
            </p>
            <p className="text-lg leading-relaxed">
              Our knowledgeable and friendly staff are always on hand to help
              you find what you're looking for, recommend new titles, or simply
              chat about your favorite books. We believe in the power of stories
              to transform lives and bring people together. That’s why we host
              regular events such as author signings, book clubs, and reading
              sessions.
            </p>
            <p className="text-lg leading-relaxed">
              At our bookstore, you’ll not only find a vast selection of books
              but also a welcoming community of fellow readers. Whether you’re
              looking for the latest bestseller, a classic novel, or a unique
              gift, we’ve got you covered. Thank you for being a part of our
              story. We look forward to seeing you in the store!
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
