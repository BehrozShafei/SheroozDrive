import Header from "../../components/header";
import MainComponent from "../../components/mainComponent";
import Modal from "../../components/modal";
import Cookies from "js-cookie";
import { HiFolder, HiOutlineUpload, HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import cookie from "cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { getAuthorizationHeader } from "../../utils/getAuthorizationHeader";
export const getServerSideProps = async ({ params, req }) => {
  console.log("params1", params);
  const currentUser = cookie.parse(req.headers.cookie || "").currentUser;
  let allFolders = [];
  let tempUrl = params.slug.join("/");
  try {
    const res = await axios.get(`http://localhost:8000/_/${tempUrl}`, {
      headers: { Authorization: `Bearer ${currentUser || ""}` },
    });
    allFolders = res.data;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      allFolders: allFolders,
      params: tempUrl,
    },
  };
};

export default function Home({ allFolders, params }) {
  debugger;
  console.log("getAuthorizationHeader()", getAuthorizationHeader());
  console.log("Home", process.env.customKey);
  console.log("params", params);
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputvalue] = useState("");
  console.log("router", router);
  async function createNewFolder() {
    let payload = {
      name: inputValue,
      parentId: allFolders?.id,
    };
    const axios = require("axios");
    let res = await axios
      .post(process.env.baseUrl + "/folders", payload, {
        headers: getAuthorizationHeader(),
      })
      .then((response) => console.log("response", response))
      .catch((error) => console.log("error", error));
  }
  if (router.isFallback) return <h1>Loading ....</h1>;
  const onFolderClick = (item) => {
    let route = router.asPath + "/" + item.name;
    router.replace(route);
  };

  return (
    <div className="bg-gray-300 m-4 " style={{ height: "100vh" }}>
      <Header />
      <div className="grid grid-cols-7">
        <div className="col-span-2  bg-indigo-500"></div>
        <div className="flex justify-center items-center bg-indigo-500 container mx-auto col-span-5  grid grid-cols-6 py-3">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="p-1 lg:mx-5 lg:px-2 text-white text-center flex justify-evenly border border-solid border-white rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1"
          >
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
          <div className="col-span-4">
            <Modal
              toggle={toggle}
              doToggle={() => setToggle((prev) => !prev)}
              title={"Folder Name"}
            >
              <div>
                <input
                  placeholder="typing"
                  onChange={(e) => {
                    setInputvalue(e.target.value);
                  }}
                ></input>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => doToggle(true)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => createNewFolder()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <MainComponent allFolders={allFolders} onFolderClick={onFolderClick} />
      </div>
    </div>
  );
}
