import { Link } from "react-router-dom";
import RequestDropDown from "./RequestDropDown";

const Header = () => {
  return (
    <header className="shadow">
      <div className="container mx-auto">
        <div className="flex gap-8 items-center">
          <Link to={"/"}>خانه</Link>
          <RequestDropDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
