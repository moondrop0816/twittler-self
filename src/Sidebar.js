import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <section className="Sidebar">
      <Link to="/">
        <div>tweets</div>
      </Link>
      <Link to="/about">
        <div>about</div>
      </Link>
      <Link to="/mypage">
        <div>mypage</div>
      </Link>
    </section>
  );
};

export default Sidebar;
