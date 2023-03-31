import React from "react";
import * as spinner from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[6rem]">
        <spinner.TailSpin />
      </div>
    </>
  );
};

export default Loader;
