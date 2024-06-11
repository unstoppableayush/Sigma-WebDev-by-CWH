import React, { useRef } from "react";

const Manager = () => {
  const ref = useRef();
  const showPassword = (params) => {
    alert("Show th password");
    if (ref.current.src.includes("hide.png")) {
      ref.current.src = "eye.png";
    } else {
      ref.current.src = "hide.png";
    }
  };
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-green-50">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full  opacity-50 blur-[80px]"></div>
      <div className="mycontainer mt-10 ">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-center text-lg">
          Your Own Password Manager
        </p>

        <div className=" flex flex-col p-4 gap-8 text-black items-center">
          <input
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 w-full text-black py-1 p-4"
            type="text"
          />
          <div className="flex w-full gap-8 ">
            <input
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full text-black py-1 p-4"
              type="text"
            />
            <div className="relative">
              <input
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full text-black py-1 p-4"
                type="text"
              />
              <span
                className="absolute right-[3px] top-[3px] pe-2 cursor-pointer"
                onClick={showPassword}
              >
                <img ref={ref} src="eye.png" className="w-6" alt="" />
              </span>
            </div>
          </div>
          <button className="flex justify-center items-center bg-green-500 hover:bg-green-600 rounded-full px-8 py-2 w-fit gap-2 hover:border border-green-900 ">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manager;
