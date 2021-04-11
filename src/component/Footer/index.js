import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full text-center mx-auto p-5 px-auto text-sm bg-gray-200">
      <h1>
        Animation by
        <Link
          className="hover:text-gray-600"
          to={{ pathname: "https://www.freepik.com/vectors/school" }}
          target="_blank"
        >
          {" "}
          School Vector (Freepik),{" "}
        </Link>
        image by
        <Link
          className="hover:text-gray-600"
          to={{ pathname: "https://unsplash.com/" }}
          target="_blank"
        >
          {" "}
          Unsplash{" "}
        </Link>
        and Information API by
        <Link
          className="hover:text-gray-600"
          to={{ pathname: "https://jsonplaceholder.typicode.com/" }}
          target="_blank"
        >
          {" "}
          JSONPlaceHolder.
        </Link>
      </h1>
      <h1>
        &#169; Copyright 2021. Built with Tailwind and Font Awesome By Rima Mei
        Handayani
      </h1>
    </footer>
  );
};

export default Footer;
