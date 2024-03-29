import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../utils/Title";
import feedback from "../assets/feedback.svg";
import contact from "../assets/contact.svg";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClose = () => {
    setNavbar(false);
  };
  const handleOpen = () => {
    setNavbar(true);
  };
  return (
    <div className="h-[70px] py-[10px] flex flex-row justify-between">
      <div className="flex">
        <div
          className=" text-dark focus:border-gray-400 cursor-pointer "
          onClick={() => setNavbar(!navbar)}
        >
          {!navbar && <HiMenu onClick={handleClose} size={30} />}
          {navbar && <HiOutlineX onClick={handleOpen} size={25} />}
          {navbar && (
            <ul className="w-[200px] absolute p-[10px] rounded-[12px] min-h-[600px] z-30 bg-white flex flex-col gap-[50px] mt-[10px] sm:w-[120px] sm:min-h-[200px] sm:gap-[30px]">
              <div className="">
                <Link
                  to="help_center"
                  className="flex align-middle items-center mb-[20px] hover:bg-light p-[10px] rounded-[10px]"
                >
                  <img
                    src={feedback}
                    alt="help_center"
                    className="pr-[10px] sm:p-[0px] sm:h-[15px] sm-w-[15px]"
                  />
                  <h2 className="font-medium sm:text-[12px] sm:leading-[20px]">
                    Help Center
                  </h2>
                </Link>
                <Link
                  to="/contact"
                  className="flex align-middle items-center mb-[20px] hover:bg-light p-[10px] rounded-[10px]"
                >
                  <img
                    src={contact}
                    alt="contact"
                    className="pr-[10px] sm:p-[0px] sm:h-[15px] sm-w-[15px]"
                  />
                  <h2 className="font-medium sm:text-[12px] sm:leading-[20px]">
                    Contact us
                  </h2>
                </Link>
              </div>
              <Link
                to="/signup"
                className="flex mt-[200px] sm:mt-[100px] font-medium hover:bg-light p-[10px]  rounded-[10px]"
              >
                Sign Up
              </Link>
            </ul>
          )}
        </div>
        <Title />
      </div>
      <div className="flex flex-row justify-around px-[10px] ">
        <Link to="/signup">
          <button className="bg-primary sm:text-[14px] sm:leading-[20px] hover:text-blue-100 hover:outline-1 text-white rounded-full px-lg sm:px-[10px] h-[30px] mr-[10px]">
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button className=" text-primary outline outline-offset-0 sm:text-[14px] sm:leading-[20px] rounded-full px-lg h-[30px] outline-1 hover:bg-blue-100 sm:px-[10px]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
