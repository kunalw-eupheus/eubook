import React from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import AdminNavbar from "../component/Navbar/AdminNavbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddSubject from "../component/AddForm/AddSubject";
import SubjectTable from "../component/DataTable/SubjectTable";
import AddSeries from "../component/AddForm/AddSeries";
import SeriesTable from "../component/DataTable/SeriesTable";
import { Add } from "@mui/icons-material";
import Menu from "../component/Menu/Menu";

const Series = () => {
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
          <SeriesTable />
        </div>
        {/* <div className="flex justify-end  items-center p-[5%] h-screen  w-[90%] sm:w-full ">
          <AddSubject />
        </div> */}
      </div>
    </>
  );
};
export default Series;
