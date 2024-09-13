import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import Grid from './Grid';


export default function TabsComponenet({coins}) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className=' w-full' sx={{ width: '100%', typography: 'body1' }}>
<TabContext value={value}>
        <div>
          <TabList
            onChange={handleChange}
            variant="fullWidth"
            aria-label="lab API tabs example"
            sx={{ color: 'white', '& .MuiTabs-indicator': {
                backgroundColor: '#facc15', // Change the indicator color here
              } }} // MUI sx for inline styles
          >
            <Tab label="GRID"  icon={<GridViewIcon />}  value="grid" sx={{ color: 'white', '&.Mui-selected': { color: '#facc15' } }} />
            <Tab label="LIST" icon={<ListIcon />}  value="list" sx={{ color: 'white', '&.Mui-selected': { color: '#facc15' } }} />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className=' flex justify-center items-start flex-wrap w-full gap-4 my-8'>
            {
              coins.map((coin, i) => {
                return (
                  // <div key={i}>
                  //   <img className='select-none pointer-events-none'  src={item.image} alt="coin img" />
                  //   <p>{i+1}.{item.name}</p>
                  // </div>
                  <Grid coin={coin} key={i} />
                )
              })
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
          <div>
          {
              coins.map((item, i) => {
                return (
                  <p key={i}>{i+1}.{item.id}</p>
                )
              })
            }
          </div>
        </TabPanel>
      </TabContext>

    </div>
  );
}



