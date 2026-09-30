import { MdOutlineShoppingBag } from "react-icons/md";
import Header_Logo from "../../assets/Header_Logo.png";
import Container from "../common/Container";

const Navber = () => {
  return (
    <nav className="flex justify-between items-center text-white py-9 max-w-299 mx-auto absolute top-0 left-0 right-0 z-1">
      <img src={Header_Logo} />
      <ul className="flex gap-6 items-center font-extralight">
        <li>Home</li>
        <li>Courses</li>
        <li>Creators</li>
      </ul>
      <div className="flex gap-6 items-center">
        <button>Login</button>
        <button>Join Us</button>
        <MdOutlineShoppingBag />
      </div>
    </nav>
  );
};

export default Navber;
