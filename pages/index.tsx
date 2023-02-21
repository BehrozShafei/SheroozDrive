import { HiFolder, HiSearch, HiCog, HiUser } from "react-icons/hi";
import Header from "../components/header";
import React, { CSSProperties } from "react";
import styles from "../styles.module.css";
export interface MyCustomCSS extends CSSProperties {
  "--i": number;
}
export default function LandingPage() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="py-10 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Welcome to
              <strong className="waviy mx-2 text-lg text-indigo-500">
                <span style={{ "--i": 1 } as MyCustomCSS}> S</span>
                <span style={{ "--i": 2 } as MyCustomCSS}> e</span>
                <span style={{ "--i": 3 } as MyCustomCSS}> h</span>
                <span style={{ "--i": 4 } as MyCustomCSS}> r</span>
                <span style={{ "--i": 5 } as MyCustomCSS}> o</span>
                <span style={{ "--i": 6 } as MyCustomCSS}> o</span>
                <span style={{ "--i": 7 } as MyCustomCSS}>z</span>
              </strong>
              File Manager
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Keep all your files organized in one place with our powerful file
              manager app.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-base font-medium"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="mt-20">
            <div className="sm:flex items-center justify-between">
              <div className="w-full sm:w-1/2">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Keep Your Files Organized
                </h3>
                <p className="mt-2 text-gray-500">
                  With our intuitive file manager interface, it's easy to keep
                  your files organized and accessible. Create folders, upload
                  files, and manage your entire file system with ease.
                </p>
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-4 flex-shrink-0">
                <div className="mt-1">
                  <HiFolder />
                </div>
              </div>
            </div>
            <div className="sm:flex items-center justify-between mt-10">
              <div className="w-full sm:w-1/2">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Find What You Need Quickly
                </h3>
                <p className="mt-2 text-gray-500">
                  Use our powerful search tool to find the files you need,
                  quickly and easily.
                </p>
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-4 flex-shrink-0">
                <div className="mt-1">
                  <HiSearch />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="sm:flex items-center justify-between">
              <div className="w-full sm:w-1/2">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Customize Your Experience
                </h3>
                <p className="mt-2 text-gray-500">
                  Personalize your file manager experience with our customizable
                  settings. Choose your preferred layout, file view, and more.
                </p>
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-4 flex-shrink-0">
                <div className="mt-1">
                  <HiCog />
                </div>
              </div>
            </div>
            <div className="sm:flex items-center justify-between mt-10">
              <div className="w-full sm:w-1/2">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Share and Collaborate
                </h3>
                <p className="mt-2 text-gray-500">
                  Share your files and collaborate with others using our
                  built-in sharing and collaboration features. Keep your team on
                  the same page and get work done faster.
                </p>
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-4 flex-shrink-0">
                <div className="mt-1">
                  <HiUser />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About Us
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact Us
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Privacy Policy
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Terms of Service
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
