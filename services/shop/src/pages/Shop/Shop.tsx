import { Link } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";

export default function Shop() {
  return (
    <>
      <h1>Shop</h1>
      <div>HELLO</div>
      <Link to={shopRoutes.second}>second</Link>
    </>
  );
}
