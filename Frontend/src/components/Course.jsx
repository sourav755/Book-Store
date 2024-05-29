import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12">
            Explore our extensive range of courses designed to expand your
            knowledge and skills. From beginner to advanced levels, we offer
            something for everyone across various disciplines. Dive in and start
            your learning journey with us today. We’re thrilled to have you
            here! Happy learning and growing with us!
          </p>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 video -bath rounded">
            Back
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {console.log(list)}
          {list.map((item) => {
            console.log(item);
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
