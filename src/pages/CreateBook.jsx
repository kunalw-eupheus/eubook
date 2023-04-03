import React from "react";
import AdminNavbar from "../component/Navbar/AdminNavbar";
import Menu from "../component/Menu/Menu";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import BookTable from "../component/DataTable/BookTable";

const CreateBook = () => {
  return (
    <>
      <div>
        <AdminNavbar />
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between ">
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
          <BookTable />
        </div>
      </div>
    </>
  );
};

export default CreateBook;
