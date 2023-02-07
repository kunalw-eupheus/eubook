import React from "react";
import Semester_Book_1_Sem_1 from "../../assets/Semester_Book_1_Sem_1.jpg";
import { Button } from "@mui/material";
import Face3Icon from "@mui/icons-material/Face3";
import MenuBookIcon from '@mui/icons-material/MenuBook';
const AdminCard = () => {
  return (
    <div className="flex  gap-[6rem]">
      <div className="flex   bg-white justify-between">
        <div className="p-8">
          <div className="flex justify-center items-center ">
            <div className="flex flex-col">
              <div className="ml-4">
                <Face3Icon />
              </div>
              <div>Students</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex   bg-white justify-between">
        <div className="p-8">
          <div className="flex justify-center items-center ">
            <div className="flex flex-col">
              <div className="ml-4">
                <MenuBookIcon />
              </div>
              <div>All Books</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex   bg-white justify-between">
        <div className="p-8">
          <div className="flex justify-center items-center ">
            <div className="flex flex-col">
              <div className="ml-4">
                <MenuBookIcon />
              </div>
              <div>All Books</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex   bg-white justify-between">
        <div className="p-8">
          <div className="flex justify-center items-center ">
            <div className="flex flex-col">
              <div className="ml-4">
                <MenuBookIcon />
              </div>
              <div>All Books</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
