import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <h1>Page</h1>
      <Link to={"/admin/main"}>Admin</Link>
      <br />
      <Link to={"/shop/main"}>Shop</Link>
      <Outlet />
    </div>
  );
};
