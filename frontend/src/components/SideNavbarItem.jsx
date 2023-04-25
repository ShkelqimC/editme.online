export default function SideNavbarItem({ item, index, onClick, active }) {
  return (
    <button
      className={`sidebarItem ${active ? "active" : ""}`}
      // className={({ isActive }) =>
      //   isActive ? "edit-active-state " : "edit-inactive-state"
      // }
      key={index}
      onClick={() => {
        onClick(item);
      }}
    >
      {item.icon}
      {item.name}
    </button>
  );
}
