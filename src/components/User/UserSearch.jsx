import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import User from "../../Services/User/User";
import { UserCard } from "../Common/UserCard";
import { CreatePostModal } from "../Modals/CreatePostModal";
import { TfiWrite } from "react-icons/tfi";

export const UserSearch = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    User.getUsers()
      .then((res) => {
        setUsersData(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    User.searchUsers({ query: e.target.value })
      .then((res) => {
        setUsersData(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className=" z-0 border-b border-grey pb-4">
     
      <div className="relative z-1 max-w-[480px] w-full flex-shrink">
        <input
          type="text"
          name="search"
          className="w-full h-12 shadow p-4 rounded-full outline-btn-color"
          placeholder="search user..."
          onChange={handleSearch}
        />
        <button type="button">
          <FaSearch className="text-teal-400 h-5 text-btn-color w-5 absolute top-3.5 right-3 fill-current" />
        </button>
      </div>
      <div className="space-y-2 mt-2 min-h-20">
        {usersData.length > 0 ? usersData.map((user) => (
          <UserCard user={user} />
        )): <p className="text-center text-dark-grey h-fit my-10">No User found.</p>}
      </div>
      
    </div>
  );
};
