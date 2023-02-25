import React from "react";
import { FcFolder } from "react-icons/fc";
export default function MainComponent({ allFolders, onFolderClick }) {
  const { folders } = allFolders;
  const showFolders = () => {
    if (folders) {
      return folders.map((item, index) => {
        return (
          <div
            onClick={(e) => onFolderClick(e, item)}
            onContextMenu={(e) => onFolderClick(e, item)}
            key={item.id}
            className="flex flex-col w-20 justify-center justify-items-center cursor-pointer hover:text-blue-400 group"
          >
            <FcFolder size={70} />
            <p className="text-center break-words truncate ...">{item.name}</p>
            <span
              className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 
              text-sm text-gray-100 rounded-md absolute 
    -translate-x-1 translate-y-full opacity-0  "
            >
              {item.name}
            </span>
          </div>
        );
      });
    }
  };
  return (
    <div className=" bg-gray-100x flex flex-col justify-center sm:pb-12 ">
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-1xl sm:p-20">
        <div className="grid sm:grid-cols-4 gap-4">
          <div className="border-b sm:border-b-0 sm:border-r  p-8 relative flex flex-col ">
            <p className="p-2 hover:bg-indigo-600 rounded text-center  hover:text-white activeFolder ">
              Home
            </p>
            <p className="p-2 hover:bg-indigo-600 rounded text-center  hover:text-white">
              All files
            </p>
            <p className="p-2 hover:bg-indigo-600 rounded text-center  hover:text-white">
              Recent
            </p>
            <p className="p-2 hover:bg-indigo-600 rounded text-center  hover:text-white">
              Shared
            </p>
          </div>
          <div className="p-8 col-span-3">
            <div className="flex flex-row">{showFolders()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
