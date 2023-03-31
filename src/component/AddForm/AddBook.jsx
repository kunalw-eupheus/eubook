import React from "react";
import localinstance from "../../localinstance";
import Cookies from "js-cookie";
import instance from "../../instance";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import BasicSelect from "../SearchDropdown/SearchDropdown";
import { TextField } from "@mui/material";
import { Fab, Tooltip } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const AddBook = () => {
  const [suppliers, setSuppliers] = useState(1);
  const [fetchdata, setfetchdata] = useState([]);
  const [author, setauthor] = useState("");
  const [fetchsubject, setfetchsubject] = useState([]);
  const [subject, setsubject] = useState("");
  const [fetchseries, setfetchseries] = useState([]);
  const [series, setseries] = useState("");
  const [fetchgrade, setfetchgrade] = useState([]);
  const [grade, setgrade] = useState("");
  const [fetchbooktype, setfetchbooktype] = useState([]);
  const [booktype, setbooktype] = useState("");
  const [fetchslug, setfetchslug] = useState([]);
  const [slug, setslug] = useState("");
  const [authorId, setauthorId] = useState("");
  const [seriesId, setseriesId] = useState("");
  const [gradeId, setgradeId] = useState("");
  const [sujectid, setsujectid] = useState("");
  const [bookname, setbookname] = useState("");
  const [book_url, setbook_url] = useState("");
  const [booktypeid, setbooktypeid] = useState("");
  const [bookmaterial, setbookmaterial] = useState([]);
  const [inputdata, setinputdata] = useState([]);
  const [stateid, setstateid] = useState("");
  const [fetchstatedata, setfetchstatedata] = useState([]);
  const [open, setopen] = useState(false);
  const [message, setmessage] = useState("");
  const [bookCover, setbookCover] = useState("");

  const handleOrderProcessingForm = (value, type, index) => {
    switch (type) {
      case "select_author":
        setauthor(value.author);
        setauthorId(value.id);

        break;

      case "select_subject":
        setsubject(value.subject);
        setsujectid(value.id);
        break;

      case "select_series":
        setseries(value.series);
        setseriesId(value.id);
        break;

      case "select_grade":
        setgrade(value.grade);
        setgradeId(value.id);
        break;

      case "select_booktype":
        // setbooktype(value.name);
        // setbooktypeid(value.id);

        handleField("booktype", value.id, index);
      default:
        break;
    }
  };

  useLayoutEffect(() => {
    fetch();
    statefetch();
    subjectfetch();
    seriesfetch();
    gradefetch();
    booktypefetch();
  }, []);

  const statefetch = async () => {
    const res = await instance({
      url: "location/state/stateswithcode/get",
      method: "GET",
      headers: {
        // Authorization: `${Cookies.get("token")}`,
        accesskey: `auth74961a98ba76d4e4`,
      },
    });

    console.log(res.data.message);
    setfetchstatedata(res.data.message);
    // fetch1(res.data.message.id);
  };

  const fetch = async () => {
    const res = await localinstance({
      url: "author/get/all",
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });

    console.log(res.data.message);
    const data = res.data.message;

    let temp = [];
    for (let obj of data) {
      temp.push({ author: obj.author, id: obj.id });
      // setauthorid(obj.id);
    }
    console.log(temp);
    setfetchdata(temp);
  };

  const subjectfetch = async () => {
    const res = await localinstance({
      url: "subject/get/all",
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });

    console.log(res.data.message);
    const data = res.data.message;

    let temp = [];
    for (let obj of data) {
      temp.push({ subject: obj.subject, id: obj.id });
    }
    console.log(temp);
    // console.log(temp);
    setfetchsubject(temp);
  };

  const seriesfetch = async () => {
    const res = await localinstance({
      url: "series/get/all",
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    });
    console.log(res.data.message);
    const data = res.data.message;
    let temp = [];
    for (let obj of data) {
      temp.push({ series: obj.series, id: obj.id });
    }
    console.log(temp);
    setfetchseries(temp);
  };

  const gradefetch = async () => {
    const res = await localinstance({
      url: "grade/get/all",
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    });
    console.log(res.data.message);
    const data = res.data.message;
    let temp = [];
    for (let obj of data) {
      temp.push({ grade: obj.grade, id: obj.id });
    }
    console.log(temp);
    setfetchgrade(temp);
  };
  const booktypefetch = async () => {
    const res = await localinstance({
      url: "booktype/get/active",
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    });
    console.log(res.data.message);
    setfetchbooktype(res.data.message);
  };

  const postData = async () => {
    for (let obj of bookmaterial) {
      delete obj.idx;
    }
    let dataToPost = {
      bookname: bookname,
      gradeId: gradeId,
      seriesId: seriesId,
      sujectid: sujectid,
      authorId: authorId,
      bookCover: bookCover,
      bookmaterial: bookmaterial,
    };
    console.log(dataToPost);

    const res = await localinstance({
      url: `book/create`,
      method: "POST",
      data: dataToPost,
      headers: {
        Authorization: `${Cookies.get("token")}`,
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });
    console.log(res.data);
    setmessage(res.data.message);
  };

  const handleForm = (value) => {
    let content = [];

    for (let i = 0; i < suppliers; i++) {
      content.push(
        <li className="flex items-center mb-5 gap-2">
          <span className="mt-4 text-black">{i + 1}.</span>

          {/* <BasicSelect /> */}
          <TextField
            variant="outlined"
            label="slug"
            name="slug"
            size="small"
            className="w-full"
            onChange={(e) => handleField("slug", e.target.value, i)}
          />
          <TextField
            variant="outlined"
            size="small"
            label="book_url"
            name="book_url"
            className="w-full"
            onChange={(e) => handleField("book_url", e.target.value, i)}
          />
          <BasicSelect
            handleOrderProcessingForm={handleOrderProcessingForm}
            data={fetchbooktype}
            index={i}
            Name={"select_booktype"}
            label={"booktype"}
          />
        </li>
      );
    }

    // console.log(content);

    return content;
  };

  const handleField = (field, value, index) => {
    console.log(value, index);
    console.log(field);
    let tempArr = [...bookmaterial];

    console.log("to");
    console.log(bookmaterial);

    if (tempArr.length < index + 1) {
      let obj = {};
      console.log(field);
      obj.idx = index;
      console.log(obj.idx);
      console.log(field);
      if (field === "slug") obj.slug = value;
      if (field === "book_url") obj.book_url = value;
      if (field === "booktype") {
        obj.booktype = value;
      }
      tempArr.push(obj);
    } else {
      for (let obj of tempArr) {
        if (obj.idx === index) {
          if (field === "slug") obj.slug = value;
          if (field === "book_url") obj.book_url = value;
          if (field === "booktype") obj.booktype = value;
        }
      }
    }
    setbookmaterial(tempArr);
  };

  console.log(bookmaterial);

  const handledialog = () => {
    setopen(false);
  };

  const handleCreateBook = async () => {
    setopen(true);
    await postData();
    clear();
  };

  const clear = () => {
    setbookname("");
    setbookCover("");
    setslug("");
    setbook_url("");
    setauthorId("");
  };
  return (
    <>
      <div className="flex sm:flex-col border-2 border-slate-800  w-full ">
        <form>
          <div className="mb-5 flex justify-center align-items-centre font-semibold text-lg">
            CREATE BOOK
          </div>
          <div className="flex gap-[2.7rem]  ml-[3rem]">
            <label className="font-medium ">Book Name</label>
            {/* <input type="text" className='border-2 border-slate-500 mb-4 w-[60%]'/><br></br> */}
            <TextField
              id="standard-basic"
              label=""
              value={bookname}
              variant="standard"
              className="w-[10rem] !mb-4"
              onChange={(e) => setbookname(e.target.value)}
            />
          </div>

          <div className="flex gap-[2.7rem] mb-4 ml-[3rem]">
            <label className="font-medium ">Book Author</label>
            <div className="w-[60%]">
              <BasicSelect
                handleOrderProcessingForm={handleOrderProcessingForm}
                className="!w-full "
                data={fetchdata}
                value={authorId}
                Name={"select_author"}
                label={"Book_author"}
              />
            </div>
          </div>
          <div className="flex gap-[5.5rem] mb-4 ml-[3rem]">
            <label className="font-medium ">Grade</label>
            <div className="w-[60%]">
              <BasicSelect
                handleOrderProcessingForm={handleOrderProcessingForm}
                className="!w-full "
                data={fetchgrade}
                Name={"select_grade"}
                label={"Grade"}
              />
            </div>
          </div>
          <div className="flex gap-[5rem] mb-4 ml-[3rem]">
            <label className="font-medium">Subject</label>
            <div className="w-[60%]">
              <BasicSelect
                handleOrderProcessingForm={handleOrderProcessingForm}
                className="!w-full "
                data={fetchsubject}
                Name={"select_subject"}
                label={"Subject"}
              />
            </div>
          </div>
          <div className="flex gap-[5.8rem] mb-4 ml-[3rem]">
            <label className="font-medium ">Series</label>
            <div className="w-[60%]">
              <BasicSelect
                handleOrderProcessingForm={handleOrderProcessingForm}
                className="!w-full "
                data={fetchseries}
                Name={"select_series"}
                label={"Series"}
              />
            </div>
          </div>
          <div className="flex gap-[2.7rem]  ml-[3rem]">
            <label className="font-medium ">Book Cover</label>
            {/* <input type="text" className='border-2 border-slate-500 mb-4 w-[60%]'/><br></br> */}
            <TextField
              id="standard-basic"
              label=""
              value={bookCover}
              variant="standard"
              className="w-[10rem] !mb-4"
              onChange={(e) => setbookCover(e.target.value)}
            />
          </div>

          <div className="flex">
            <div className=" ml-4 mt-4">
              <ol className="list-decimal">{handleForm()}</ol>
            </div>
            <div
              onClick={() => setSuppliers(suppliers + 1)}
              className="p-2  ml-3  mt-3 "
            >
              <Tooltip title="Add More Names">
                <Fab color={"red"} size="small" aria-label="add">
                  <Add />
                </Fab>
              </Tooltip>
            </div>
          </div>
          <div className="flex justify-center p-4">
            <Button variant="contained" onClick={handleCreateBook}>
              Submit
            </Button>
            <Dialog
              open={open}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              TransitionComponent={Transition}
            >
              <DialogTitle id="alert-dialog-title">"{message}"</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description"></DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handledialog}>
                  Close <CloseIcon />
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBook;
