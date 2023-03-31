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
import instance from "../instance";
import { useLayoutEffect } from "react";
import { Button } from "@mui/material";

export default function BasicTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);

  const [fetchdata, setfetchdata] = useState([]);
  const [columns, setcolumns] = useState([]);

  useLayoutEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await instance({
      url: "location/state/stateswithcode/get",
      method: "GET",
      headers: {
        // Authorization: `${Cookies.get("token")}`,
        accesskey: `auth74961a98ba76d4e4`,
      },
    });

    console.log(res.data.message);
    console.log(res.data.message[0]);
    let columns = Object.keys(res.data.message[0]);
    console.log(columns);
    setcolumns(columns);
    setfetchdata(res.data.message);
    // fetch1(res.data.message.id);
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

  return (
    <>
      <TableContainer component={Paper} sx={{ minWidth: 1000 }}>
        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
          <TableHead className="!bg-slate-400 !w-full">
            <TableRow>
              {columns.map((header, i) => (
                <TableCell className="!font-black text-lg !bg-slate-500">
                  {header}
                </TableCell>
              ))}
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
                  {data.id}
                </TableCell>
                <TableCell align="left" className="bg-slate-200">
                  {data.state}
                </TableCell>
                <TableCell align="left" className="bg-slate-200">
                  {data.code}
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
          sx={{ minWidth: 900 }}
          component="div"
          count={fetchdata.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}
