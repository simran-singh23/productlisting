
import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  
  {
    name: "Top",
    path: "/top",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About",
    path: "/about",
  },

];

export default function Navbar() {
  return (
    <div className="flex justify-center pt-10 mb-8">
   <nav className="bg-white rounded-full shadow-lg px-3 py-3 w-[90%] max-w-4xl">

        <ul className="flex items-center justify-between">
      
          {navItems.map((item) => (
    <li key={item.name}>
              <NavLink to={item.path}
              
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-3 
                rounded-full font-semibold transition-all duration-300
                  
                  ${isActive
                      ? "bg-lime-300 text-black shadow-md"
                      : "text-black hover:bg-gray-100"
                  }`
                }
              >
                {item.name}{item.count && (
                  <span className="bg-black text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                    {item.count}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
