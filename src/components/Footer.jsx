import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaFilm,
  FaTv,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Movies", path: "/movies", icon: <FaFilm /> },

    { name: "Conditions of Use", path: "/conditionsofuse", icon: <FaTv /> },
    { name: "Top", path: "/Top", icon: <FaHeart /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-6 mt-10">
      <div className="max-w-7xl mx-auto flex justify-center gap-8 flex-wrap">
        {links.map((link, index) => (
            
          <motion.div key={index}whileHover={{ y: -8, scale: 1.1 }}

            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to={link.path}
              className="flex flex-col items-center text-gray-400 hover:text-red-500 transition"
            >
              <span className="text-2xl">{link.icon}</span>
              
              <span className="text-sm mt-1">{link.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-6 text-sm">
        © 2026  All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;