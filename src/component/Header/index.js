import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="relative mx-10 mt-5 lg:bg-transparent lg:justify-between p-3 flex flex-col lg:flex-row lg:px-14">
        <div className="flex justify-between pb-2 bg-white-900">
          <div>
            <h1 className="text-2xl font-bold">PAUD ANGGREK</h1>
          </div>{" "}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <svg
              className="w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className={`${
                  !isOpen ? "block" : "hidden"
                } transition duration-800 ease-in-out`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
              <path
                className={`${
                  isOpen ? "block" : "hidden"
                } transition duration-800 ease-in-out`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} menu lg:flex`}>
          <ul className="lg:flex lg:mx-3">
            <li className="link">
              <Link to="/">BERANDA</Link>
            </li>
            <li className="link">
              <Link to="/tentang">TENTANG</Link>
            </li>
            <li className="link">
              <Link to="/kontak">HUBUNGI KAMI</Link>
            </li>
          </ul>
          <div>
            <button className="btn ">
              <Link to="/daftar">DAFTAR</Link>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
