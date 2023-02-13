import Header from "../../components/header";
import MainComponent from "../../components/mainComponent";
import Modal from "../../components/modal";
import { HiFolder, HiOutlineUpload, HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export const getStaticProps = async ({ params }) => {
  let tempUrl = params.slug.join("/");
  await console.log("params", params);
  const res = await fetch(`http://localhost:8000/_/${tempUrl}`);
  let allFolders = await res.json();

  // Sending fetched data to the page component via props.
  return {
    props: {
      allFolders: allFolders,
      params: tempUrl,
    },
  };
};
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
export default function Home({ allFolders, params }) {
  console.log("Home", process.env.customKey);
  console.log("params", params);
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputvalue] = useState("");
  console.log("router", router);
  async function createNewFolder() {
    let payload = {
      name: inputValue,
      ownerId: "63d7e783ada1e272d11be457",
    };
    const axios = require("axios");
    let res = await axios
      .post(process.env.baseUrl + "/folders", payload)
      .then((response) => console.log("response", response))
      .catch((error) => console.log("error", error));
  }
  if (router.isFallback) return <h1>Loading ....</h1>;
  const onFolderClick = (item) => {
    debugger;
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
              btnText="Submit"
              btnClick={createNewFolder}
            >
              <div>
                <input
                  placeholder="typing"
                  onChange={(e) => {
                    setInputvalue(e.target.value);
                  }}
                ></input>
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
