import React from "react";
import Lottie from "lottie-react";

const Loading = ({
  animationData,
  style = "p-1",
}) => {
  return (
    <div className={style}>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default Loading;
