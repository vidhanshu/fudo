import React from "react";
import { PuffLoader } from "react-spinners";

const LoadingComponent = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <PuffLoader size={100} color={"#123abc"} />
    </div>
  );
};

export default LoadingComponent;
