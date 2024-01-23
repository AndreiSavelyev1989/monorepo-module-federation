import { Link } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/admin";

export default function About() {
  return (
    <>
      <h1>Admin</h1>
      <Link to={adminRoutes.second}>second</Link>
    </>
  );
}
