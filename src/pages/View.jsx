import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import MaterialTabs from "../component/Tabs/MaterialTabs";
import VerticalTabs from "../component/Tabs/VerticalTabs";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AdminNavbar from "../component/Navbar/AdminNavbar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import Cookies from "js-cookie";
import localinstance from "../localinstance";

const View = () => {
  const [fetchbook, setfetchbook] = useState(null);
  // const [fetchbook1, setfetchbook1] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSem, setCurrentSem] = useState(null);
  const [currentBook, setCurrentBook] = useState(null);
  const [sl, setsl] = useState([]);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  let { id } = useParams();
  useLayoutEffect(() => {
    fetch();
  }, []);

  // const fetch1 = () => {
  //   let data1 = [1, 2, 3, 3, 5, 2, 1, 1, 5, 6, 6, 6, 6, 7];
  //   // let temp = Array.from(new Set(data1));
  //   // for (let obj of temp) {
  //   //   console.log({ obj: temp });
  //   // }
  //   let tempdata = [];

  //   // {
  //   //   data1.map((item) => {
  //   //     if (data1.indexOf(item) === -1) {
  //   //       console.log(item);
  //   //       // tempdata.push(item);
  //   //     }
  //   //   });
  //   // }
  //   {
  //     tempdata.map((item) => {
  //       if (!data1.includes(item)) {
  //         tempdata.push(item);
  //       }
  //     });
  //   }
  //   console.log(tempdata);
  // };

  const fetch = async () => {
    console.log(id);
    const res = await localinstance({
      url: `book/get/user/bookmateial/${id}`,
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    });
    console.log(res.data.message);
    let bookdata = res.data.message;
    console.log(res.data.slug[0]);
    setCurrentSem(res.data.slug[0]);
    if (bookdata.length === 0) {
      alert("bookmaterial is empty");
    }
    console.log("FETCHDATA", res.data);
    setfetchbook(res.data);
    // setfetchbook1(res.data.slug);
    setLoading(false);
    // returnData();
  };

  const changeSem = (value) => {
    console.log("semValue", value);
    // console.log("Index", index);
    setCurrentSem(value);
    console.log("change");
    returnData();
  };

  const returnData = () => {
    const data = fetchbook.message.filter((item) => item.sl === currentSem);
    console.log("book --");
    console.log(data);
    let bookData = [];
    // for (let i = 0; i < data.length; i++) {
    //   bookData.push({
    //     index: i,
    //     sl: data.sl,
    //     url: data.url,
    //     booktype: data.booktype,
    //     id: data.id,
    //   });
    // }
    data.map((item, index) => {
      bookData.push({
        index: index,
        sl: item.sl,
        url: item.url,
        booktype: item.booktype,
        id: item.id,
      });
    });
    console.log(bookData);
    return bookData;
  };

  console.log("tes");
  // console.log(fetchbook1);
  return (
    <div className="w-full h-screen">
      <div>
        <Navbar />
      </div>

      <div className=" w-full  h-screen  pt-[13vh]  py-3">
        <div className="p-2  text-[2.5rem] font-semibold">Books Material</div>
        <div className="border-stone-300  ">
          {isMatch ? (
            <>
              <div className="flex flex-col w-full ">
                <div className="">
                  {loading ? null : (
                    <VerticalTabs
                      datas={fetchbook.slug}
                      semdatas={fetchbook.message}
                      changeSem={changeSem}
                      dat={returnData()}
                    />
                  )}
                </div>

                <div className="w-[100%] ml-[0.5rem] ">
                  {loading ? null : (
                    <MaterialTabs datas={returnData()} sem={currentSem} />
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-row w-full ml-4 h-[100%]">
                <div className=" py-2 mt-[4rem] w-[10%] ">
                  {loading ? null : (
                    <VerticalTabs
                      datas={fetchbook.slug}
                      semdatas={fetchbook.index}
                      changeSem={changeSem}
                      dat={returnData()}
                    />
                  )}
                </div>

                {loading ? null : (
                  <MaterialTabs datas={returnData()} sem={currentSem} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default View;
