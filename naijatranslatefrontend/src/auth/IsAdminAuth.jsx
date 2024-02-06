import { Outlet } from "react-router-dom";
Outlet;

const IsAdminAuth = () => {
  const isAdminValue = localStorage.getItem("isAdmin");
  console.log(isAdminValue);

  return isAdminValue ? (
    <Outlet />
  ) : (
    <div>
      <h2>Return to Homepage</h2>
    </div>
  );
};

export default IsAdminAuth;