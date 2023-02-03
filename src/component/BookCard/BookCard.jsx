import React from "react";
import { Button } from "@mui/material";
import Semester_Book_1_Sem_1 from "../../assets/Semester_Book_1_Sem_1.jpg";
import { Navigate, useNavigate } from "react-router-dom";

const BookCard = () => {
const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/view');
  }
  return (
    <div className="">
      <div className="mt-2 shadow-sm shadow-white rounded-md">
        <img src={Semester_Book_1_Sem_1} className="max-h-[420px]" />
      </div>
      <div className="flex   bg-white justify-between">
        <div className="p-2">
          <div>Semester</div>
          <div>Subject</div>
          <div>Class</div>
        </div>
        <div className=" p-4">
          <Button variant="contained" className="!bg-purple-500 " onClick={handleClick}>
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
