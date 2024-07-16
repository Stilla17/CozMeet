import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const messages = [
  { name: "Roger Korsgaard", status: true },
  { name: "Terry Torff", status: true },
  { name: "Angel Bergson", status: true },
  { name: "Emerson Gouse", status: false },
  { name: "Corey Baptista", status: true },
  { name: "Zain Culhane", status: false },
  { name: "Randy Lipshutz", status: true },
  { name: "Craig Botosh", status: true },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Messages() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              width: "100%",
            }}
          >
            <Tab label="Primary" {...a11yProps(0)} sx={{ fontSize: "12px" }} />
            <Tab label="General" {...a11yProps(1)} sx={{ fontSize: "12px" }} />
            <Tab
              label="Requests"
              {...a11yProps(2)}
              sx={{ fontSize: "12px", color: "blue" }}
            />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <div className="divide-y divide-gray-200">
            {messages.map((message, index) => (
              <div
                key={index}
                className="flex items-center py-2 hover:bg-gray-100"
              >
                <div className="relative">
                  <Avatar alt={message.name} className="h-10 w-10 mr-3" />
                  <div
                    className={` w-[10px] h-[10px] absolute bottom-0 right-[15px] border-2 border-white ${
                      message.status === true ? "bg-green-500" : "bg-red-500"
                    } rounded-full`}
                  ></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-900 font-medium">
                    {message.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 bg-white text-blue-500 cursor-pointer hover:underline">
            View All
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="divide-y divide-gray-200">
            {messages.map((message, index) => (
              <div
                key={index}
                className="flex items-center py-2 hover:bg-gray-100"
              >
                <Avatar alt={message.name} className="h-10 w-10 mr-3" />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-medium">
                    {message.name}
                  </span>
                  <span
                    className={`text-sm ${
                      message.status === "online"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {message.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {messages.slice(-1).map((message, index) => (
            <div key={index}>
              <p>Name: {message.name}</p>
              <p>Status: {message.status}</p>
            </div>
          ))}
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default Messages;
