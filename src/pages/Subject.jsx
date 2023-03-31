import React from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import AdminNavbar from "../component/Navbar/AdminNavbar";
import { Button } from "@mui/material";
import DataTable from "./DataTable";
import { useNavigate } from "react-router-dom";
import AddSubject from "../component/AddForm/AddSubject";
import SubjectTable from "../component/DataTable/SubjectTable";
import Menu from "../component/Menu/Menu";

const Subject = () => {
  return (
    <>
      <div>
        <AdminNavbar />
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="p-3">
          <div>Admin</div>
          <div>
            <Breadcrumb />
          </div>
        </div>
        <div>
          <Menu />
        </div>
      </div>

      <div className="">
        <div className="p-6 mt-6">
          <SubjectTable />
        </div>
        {/* <div className="flex justify-end  items-center p-[5%] h-screen  w-[90%] sm:w-full ">
          <AddSubject />
        </div> */}
      </div>
    </>
  );
};
export default Subject;
