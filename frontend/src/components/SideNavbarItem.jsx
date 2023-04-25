import { Link } from "react-router-dom";
export default function SideNavbarItem({ item, index, onClick }) {
  return (
    <Link
      to={item.path}
      className={({ isActive }) =>
        isActive ? "edit-active-state " : "edit-inactive-state"
      }
      key={index}
      onClick={() => {
        debugger;
        onClick(item);
      }}
    >
      {item.icon}
      {item.name}
    </Link>
  );
}
