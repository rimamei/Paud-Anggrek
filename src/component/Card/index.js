import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [result, setResult] = useState(null);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    if (result === null) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        setResult(
          res.data.map((el) => {
            return {
              id: el.id,
              title: el.title,
              body: el.body,
            };
          })
        );
      });
    }
  }, [result]);

  const loadMore = (e) => {
    e.preventDefault();
    setLimit(limit + 3);
  };

  return (
    <div>
      <Link
        to="/"
        className="flex flex-col lg:flex-row flex-wrap justify-evenly items-center"
      >
        {result !== null &&
          result.slice(0, limit).map((item) => {
            return (
              <div
                key={item.id}
                className="w-3/4 lg:mx-5 lg:w-1/4 shadow hover:shadow-lg mb-8"
              >
                <img
                  src="images/p1.jpg"
                  alt=""
                  className="cursor-pointer object-cover h-auto w-full"
                />
                <div className="p-3">
                  <h1 className="overflow-hidden mb-5">{item.title}</h1>
                  <h3 className="font-thin">{item.body}</h3>
                </div>
              </div>
            );
          })}
      </Link>
      <div className="flex justify-center items-center">
        <button
          onClick={loadMore}
          className="p-1 bg-gray-100 rounded shadow hover:shadow-lg"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Card;
