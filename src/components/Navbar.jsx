import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/competitions">Соревнования</Link>
        </li>
        <li>
          <Link to="/matches">Матчи</Link>
        </li>
      </ul>

      <hr />

      <Outlet />
    </>
  );
}
export { NavBar };
