import React, { useEffect, useRef, useState } from "react";
import { FaLink } from "react-icons/fa6";
import User from "../../Services/User/User";
import { Loader } from "../Common/Loader";

export const UserProfile = () => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  let form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
  };

  console.log(userData);

  useEffect(() => {
    setLoading(true);
    User.currentUser()
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <div className="w-full h-48">
      <Loader />
    </div>
  ) : (
    <form id="login" onSubmit={handleSubmit} className="px-8 my-4 h-full overflow-y-auto hide-scroll">
      <div className="">
        <div className=" mx-auto ">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
            <div className="flex items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Profile
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className=" mx-auto xl:mx-0">
              <div className="rounded relative mt-8 h-48">
                <img
                  src={userData?.banner}
                  alt
                  className="w-full h-full object-cover rounded absolute shadow"
                />
                <div className="absolute bg-black opacity-20 top-0 right-0 bottom-0 left-0 rounded" />
                <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                  <label className="text-xs text-gray-100 flex gap-1 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-edit"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                    Change Cover Photo
                    <input type="file" name="" id="" className="hidden" />
                  </label>
                </div>
                <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center group">
                  <img
                    src={userData?.image}
                    alt
                    className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                  />
                  <div className="absolute bg-black group-hover:flex hidden opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                  <div className="cursor-pointer group-hover:flex flex-col justify-center items-center z-10 text-gray-100 hidden">
                    <label className="text-xs text-gray-100">
                      <span className="mx-auto flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                          <line x1={16} y1={5} x2={19} y2={8} />
                        </svg>
                      </span>
                      Edit Picture
                      <input type="file" name="" id="" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-16  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="username"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={userData?.username}
                      name="username"
                      required
                      className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-600 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      placeholder="@example"
                    />
                  </div>
                  <div className="mt-4 flex-1 flex flex-col w-full">
                    <label
                      htmlFor="about"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      Bio
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      required
                      // value={userData?.bio}
                      className="bg-transparent border flex-1 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-600 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      placeholder="Let the world know who you are"
                      defaultValue={""}
                    />
                    <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                      Character Limit: 200
                    </p>
                  </div>
                </div>
                {/* <div className="h-fit flex">
                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    class="inline-block  bg-[#7289da] px-3 py-3 rounded-l font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <span class="[&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                      </svg>
                    </span>
                  </button>
                  <input
                    type="text"
                    id="Email"
                    name="email"
                    required
                    className="pl-3 py-3 w-full text-sm border-y border-r border-gray-300 focus:outline-none placeholder-gray-500 rounded-y rounded-r bg-transparent text-gray-500 dark:text-gray-400"
                    placeholder="example@gmail.com"
                  />
                </div> */}
                <div className="col-span-2 grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="github"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      Github Link
                    </label>
                    <div className="h-fit flex">
                      <button
                        type="button"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        class="inline-block bg-[#333] px-3 py-3 rounded-l font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <span class="[&>svg]:h-5 [&>svg]:w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 496 512"
                          >
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                          </svg>
                        </span>
                      </button>
                      <input
                        value={userData?.social_links?.github}
                        type="text"
                        id="github"
                        name="github"
                        className="pl-3 py-3 w-full text-sm border-y border-r border-gray-300 focus:outline-none placeholder-gray-500 rounded-y rounded-r bg-transparent text-gray-500 dark:text-gray-400"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="facebook"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      Facebook Link
                    </label>
                    <div className="h-fit flex">
                      <button
                        type="button"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        class="inline-block  bg-[#1877f2] px-3 py-3 rounded-l font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <span class="[&>svg]:h-5 [&>svg]:w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                          </svg>
                        </span>
                      </button>
                      <input
                        value={userData?.social_links?.facebook}
                        type="text"
                        id="facebook"
                        name="facebook"
                        className="pl-3 py-3 w-full text-sm border-y border-r border-gray-300 focus:outline-none placeholder-gray-500 rounded-y rounded-r bg-transparent text-gray-500 dark:text-gray-400"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="instagram"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      Instagram
                    </label>
                    <div className="h-fit flex">
                      <button
                        type="button"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        class="inline-block bg-[#c13584] px-3 py-3 rounded-l font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <span class="[&>svg]:h-5 [&>svg]:w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </span>
                      </button>
                      <input
                        value={userData?.social_links?.instagram}
                        type="text"
                        id="instagram"
                        name="instagram"
                        className="pl-3 py-3 w-full text-sm border-y border-r border-gray-300 focus:outline-none placeholder-gray-500 rounded-y rounded-r bg-transparent text-gray-500 dark:text-gray-400"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="linkedIn"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      LinkedIn Link
                    </label>
                    <div className="h-fit flex">
                      <button
                        type="button"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        class="inline-block bg-[#0077b5] px-3 py-3 rounded-l font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <span class="[&>svg]:h-5 [&>svg]:w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                          >
                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                          </svg>
                        </span>
                      </button>
                      <input
                        value={userData?.social_links?.linkedIn}
                        type="text"
                        id="linkedIn"
                        name="linkedIn"
                        className="pl-3 py-3 w-full text-sm border-y border-r border-gray-300 focus:outline-none placeholder-gray-500 rounded-y rounded-r bg-transparent text-gray-500 dark:text-gray-400"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="youtube"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      Youtube
                    </label>
                    <div className="h-fit flex">
                      <button
                        type="button"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        class="inline-block bg-[#ff0000] px-3 py-3 rounded-l font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <span class="[&>svg]:h-5 [&>svg]:w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 576 512"
                          >
                            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                          </svg>
                        </span>
                      </button>
                      <input
                        value={userData?.social_links?.youtube}
                        type="text"
                        id="youtube"
                        name="youtube"
                        className="pl-3 py-3 w-full text-sm border-y border-r border-gray-300 focus:outline-none placeholder-gray-500 rounded-y rounded-r bg-transparent text-gray-500 dark:text-gray-400"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="twitter"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      Twitter Link
                    </label>
                    <div className="h-fit flex">
                      <button
                        type="button"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        class="inline-block bg-black px-3 py-3 rounded-l font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                      >
                        <span class="[&>svg]:h-5 [&>svg]:w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                          >
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                          </svg>
                        </span>
                      </button>
                      <input
                        value={userData?.social_links?.twitter}
                        type="text"
                        id="twitter"
                        name="twitter"
                        className="pl-3 py-3 w-full text-sm border-y border-r border-gray-300 focus:outline-none placeholder-gray-500 rounded-y rounded-r bg-transparent text-gray-500 dark:text-gray-400"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto  mt-4 rounded">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
            <div className="flex items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Personal Information
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto pt-4">
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="fullName"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Full Name
                </label>
                <input
                  value={userData?.fullName}
                  type="text"
                  id="FirstName"
                  name="firstName"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-blue-600 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Enter Full Name"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="Email"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Email
                </label>
                <div className="border border-gray-300 shadow-sm rounded flex">
                  <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r border-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </div>
                  <input
                    value={userData?.email}
                    disabled
                    type="text"
                    id="Email"
                    name="email"
                    required
                    className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400"
                    placeholder="example@gmail.com"
                  />
                </div>
                {/* <div className="flex justify-between items-center pt-1 text-green-400">
                                <p className="text-xs">Email submission success!</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path
                                        className="heroicon-ui"
                                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                          0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                                        stroke="currentColor"
                                        strokeWidth="0.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div> */}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="contactNumber"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Contact Number
                </label>

                <input
                  value={userData?.contactNumber}
                  type="number"
                  name="contactNumber"
                  required
                  id="contactNumber"
                  className="bg-transparent border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-600 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Enter Contact Number"
                />
                {/* <div className="flex justify-between items-center pt-1 text-red-400">
                                <p className="text-xs">Incorrect Zip Code</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={15} y1={9} x2={9} y2={15} />
                                    <line x1={9} y1={9} x2={15} y2={15} />
                                </svg>
                            </div> */}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="StreetAddress"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Street Address
                </label>
                <input
                  value={userData?.address?.streetAddress}
                  type="text"
                  id="StreetAddress"
                  name="streetAddress"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-blue-600 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Enter House No, Colony/Area Name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="City"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  City
                </label>
                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
                  <input
                    value={userData?.address?.city}
                    type="text"
                    id="City"
                    name="city"
                    required
                    className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-blue-600 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="Enter City"
                  />
                  {/* <div className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 15 12 9 18 15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div> */}
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="State/Province"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  State/Province
                </label>
                <input
                  value={userData?.address?.state}
                  type="text"
                  id="State/Province"
                  name="state"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-blue-600 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Enter State"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Country"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Country
                </label>
                <input
                  value={userData?.address?.country}
                  type="text"
                  id="Country"
                  name="country"
                  required
                  className="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-600 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Enter Country"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center pb-2">
                  <label
                    htmlFor="zipCode"
                    className="text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    ZIP/Postal Code
                  </label>
                  <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={16}
                      height={16}
                    >
                      <path
                        className="heroicon-ui"
                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  value={userData?.address?.zipCode}
                  type="number"
                  name="zipCode"
                  required
                  id="zipCode"
                  className="bg-transparent border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-600 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Enter Zipcode"
                />
                {/* <div className="flex justify-between items-center pt-1 text-red-400">
                                <p className="text-xs">Incorrect Zip Code</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={15} y1={9} x2={9} y2={15} />
                                    <line x1={9} y1={9} x2={15} y2={15} />
                                </svg>
                            </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700 w-11/12 xl:w-full">
                <div className="xl:w-full py-5 px-8">
                    <div className="flex items-center mx-auto">
                        <div className=" mx-auto">
                            <div className="mx-auto xl:w-full">
                                <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Alerts</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 pt-1">Get updates of any new activity or features. Turn on/off your preferences</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto pb-6">
                    <div className="flex items-center pb-4 border-b border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={3} y={5} width={18} height={14} rx={2} />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                        <p className="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">Via Email</p>
                    </div>
                    <div className="px-8">
                        <div className="flex justify-between items-center mb-8 mt-4">
                            <div className="w-9/12">
                                <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Comments</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when a post or comment is made</p>
                            </div>
                            <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                <input type="checkbox" name="email_comments" id="toggle1" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                <label htmlFor="toggle1" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="w-9/12">
                                <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Job Applications</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when a candidate applies to a job posting</p>
                            </div>
                            <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                <input type="checkbox" name="email_job_application" id="toggle2" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                <label htmlFor="toggle2" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="w-9/12">
                                <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Product Updates</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Get notifitied when there is a new product feature or upgrades</p>
                            </div>
                            <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                <input type="checkbox" name="email_product_update" id="toggle3" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                <label htmlFor="toggle3" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="pb-4 border-b border-gray-300 dark:border-gray-700 px-8">
                        <div className="flex items-center text-gray-800 dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                            </svg>
                            <p className="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">Push Notifications</p>
                        </div>
                    </div>
                    <div className="px-8">
                        <div className="flex justify-between items-center mb-8 mt-4">
                            <div className="w-9/12">
                                <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Comments</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when a post or comment is made</p>
                            </div>
                            <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                <input type="checkbox" name="notification_comment" id="toggle4" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                <label htmlFor="toggle4" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="w-9/12">
                                <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Job Applications</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when a candidate applies to a job posting</p>
                            </div>
                            <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                <input type="checkbox" name="notification_application" id="toggle5" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                <label htmlFor="toggle5" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="w-9/12">
                                <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Product Updates</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Get notifitied when there is a new product feature or upgrades</p>
                            </div>
                            <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                <input type="checkbox" name="notification_updates" id="toggle6" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                <label htmlFor="toggle6" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        <div className=" mx-auto w-11/12 xl:w-full">
          <div className="w-full py-4 sm:px-0 flex justify-end">
            <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">
              Cancel
            </button>
            <button
              className="bg-blue-600 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
