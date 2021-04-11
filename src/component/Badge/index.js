import React from "react";
import { Link } from "react-router-dom";
import * as Fa from "react-icons/fa";

const Badge = () => {
  return (
    <div className="flex flex-wrap justify-evenly content-center mb-24">
      <Link to="/" className="badge">
        <Fa.FaFileAlt className="fa-4x mb-2 opacity-50" color="purple" />
        <h3>Fasilitas</h3>
      </Link>
      <Link to="/" className="badge">
        <Fa.FaGraduationCap className="fa-4x mb-2 opacity-50" color="purple" />
        <h3>Alumni</h3>
      </Link>
      <Link to="/" className="badge">
        <Fa.FaIdBadge className="fa-4x mb-2 opacity-50" color="purple" />
        <h3>Pengajar</h3>
      </Link>
    </div>
  );
};

export default Badge;
