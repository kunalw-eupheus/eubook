import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const handleaddsubject = () => {
    setActive(2);
    navigate("/admin/all_books/add_subject");
  };

  const handlebook = () => {
    setActive(5);
    navigate("/admin/all_books/create_book");
  };
  const handleseries = () => {
    setActive(4);
    navigate("/admin/all_books/add_series");
  };
  const handleBookAuthor = () => {
    setActive(3);
    navigate("/admin/all_books/add_bookAuthor");
  };

  const handleaddgrade = () => {
    setActive(0);
    navigate("/admin/all_books/add_grade");
  };
  const handleaddBookType = () => {
    setActive(1);
    navigate("/admin/all_books/add_bookType");
  };
  return (
    <>
      <div className="flex p-2  mt-[10vh] ">
        {/* <div>
          <Button variant="text">List View</Button>
        </div> */}
        <div className="flex gap-2 p-3">
          <Button
            key={0}
            variant="contained"
            onClick={handleaddgrade}
            className={`${
              active === 0
                ? "!bg-pink-400 !shadow-red-500 !shadow-md "
                : "!bg-blue-600 !text-white"
            } !p-[0.8rem] !mx-2`}
          >
            Add Grade
          </Button>
          <Button
            key={"1"}
            variant="contained"
            onClick={handleaddBookType}
            className={`${
              active === 1
                ? "!bg-pink-400 !shadow-red-500 !shadow-md "
                : "!bg-blue-600 !text-white"
            } !p-[0.8rem] !mx-2`}
          >
            Add BookType
          </Button>
          <Button
            key={"2"}
            variant="contained"
            onClick={handleaddsubject}
            className={`${
              active === 2
                ? "!bg-pink-400 !shadow-red-500 !shadow-md "
                : "!bg-blue-600 !text-white"
            } !p-[0.8rem] !mx-2`}
          >
            Add Subject
          </Button>
          <Button
            key={"3"}
            variant="contained"
            onClick={handleBookAuthor}
            className={`${
              active === 3
                ? "!bg-pink-400 !shadow-red-500 !shadow-md "
                : "!bg-blue-600 !text-white"
            } !p-[0.8rem] !mx-2`}
          >
            Add Book Author
          </Button>
          <Button
            key={"4"}
            variant="contained"
            onClick={handleseries}
            className={`${
              active === 4
                ? "!bg-pink-400 !shadow-red-500 !shadow-md "
                : "!bg-blue-600 !text-white"
            } !p-[0.8rem] !mx-2`}
          >
            Add Series
          </Button>
          <Button
            key={"5"}
            variant="contained"
            onClick={handlebook}
            className={`${
              active === 5
                ? "!bg-pink-400 !shadow-red-500 !shadow-md "
                : "!bg-blue-600 !text-white"
            } !p-[0.8rem] !mx-2`}
          >
            Add Books
          </Button>
        </div>
      </div>
    </>
  );
};

export default Menu;
