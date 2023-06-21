import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import BookCard from "../component/BookCard/BookCard";
import { useLayoutEffect } from "react";
import localinstance from "../localinstance";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import Loader from "../component/Loader/Loader";

const Dashboard = () => {
  const [fetchbook, setfetchbook] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  useLayoutEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await localinstance({
      url: `bookassign/get/user/assignBooks/${Cookies.get("id")}`,
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    });
    console.log(res.data.message);
    let data = res.data.message;
    let temp = [];
    for (let obj of data) {
      console.log(obj.id);
      temp.push({
        book_cover: obj.book.book_cover,
        grade: obj.book.gradeMaster.grade,
        series: obj.book.seriesMaster.series,
        subject: obj.book.subjectMaster.subject,
        id: obj.book.id,
        name: obj.book.name,
      });
    }
    setfetchbook(temp);
    setLoading(false);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className=" pt-[13vh]  py-3 ">
        {loading ? (
          <Loader />
        ) : (
          <div className="  flex justify-center flex-wrap gap-[5%]  p-4  ">
            {fetchbook.map((data) => (
              <div className="mb-[5%] ">
                <BookCard
                  bookcover={data.book_cover}
                  name={data.name}
                  src={"user"}
                  id={data.id}
                  subject={data.subject}
                  grade={data.grade}
                  series={data.series}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
