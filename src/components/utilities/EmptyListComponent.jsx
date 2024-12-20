import React from "react";
import Lottie from "lottie-react";
// import emptyList from "../assets/empty.svg";
import emptyList from "../../lottie/lottieEmpty.json";
const EmptyListComponent = () => {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-slate-900 even:bg-slate-50 even:dark:bg-slate-800 border-b dark:border-slate-700 ">
        <td colSpan={6} className="px-6 py-6">
          <div className="flex flex-col gap-3 justify-center items-center">
            {/* <img src={emptyList} alt={"emptyList"} className="w-52" /> */}
            <Lottie animationData={emptyList} loop={true} className="w-52" />
            <p className="text-blue-500">There is no lists.</p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default EmptyListComponent;
