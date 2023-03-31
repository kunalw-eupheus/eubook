import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const handleaddsubject = () => {
    navigate("/admin/all_books/add_subject");
  };

  const handlebook = () => {
    navigate("/admin/all_books/create_book");
  };
  const handleseries = () => {
    navigate("/admin/all_books/add_series");
  };
  const handleBookAuthor = () => {
    navigate("/admin/all_books/add_bookAuthor");
  };
  return (
    <>
      <div className="flex p-2  mt-[10vh] ">
        {/* <div>
          <Button variant="text">List View</Button>
        </div> */}
        <div className="flex gap-2 p-3">
          <Button variant="contained" onClick={handleaddsubject}>
            Add Subject
          </Button>
          <Button variant="contained" onClick={handleBookAuthor}>
            Add Book Author
          </Button>
          <Button variant="contained" onClick={handleseries}>
            Add Series
          </Button>
          <Button variant="contained" onClick={handlebook}>
            Add Books
          </Button>
        </div>
      </div>
    </>
  );
};

export default Menu;
