import React from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import AdminNavbar from "../component/Navbar/AdminNavbar";
import { useState } from "react";
import AuthorTable from "../component/DataTable/AuthorTable";
import Menu from "../component/Menu/Menu";
import { useLayoutEffect } from "react";
import Cookies from "js-cookie";
import localinstance from "../localinstance";

const Author = () => {
  const [fetchdata, setfetchdata] = useState([]);

  useLayoutEffect(() => {
    fetch();
  }, []);

  const fetch = async (id) => {
    const res = await localinstance({
      url: `author/get/all`,
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });
    setfetchdata(res.data.message);
  };

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
          <AuthorTable />
        </div>
      </div>
    </>
  );
};
export default Author;
