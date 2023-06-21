import React, { useLayoutEffect, useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import localinstance from "../localinstance";
import Cookies from "js-cookie";
import BookCard from "../component/BookCard/BookCard";
import { useParams } from "react-router-dom";
import Loader from "../component/Loader/Loader";

const AllBooks = () => {
  const [fetchbook, setfetchbook] = useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useLayoutEffect(() => {
    fetch(id);
  }, []);

  const fetch = async (id) => {
    console.log(id);
    const res = await localinstance({
      url: `bookassign/get/user/unassignBooks/${Cookies.get("id")}`,
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    });
    console.log(res.data.message);
    setfetchbook(res.data.message);
    setLoading(false);
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className=" pt-[13vh]  py-3">
        {loading ? (
          <Loader />
        ) : (
          <div className="  flex justify-center flex-wrap gap-5 p-4 ">
            {fetchbook.map((data) => (
              <div className="mb-[5%]">
                <BookCard
                  type={"allBooks"}
                  bookcover={data.book_cover}
                  name={data.name}
                  src={"all_books"}
                  id={data.id}
                  subject={data.subjectMaster.subject}
                  grade={data.gradeMaster.grade}
                  series={data.seriesMaster.series}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
