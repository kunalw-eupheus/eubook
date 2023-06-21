import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
// import { Button } from "@mui/material";
import Button from "@mui/material/Button";

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

const MaterialTabs = (props) => {
  console.log(props.datas);
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(0);
  const [data, setData] = useState(props.datas[0].url);

  const handleClick = (url, index) => {
    setActive(index);
    setData(url);
  };

  return (
    <>
      <div className="  flex-col mx-[1rem] my-[1rem] h-[67vh] p-[1rem] w-full">
        {props.datas.map((data, index) => (
          <div onClick={() => handleClick(data.url, data.index)}>
            <Button
              className={`${
                active === data.index
                  ? "!bg-pink-400 !shadow-red-500 !shadow-md "
                  : "!bg-inherit !text-blue-600"
              } !p-[0.8rem] !mx-2`}
              variant="contained"
            >
              {data.booktype}
            </Button>
          </div>
        ))}

        <div>
          <iframe src={data} width="80%" className=" mt-[2rem] h-[60vh]" />
        </div>
      </div>
    </>
  );
};

export default MaterialTabs;
