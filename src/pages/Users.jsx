import React from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import AdminNavbar from "../component/Navbar/AdminNavbar";
import UserTable from "../component/DataTable/UserTable";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import AddInfo from "../component/AddForm/AddInfo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Users = () => {
  const [open, setopen] = useState(false);
  const handlesubject = () => {
    setopen(false);
    // fetch();
  };
  const handleadduser = () => {
    setopen(true);
  };
  return (
    <>
      <div>
        <AdminNavbar />
      </div>

      <div className="flex justify-between mt-[10vh]">
        <div>
          <h1>Admin</h1>
          <div>
            <Breadcrumb />
          </div>
        </div>
        <div className="!p-[1rem]">
          <Button variant="contained" onClick={handleadduser}>
            Add User
          </Button>
          <Dialog
            PaperProps={{
              sx: {
                width: "80%",
                height: "100%",
                backgroundColor: "rgb(235,215,224)",
              },
            }}
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            TransitionComponent={Transition}
          >
            {/* <DialogTitle id="alert-dialog-title">"{postdata}"</DialogTitle> */}
            <DialogContent className="">
              {/* <DialogContentText id="alert-dialog-description">
                New Subject Added Successfully!!!
              </DialogContentText> */}
              <div className="w-[70%] mx-[5rem] mt-[1rem] shadow-md shadow-black">
                <AddInfo />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handlesubject}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      <div>
        <div className="p-6 mt-6">
          <UserTable />
        </div>
      </div>
    </>
  );
};
export default Users;
