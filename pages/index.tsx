import Header from "../components/header";
import MainComponent from "../components/mainComponent";
import Modal from "../components/modal";
import { HiFolder, HiOutlineUpload, HiMenuAlt3 } from "react-icons/hi";
export default function Home() {
  return (
    <div className="bg-gray-300 m-4 " style={{ height: "100vh" }}>
      <Header />
      <div className="grid grid-cols-7">
        <div className="col-span-2  bg-indigo-500"></div>
        <div className="flex justify-center items-center bg-indigo-500 container mx-auto col-span-5  grid grid-cols-6 py-3">
          <button className="p-1 lg:mx-5 lg:px-2 text-white text-center flex justify-evenly border border-solid border-white rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1">
            <div className="mt-1">
              <HiFolder />
            </div>
            New Folder
          </button>
          <button className="p-1 lg:mx-5 lg:px-2 text-white text-center flex justify-evenly border border-solid border-white rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1">
            <div className="mt-1">
              <HiOutlineUpload />
            </div>
            Upload
          </button>
          <button className="p-1 lg:mx-5 lg:px-2 text-white text-center border flex justify-evenly border-solid border-white rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1">
            <div className="mt-1">
              <HiMenuAlt3 />
            </div>{" "}
            Sort
          </button>
          {/* <div className="col-span-4">
            <Modal />
          </div> */}
        </div>
      </div>
      <div className="container mx-auto">
        <MainComponent />
      </div>
    </div>
  );
}
