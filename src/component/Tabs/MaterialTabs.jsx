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
  const [activesem, setActivesem] = useState(3);
  const [data, setData] = useState([]);

  console.log(props.datas);

  // console.log(props.datas[0].index);

  const alterData = () => {
    const sem = ["sem1", "sem2"];
    const finalData = [];
    const data = sem.map((semester) => {
      props.datas.map((item, index) => {
        if (item.sl === semester) {
          finalData.push({ ...item, index });
        }
      });
    });
    return finalData;
  };
  alterData();
  // if(props.datas.index===){

  // }
  // props.datas.map((data) => {
  //   if (data.index > 0) {
  //     setActive(data.index);
  //   }
  // });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // props.datas.map((data) => {
  //   console.log(data.sl);
  // });
  const handleClick = (data, index) => {
    console.log("hello", index);
    if (data.index < 2) {
      setActive(data.index);
    } else {
      setActivesem(data.index);
    }
    setValue(index);
    setData(data);
  };

  return (
    <>
      <div
        className="  flex-col mx-[1rem] my-[1rem] h-[67vh] p-[1rem] w-full  "
        // key={index}
      >
        {alterData().map((data, index) => (
          <Button
            className={`${
              active === data.index
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
