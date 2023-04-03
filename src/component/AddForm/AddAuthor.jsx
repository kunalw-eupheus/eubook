import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import BasicSelect from "../SearchDropdown/SearchDropdown";
import instance from "../../instance";
import localinstance from "../../localinstance";
import Cookies from "js-cookie";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const AddAuthor = ({ fetch }) => {
  const [author, setauthor] = useState("");
  const [open, setopen] = useState(false);
  const [fetchdata, setfetchdata] = useState([]);
  const [postdata, setpostdata] = useState([]);

  const handleaddsubject = async () => {
    setopen(true);

    await postData();
    await fetch();
    setauthor("");
  };

  const postData = async () => {
    let dataToPost = {
      author: author,
    };
    console.log(dataToPost);

    const res = await localinstance({
      url: `author/create`,
      method: "POST",
      data: dataToPost,
      headers: {
        Authorization: `${Cookies.get("token")}`,
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });
    console.log(res.data.status);
    console.log(res.data.message);
    setpostdata(res.data.message);
  };

  const handlesubject = () => {
    setopen(false);
    // fetch();
  };

  return (
    <div className="border-2 border-black rounded-md shadow-md shadow-slate-400 !bg-white">
      <form>
        <div className="flex  justify-center p-3 border-2 border-slate-500 rounded-md !bg-slate-400">
          <div className="p-1 text-black font-extrabold">Add BookAuthor</div>
        </div>
        <div className="flex gap-4">
          <div className="mx-3 my-3  items-center">Author</div>
          <TextField
            className="!p-3"
            size="small"
            onChange={(e) => setauthor(e.target.value)}
          />
        </div>

        <div className="flex justify-center p-3">
          <Button
            type="reset"
            variant="contained"
            className=""
            onClick={handleaddsubject}
          >
            Submit
          </Button>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            TransitionComponent={Transition}
          >
            <DialogTitle id="alert-dialog-title">"{postdata}"</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                New Author Added Successfully!!!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handlesubject}>
                Close <CloseIcon />
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </form>
    </div>
  );
};

export default AddAuthor;
