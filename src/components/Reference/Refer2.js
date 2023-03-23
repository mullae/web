import React from "react";
import Image from "assets/images/refer-2-content.webp";
import mImage from "assets/images/m-refer-2-content.webp";

export const Refer2 = () => {
  return (
    <>
      <div className="lg:hidden">
        <img alt="e" src={mImage} className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center mt-24 hidden lg:flex">
        <img alt="e" src={Image} className="w-full" />
      </div>
    </>
  );
};
