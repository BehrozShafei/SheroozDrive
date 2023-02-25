import axios from "axios";
import React, { useState } from "react";
import Modal from "./modal";
import { useRouter } from "next/router";
import { useLogin } from "../hooks/auth/useLogin";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useState(null);
  const { login } = useLogin();
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter information");
    } else {
      login(username, password)
        .then((res) => router.push("/_/root"))
        .catch((e) => alert(e));
    }
  };
  return (
    <nav className="bg-white  border-gray-200 px-2 sm:px-4 py-2.5 rounded  ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex">
          <span className="self-center text-lg font-semibold whitespace-nowrap text-indigo-600 ">
            Sherooz Drive
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => setToggle((prev) => !prev)}
                className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setToggle1((prev) => !prev)}
                className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
        <Modal
          toggle={toggle}
          doToggle={() => setToggle((prev) => !prev)}
          title={""}
          btnText="Submit"
          btnClick={() => null}
        >
          <section className="h-50">
            <div className="px-6 h-full text-gray-800">
              <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt="Sample image"
                  />
                </div>
                <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                  <form>
                    <div className="flex flex-row items-center justify-center lg:justify-start">
                      <p className="text-lg mb-0 mr-4">Sign in with</p>
                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          className="w-4 h-4"
                        >
                          <path
                            fill="currentColor"
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          />
                        </svg>
                      </button>

                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                      </button>

                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-4 h-4"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                      <p className="text-center font-semibold mx-4 mb-0">Or</p>
                    </div>

                    <div className="mb-6">
                      <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                      />
                    </div>

                    <div className="mb-6">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput21"
                        placeholder="Password"
                      />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          id="exampleCheck2"
                        />
                        <label className="form-check-label inline-block text-gray-800">
                          Remember me
                        </label>
                      </div>
                      <a href="#!" className="text-gray-800">
                        Forgot password?
                      </a>
                    </div>

                    <div className="text-center lg:text-left">
                      <button
                        type="submit"
                        onClick={handleLogin}
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Login
                      </button>
                      <p className="text-sm font-semibold mt-2 pt-1 mb-4">
                        Don't have an account?
                        <a
                          href="#!"
                          className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                        >
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Modal>
        <Modal
          toggle={toggle1}
          doToggle={() => setToggle1((prev) => !prev)}
          title={""}
          btnText="register"
          btnClick={() => null}
        >
          <section className="h-50">
            <div className="px-6 h-full text-gray-800">
              <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt="Sample image"
                  />
                </div>
                <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-20 h-20 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center">Join us</h3>
                  <form action="">
                    <div className="mt-4">
                      <div>
                        <label className="block">Name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                      <div className="mt-4">
                        <label className="block">Email</label>
                        <input
                          type="text"
                          placeholder="Email"
                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                      <div className="mt-4">
                        <label className="block">Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                      <div className="mt-4">
                        <label className="block">Confirm Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                      <span className="text-xs text-red-400">
                        Password must be same!
                      </span>
                      <div className="flex">
                        <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                          Create Account
                        </button>
                      </div>
                      <div className="mt-6 text-grey-dark">
                        Already have an account?
                        <a className="text-blue-600 hover:underline" href="#">
                          Log in
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Modal>
      </div>
    </nav>
  );
}
