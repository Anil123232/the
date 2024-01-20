import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { MdNotifications, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdEmojiEvents } from "react-icons/md";
import { RiOrganizationChart } from "react-icons/ri";
import Search from "./Search";
import axios from "axios";
axios.defaults.withCredentials = true;

const LeftSide = () => {
  const navigate = useNavigate();
  const [searchBar, setSearchBar] = useState(false);

  const handleLogout = () => {
    // remove the token from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  };

  return (
    <>
      <div className="hidden md:w-[25%] md:flex flex-col gap-y-10 sticky top-10 h-max">
        {/* logo */}
        <Link to="/">
          <div className="w-full flex flex-col items-center justify-center cursor-pointer select-none">
            <span className="text-usergreen font-poppins font-bold text-xl md:text-2xl tracking-wide leading-relaxed">
              The Green
            </span>
            <span className="font-poppins text-black text-base">Area</span>
          </div>
        </Link>
        {/* icons  */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center gap-y-6 select-none">
            <Link to="/">
              <div className="flex gap-x-4 items-center justify-center cursor-pointer">
                <i>
                  <AiFillHome color="#44AE26" size={25} />
                </i>
                <span className="font-poppins">Home</span>
              </div>
            </Link>

            <div
              className="flex gap-x-4 items-center justify-center cursor-pointer"
              //   onClick={() => setSearchBar(true)}
            >
              <i>
                <BiSearch color="#44AE26" size={25} />
              </i>
              <span className="font-poppins">Search</span>
            </div>

            <Link to="/message">
              <div className="flex gap-x-4 items-center justify-center cursor-pointer">
                <i>
                  <MdEmojiEvents color="#44AE26" size={25} />
                </i>
                <span className="font-poppins">Events</span>
              </div>
            </Link>

            <Link to="/tips">
              <div className="flex gap-x-4 items-center justify-center cursor-pointer">
                <i>
                  <RiOrganizationChart color="#44AE26" size={25} />
                </i>
                <span className="font-poppins">Organizers</span>
              </div>
            </Link>

            <div
              className="flex gap-x-4 items-center justify-center cursor-pointer"
              onClick={handleLogout}
            >
              <i>
                <MdLogout color="#44AE26" size={25} />
              </i>
              <span className="font-poppins">Logout</span>
            </div>
          </div>
        </div>
      </div>

      {/* for search  */}
      {searchBar ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-2xl">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* <Search props={handleBoolValueChange} /> */}
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )}

      {/* {notificationBar ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-2xl">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <Notification
                props={handleBoolValueChangeNotification}
                likeCommentNotifications={likeCommentNotifications}
                followNotifications={followNotifications}
              />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        ""
      )} */}
    </>
  );
};

export default LeftSide;
