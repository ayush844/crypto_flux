import React, { useState } from 'react'

import SearchIcon from "@mui/icons-material/Search";


const Search = ({search, onSearchChange}) => {

    

  return (
    <div className="w-4/5 flex justify-start items-center gap-4 mx-auto bg-gray-800 p-3 rounded-full mb-6 ">
    <SearchIcon sx={{ color: "#FFB200", fontSize: "1.5rem" }} />
    <input
      className="bg-gray-800 text-gray-400 font-inter text-base border-none w-full focus:outline-none"
      placeholder="Search" value={search} onChange={(e) => onSearchChange(e)}
    />
  </div>
  )
}

export default Search