import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationComponenet({page, handleChange}) {


  return (
    <div className='flex items-center justify-center mx-0 my-8 md:m-12'>
      <Pagination 
      count={10} 
      page={page} 
      onChange={(event, value)=>handleChange(event, value)}         
      sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid #FFB200",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "#FFB200 !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "#FFB200 !important",
            borderColor: "#FFB200",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }} />
    </div>
  );
}