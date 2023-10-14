import React, { useEffect, useState } from "react";
import { Ca_Data } from "../utils/data";

const SearchBar = () => {
  const [user, setUsers] = useState("");
  const [dataId, setDataId] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (user !== "") {
      setFilteredData(
        Ca_Data?.filter((data) =>
          data.name.toString().toLowerCase().includes(user.toLowerCase())
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [user]);

  return (
    <div className="flex w-full mt-12 relative">
      <input
        className="w-full border rounded-lg p-3 text-zinc-400 text-lg font-semibold outline-none"
        type="text"
        name="search"
        placeholder="Search by name"
        value={user}
        onChange={(e) => setUsers(e.target.value)}
      />
      <button
        className="w-[30%] bg-blue-500 text-white font-semibold rounded-lg p-2  hover:shadow-xl"
        type="submit"
        onClick={() => (window.location.href = `/ca-details/${dataId}`)}
      >
        Search
      </button>
      <div className="absolute w-full max-h-[300px] text-sm top-16 bg-slate-100 overflow-y-scroll">
        {filteredData &&
          filteredData?.map((data) => (
            <>
              {data?.name == user ? null : (
                <div
                  key={data?.id}
                  className="w-full hover:bg-slate-200 cursor-pointer p-5"
                  onClick={() => {
                    setUsers(data?.name);
                    setDataId(data?.id);
                  }}
                >
                  <p>{data?.name}</p>
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
