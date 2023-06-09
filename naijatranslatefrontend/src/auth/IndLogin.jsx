import { Link } from "react-router-dom";
import Checkbox from "../utils/Checkbox";

import LogInfo from "./LogInfo";

const IndLogin = () => {
  return (
    <form className="rounded-md flex flex-col content-center max-w-[500px] mx-auto mt-[100px] p-md">
      <div className="pb-md">
        <input
          className="shadow placeholder:p-md appearance-none flex  h-[40px] border rounded w-full p-[1rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="pb-md">
        <input
          className="shadow placeholder:p-md appearance-none  h-[40px] border flex  rounded w-full p-[1rem] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Login In
        </button>
      </div>
      <div>
        <Checkbox />
      </div>
      <Link to="containerlogin" className="">
        <button className="bg-primary text-white rounded-full w-full px-lg h-[40px]">
          Login
        </button>
      </Link>
      <div className="flex flex-col p-[10px] justify-center mx-auto">
        <p className=" text-sm">
          Don't have an account?
          <Link>
            <span className="pl-sm pr-sm text-primary">Sign Up</span>
          </Link>
        </p>
        <Link to="/passwordreset" className="underline underline-offset-8 mx-auto">
          Forgot Password
        </Link>
      </div>
    </form>
  );
};

export default IndLogin;
