import Header from "../../components/header";
import MainComponent from "../../components/mainComponent";
import Modal from "../../components/modal";
import Cookies from "js-cookie";
import { HiFolder, HiOutlineUpload, HiMenuAlt3, HiTrash } from "react-icons/hi";
import { BiRename } from "react-icons/bi";
import { useEffect, useState } from "react";
import cookie from "cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { getAuthorizationHeader } from "../../utils/getAuthorizationHeader";
import UploadModal from "./uploadModal";
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
      currentUser: currentUser,
    },
  };
};
const RenameModal = ({
  x,
  y,
  currentUser,
  folderSelected,
  isSuccessDelete,
  isRenameClicked,
}) => {
  const router = useRouter();
  const deleteFolder = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/folders/${folderSelected.id}`,
        {
          headers: { Authorization: `Bearer ${currentUser || ""}` },
        }
      );
      let route = router.asPath;
      router.replace(route);
      isSuccessDelete(true);
    } catch (error) {
      console.error(error);
    }
  };
  const renameFolder = async () => {
    isRenameClicked(true);
    isSuccessDelete(true);
  };
  return (
    <div
      className=" bg-indigo-500"
      style={{
        position: "fixed",
        top: y,
        left: x,
        minHeight: "30vh",
        minWidth: "10vw",
        borderRadius: 10,
      }}
    >
      <div className=" w-100 h-100 flex flex-col justify-center m-2 ">
        <button
          onClick={renameFolder}
          className="  text-white text-center flex justify-evenly border border-solid border-white rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1"
        >
          Rename
          <div className="mt-1">
            <BiRename />
          </div>
        </button>
        <button
          onClick={deleteFolder}
          className=" text-white text-center flex justify-evenly border border-solid border-white rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1"
        >
          Delete
          <div className="mt-1">
            <HiTrash />
          </div>
        </button>
      </div>
    </div>
  );
};
export default function Home({ allFolders, params, currentUser }) {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [toggleRename, setToggleRename] = useState(false);
  const [toggleUpload, setToggleUpdate] = useState(false);
  const [inputValue, setInputvalue] = useState("");
  const [folderSelected, setFolderSelected] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
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
  async function renameFunction() {
    let payload = {
      name: inputValue,
      id: folderSelected.id,
      parentId: allFolders?.id,
    };
    const axios = require("axios");
    let res = await axios
      .put(process.env.baseUrl + "/folders", payload, {
        headers: getAuthorizationHeader(),
      })
      .then((response) => {
        let route = router.asPath;
        router.replace(route);
        setToggleRename(false);
      })
      .catch((error) => console.log("error", error));
  }
  if (router.isFallback) return <h1>Loading ....</h1>;
  const onFolderClick = (e, item) => {
    if (e.type === "click") {
      let route = router.asPath + "/" + item.name;
      router.replace(route);
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      setMousePosition({ x: e.clientX, y: e.clientY });
      setFolderSelected(item);
      setInputvalue(item.className);
    }
  };
  useEffect(() => {
    setMousePosition({ x: null, y: null });
  }, []);
  const isSuccessDelete = () => {
    setMousePosition({ x: null, y: null });
  };
  return (
    <div className="bg-gray-300 m-4 " style={{ height: "100vh" }}>
      <Header />
      <div className="grid grid-cols-7">
        <div className="col-span-2  bg-indigo-500"></div>
        <div className=" justify-center items-center bg-indigo-500 container mx-auto col-span-5  grid grid-cols-6 py-3">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="p-1 lg:mx-5 lg:px-2 text-white text-center flex justify-evenly border border-solid border-white rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1"
          >
            <div className="mt-1">
              <HiFolder />
            </div>
            New Folder
          </button>

          <button
            onClick={() => setToggleUpdate((prev) => !prev)}
            className="p-1 lg:mx-5 lg:px-2 text-white text-center flex justify-evenly border border-solid border-white rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1"
          >
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
            <Modal
              toggle={toggleRename}
              doToggle={() => setToggleRename((prev) => !prev)}
              title={"Folder Name"}
            >
              <div>
                <input
                  placeholder={inputValue}
                  value={inputValue}
                  onChange={(e) => setInputvalue(e.target.value)}
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
                    onClick={() => renameFunction()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Modal>
            <Modal
              toggle={toggleUpload}
              doToggle={() => setToggleUpload((prev) => !prev)}
              title={"upload file"}
            >
              <UploadModal allFolders={allFolders} />
            </Modal>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <MainComponent allFolders={allFolders} onFolderClick={onFolderClick} />
      </div>
      <div>
        {/* other components */}
        {mousePosition.x !== null && mousePosition.y !== null && (
          <RenameModal
            x={mousePosition.x}
            y={mousePosition.y}
            currentUser={currentUser}
            folderSelected={folderSelected}
            isSuccessDelete={isSuccessDelete}
            isRenameClicked={() => {
              setToggleRename(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
