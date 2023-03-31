import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

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
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(0);
  const [activesem, setActivesem] = useState(0);
  const [data, setData] = useState([]);

  console.log(props.datas);

  // console.log(props.datas[0].index);

  // if(props.datas.index===){

  // }
  // props.datas.map((data) => {
  //   console.log("hiiii", data.index);
  //   if (data.index === 3) {
  //     setActivesem(data.index);
  //   }
  // });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // props.datas.map((data) => {
  //   console.log(data.sl);
  // });
  const handleClick = (data, index) => {
    console.log(data);
    console.log("hello", index);
    setActive(data.index);
    // if(data.index)
    setActivesem(data.index);
    console.log("value", index);
    setValue(index);
    setData(data);
    console.log("index", data.index);
  };

  return (
    <>
      <div
        className="  flex-col mx-[1rem] my-[1rem] h-[67vh] p-[1rem] w-full  "
        // key={index}
      >
        {props.datas.map((data, index) => (
          <Button
            className={`${
              active || activesem === data.index
                ? "!bg-pink-400 !shadow-red-500 !shadow-md "
                : "!bg-inherit !text-blue-600"
            } !p-[0.8rem] !mx-2`}
            variant="contained"
            onClick={() => handleClick(data, data.index)}
          >
            {data.booktype}
            {console.log(data.index)}
          </Button>
        ))}

        <div>
          <iframe
            src={
              // value === data.length > 0
              //   ? data.index
              //     ? data.url
              //     : "https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+2/book+1/evs/ebook/index.html"
              //   : null
              value === data.index
                ? data.url
                : "https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+2/book+1/evs/ebook/index.html"
            }
            width="80%"
            className=" mt-[2rem] h-[60vh]"
          />
        </div>
      </div>
    </>
  );
};

export default MaterialTabs;
