import React from "react";
import Semester_Book_1_Sem_1 from "../../assets/Semester_Book_1_Sem_1.jpg";
import { Button } from "@mui/material";
import Face3Icon from "@mui/icons-material/Face3";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Person4Icon from "@mui/icons-material/Person4";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const AdminCard = () => {
  return (
    <div className="flex flex-col gap-[6rem] sm:flex-row  ">
      {[
        { icon: <Face3Icon />, name: "User" },
        { icon: <MenuBookIcon />, name: "Book" },
        { icon: <Person4Icon />, name: "Admin" },
        { icon: <LibraryBooksIcon />, name: "All Books" },
      ].map((data) => (
        <div className="flex   bg-white justify-between shadow-lg shadow-slate-500 rounded-xl">
          <div className="p-[4rem]">
            <div className="flex justify-center items-center ">
              <div className="flex flex-col">
                <div className="flex justify-center">{data.icon}</div>
                <div>{data.name}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminCard;
