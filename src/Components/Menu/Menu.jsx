import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { TbUsersMinus } from "react-icons/tb";
import { TbCalendarEvent } from "react-icons/tb";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiImageSquareThin } from "react-icons/pi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { FaFileAlt } from "react-icons/fa";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function Menu() {
  return (
    <div>
      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <RiHome3Line className="text-[24px]" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <TbUsersMinus className="text-[24px]" />
            </ListItemIcon>
            <ListItemText>Friends</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <TbCalendarEvent className="text-[24px]" />
            </ListItemIcon>
            <ListItemText>Event</ListItemText>
            <span
              style={{
                width: "25px",
                height: "25px",
                marginLeft: "auto",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              0
            </span>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IoChatbubbleEllipsesOutline className="text-[24px]" />
            </ListItemIcon>
            <ListItemText>Chat</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <PiImageSquareThin className="text-[24px]" />
            </ListItemIcon>
            <ListItemText>Photos</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <PiShoppingCartSimpleLight className="text-[24px]" />
            </ListItemIcon>
            <ListItemText>Marketplace</ListItemText>
          </MenuItem>

        </MenuList>
      </Paper>
    </div>
  );
}

export default Menu;
