import React, { useEffect, useLayoutEffect, useState } from "react";
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
  console.log("DATA", props.datas);
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(0);
  const [len, setLen] = useState(props.datas.length);
  const [booktype, setbooktype] = useState("");
  const [data, setData] = useState(props.datas[0].url);

  useEffect(() => {
    setData(props.datas[0].url);
    // if (booktype === "WORKSHEETS") {
    //   setData(props.datas[1].url);
    // }
  }, [props.sem]);

  console.log("DATA", props.datas.length);
  console.log("SEM----");
  console.log("sem", props.sem);

  const handleClick = (url, index, data, booktype) => {
    console.log("data--");
    console.log("data", data);
    setbooktype(booktype);
    console.log(index);
    setActive(index);
    setData(url);
  };

  return (
    <>
      <div className="  flex-col mx-[1rem] my-[1rem] h-[67vh] p-[1rem] w-full">
        {props.datas.map((data, index) => (
          <span
            onClick={() =>
              handleClick(data.url, data.index, data, data.booktype)
            }
          >
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
          </span>
        ))}

        {/* {props.datas.length === 0 ? ( */}
        <div>
          <iframe
            src={data}
            width="80%"
            className="mt-[1.5rem] sm:mt-[2rem] h-[55vh] sm:h-[60vh]"
          />
        </div>
        {/* ) : (
          <div>
            <iframe src={data} width="80%" className=" mt-[2rem] h-[60vh]" />
          </div>
        )} */}
      </div>
    </>
  );
};

export default MaterialTabs;
