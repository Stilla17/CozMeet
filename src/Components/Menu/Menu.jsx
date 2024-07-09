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

const menu = [
  {
    icon: <RiHome3Line className="text-[24px] icon" />,
    title: "Feed",
  },
  {
    icon: <TbUsersMinus className="text-[24px] icon" />,
    title: "Friends",
  },
  {
    icon: <TbCalendarEvent className="text-[24px] icon" />,
    title: "Event",
  },
  {
    icon: <PiImageSquareThin className="text-[24px] icon" />,
    title: "Photos",
  },
  {
    icon: <PiShoppingCartSimpleLight className="text-[24px] icon" />,
    title: "Marketplace",
  },
];

function Menu() {
  return (
    <div className="max-w-[20%] bg-white rounded-xl shadow-lg overflow-hidden my-6">
      <MenuList sx={{ padding: "12px 12px" }}>
        {menu.map((item, index) => (
          <MenuItem
            key={index}
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
        ))}
      </MenuList>
    </div>
  );
}

export default Menu;
