import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import instance from "../../instance";
import { useLayoutEffect } from "react";
import Cookies from "js-cookie";
import Visibility from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddBook from "../AddForm/AddBook";
import AddAuthor from "../AddForm/AddAuthor";
import localinstance from "../../localinstance";

export default function AuthorTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);

  const [fetchdata, setfetchdata] = useState([]);
  const [columns, setcolumns] = useState([]);
  const [id, setid] = useState("");

  useLayoutEffect(() => {
    fetch();
  }, []);

  // const deleteid = async (id) => {
  //   console.log(id);
  //   const res = await localinstance({
  //     url: `/book/delete/${id}`,
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `${Cookies.get("token")}`,
  //       // accesskey: `auth74961a98ba76d4e4`,
  //     },
  //   });
  //   console.log(res.data.message);
  //   await fetch();
  // };

  const fetch = async (id) => {
    const res = await localinstance({
      url: `book/get/all`,
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });

    console.log(res.data.message);
    console.log(res.data.message[0]);
    let columns = Object.keys(res.data.message[0]);
    console.log(columns);
    setcolumns(columns);
    setfetchdata(res.data.message);
    // fetch1(res.data.message.id);
    // setid(res.data.message.id);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - fetchdata.length) : 0;

  const deleteid = async (id) => {
    console.log(id);
    try {
      const res = await instance({
        url: `book/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `${Cookies.get("token")}`,
          // accesskey: `auth74961a98ba76d4e4`,
        },
      });
      console.log(res.data.message);

      //   await fetch();
    } catch (error) {
      console.log(error.response.data.message.field_name);
      if (
        error.response.data.message.field_name === "booksassign_fk_1 (index)"
      ) {
        alert(
          "The book cannot be deleted at this time as it is currently in use."
        );
      }
    }
    await fetch();
  };

  return (
    <div className=" flex flex-col gap-5 sm:flex-row sm:gap-5 ">
      <div className="flex w-full md:w-[70%]">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead className="!bg-slate-400 !w-full">
              <TableRow>
                {["BookName", "Grade", "Subject", "Series", "Delete"].map(
                  (header, i) => (
                    <TableCell className="!font-black text-lg !bg-slate-500">
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? fetchdata.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : fetchdata
              ).map((data, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" className="bg-slate-200">
                    {data.name}
                  </TableCell>
                  {/* <TableCell align="left" className="bg-slate-200">
                    {data.series}
                  </TableCell> */}
                  <TableCell align="left" className="bg-slate-200">
                    {data.gradeMaster.grade}
                  </TableCell>
                  <TableCell align="left" className="bg-slate-200">
                    {data.subjectMaster.subject}
                  </TableCell>
                  <TableCell align="left" className="bg-slate-200">
                    {data.seriesMaster.series}
                  </TableCell>
                  {/* <TableCell align="left" className="bg-slate-200">
                    {data.status === true ? <Visibility /> : <VisibilityOff />}
                  </TableCell> */}
                  <TableCell align="left" className="bg-slate-200">
                    <DeleteOutlineIcon
                      className="!text-[#B31312]"
                      onClick={() => {
                        deleteid(data.id);
                      }}
                    />
                  </TableCell>
                  {/* <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 41 * emptyRows }}>
                  <TableRow colSpan={3} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={fetchdata.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
      <div className="flex w-full md:w-[60%] p-4">
        <AddBook fetch={fetch} />
      </div>
    </div>
  );
}
