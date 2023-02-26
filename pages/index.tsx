import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Medbot from "./medbot";

const Home = () => {
  const [meds, setMeds] = useState([]);

  function handleClick() {
    console.log("hi");
  }
  return (
    <div className="App flex min-h-screen flex-col items-center min-w-200">
      {/* <div className=" bg-black">
        <p className="random-text">test</p>
        <button onClick={handleClick}>click me</button>
      </div>
      <div>{meds}</div> */}
      <div className="flex h-full w-full max-w-[1728px] flex-1 flex-col px-6 lg:flex-row ">
        <div className="parent ">
          <div className="div">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white p-5">
              Welcome Back, Name!
            </h1>
          </div>
          <div className="div2">
            <div className="flex  w-full flex-col items-center justify-center gap-y-2">
              <div className="w-[300px] rounded-xl border border-gray-200 bg-white py-4 px-2 shadow-md shadow-gray-100">
                <div className="flex items-center justify-between px-2 text-base font-medium text-gray-700">
                  <div>Medication</div>
                </div>
                <div className="mt-4">
                  <div className="flex max-h-[400px] w-full flex-col overflow-y-scroll">
                    <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                      <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                        <span className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900">
                          💊
                        </span>
                      </div>
                      <div className="flex flex-col items-start justify-between font-light text-gray-600">
                        <p className="text-[15px]">Paracetamol</p>
                        <span className="text-xs font-light text-gray-400">
                          x1 pill
                        </span>
                      </div>
                    </button>
                    <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                      <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                        <span className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900">
                          💊
                        </span>
                      </div>
                      <div className="flex flex-col items-start justify-between font-light text-gray-600">
                        <p className="text-[15px]">Ibuprofen</p>
                        <span className="text-xs font-light text-gray-400">
                          x2 pills
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div3">
          <Medbot />
        </div>
      </div>
    </div>
  );
};

export default Home;
