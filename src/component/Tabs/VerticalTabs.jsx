import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const VerticalTabs = (props) => {
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  console.log(props.datas);
  console.log(props.semdatas);
  return (
    <>
      <div>
        <Box sx={{ width: "100%" }}>
          <Tabs
            orientation={`${
              window.screen.width > 768 ? "vertical" : "horizontal"
            }`}
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            indicatorColor="none"
          >
            {props.datas.map((e, index) => {
              return (
                <LinkTab
                  onClick={() => {
                    props.changeSem(e);
                  }}
                  className={`${
                    value === index
                      ? "!bg-pink-400 !rounded-md !shadow-md !shadow-[red] !outline-none"
                      : "!text-blue-700 "
                  } !text-white  !font-medium`}
                  value={index}
                  label={e}
                />
              );
            })}
          </Tabs>
        </Box>
      </div>
    </>
  );
};

export default VerticalTabs;
