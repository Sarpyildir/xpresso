import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";

export default function DropDownMenu(props) {
  const navigate = useNavigate();
  const createHandleMenuClick = (menuItem) => {
    return () => {
      navigate(`/${menuItem}`);
    };
  };
  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Dropdown>
      <MenuButton>{props.username}</MenuButton>
      <Menu slots={{ listbox: Listbox }}>
        <MenuItem onClick={createHandleMenuClick("Notes")}>Notes</MenuItem>
        <MenuItem onClick={createHandleMenuClick("Favorites")}>
          Favorites
        </MenuItem>
        <MenuItem onClick={createHandleMenuClick("Settings")}>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>
    </Dropdown>
  );
}

const Listbox = styled("ul")(
  () => `
  font-size: 16px;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: #FFF8EA;
  color: #594545;
  box-shadow: 0px 4px 6px rgba(0,0,0, 0.50);
  z-index: 1;
  `
);

const MenuItem = styled(BaseMenuItem)(
  () => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }


  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: #9E7676;
    color: #FFF8EA;
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  () => `
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: #FFF8EA;
  border: none;
  color: #594545;

  &:hover {
    background: #9E7676;
    color: #FFF8EA;
  }
  `
);
