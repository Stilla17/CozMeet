import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { TbUsersMinus } from "react-icons/tb";
import { TbCalendarEvent } from "react-icons/tb";
import { PiImageSquareThin } from "react-icons/pi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const menu = [
  {
    icon: <RiHome3Line className="text-[24px] icon" />,
    title: "Feed",
    path: "/",
  },
  {
    icon: <TbUsersMinus className="text-[24px] icon" />,
    title: "Friends",
    path: "friends",
  },
  {
    icon: <TbCalendarEvent className="text-[24px] icon" />,
    title: "Event",
    path: "event",
  },
  {
    icon: <PiImageSquareThin className="text-[24px] icon" />,
    title: "Photos",
    path: "photos",
  },
  {
    icon: <PiShoppingCartSimpleLight className="text-[24px] icon" />,
    title: "Marketplace",
    path: "market",
  },
];

function Menu() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden my-6">
      <MenuList sx={{ padding: "12px 12px" }}>
        {menu.map((item, index) => (
          <Link to={item.path} key={index}>
            <MenuItem
              sx={{
                marginBottom: 2,
                padding: "12px 12px",
                "&:hover": {
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "7px",
                  "& .icon": {
                    color: "white",
                  },
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </div>
  );
}

export default Menu;