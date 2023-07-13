import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BookCard = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(props.id);
    if (props.src === "user") {
      navigate(`/user/${props.id}`);
    } else {
      navigate(`/all_books/view/${props.id}`);
    }
  };

  const handleallBook = () => {
    // alert("Please buy the book to access book content");
    // swal.fire({
    //   title: "Example",
    //   text: "Swal injected",
    //   icon: "success",
    // });
    Swal.fire({
      // title: "Example",
      text: "Please buy the book to access book content!!!",
      icon: "warning",
    });
  };

  return (
    <div className="rounded-lg shadow-xl shadow-[#b6b1b195] hover:cursor-pointer group   ">
      <div
        className="mt-2 relative w-[100%] "
        onClick={props.type === "allBooks" ? handleallBook : handleClick}
      >
        <div>
          <img
            src={props.bookcover}
            className="h-[450px] rounded-lg brightness-140 "
            alt="sem_book"
          />
        </div>
        <div className="bg-[#ec0bec] shadow-xl shadow-[#ec0bec69]  absolute bottom-3 rounded-md  w-[94%] px-5 py-4 mx-[3%] z-10 hover:bg-[#ff3c3c]">
          <h1 className="  text-[white] font-semibold text-[1.5rem] ">
            {props.name}
          </h1>
          <div className="flex gap-1 ">
            <div className="text-white ">{props.subject}</div>
            <div className="text-[white]  ">{props.series}-</div>

            <div className="text-white ">(Grade- {props.grade})</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
