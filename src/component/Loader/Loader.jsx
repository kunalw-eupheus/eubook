// import React from "react";
// import * as spinner from "react-loader-spinner";

// const Loader = () => {
//   return (
//     <>
//       <div className="flex justify-center items-center mt-[6rem]">
//         <spinner.TailSpin />
//       </div>
//     </>
//   );
// };

// export default Loader;
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader({ status }) {
  return (
    <>
      {/* {status ? (
        <Box className="flex justify-center items-center mt-[6rem] text-black">
          <CircularProgress />
        </Box>
      ) : (
        <Box className="flex text-black">
          <CircularProgress />
        </Box>
      )} */}
      <Box className="flex justify-center items-center mt-[6rem] ">
        <CircularProgress />
      </Box>
    </>
  );
}
