import { useEffect, useState } from "react";
import TabsComponenet from "../components/TabsComponenet";
import axios from "axios";
import Search from "../components/Search";
import PaginationComponenet from "../components/Pagination";

const Explore = () => {

    const [coins, setCoins] = useState([]);

    const [paginatedCoins, setPaginatedCoins] = useState([]);

    const [search, setSearch] = useState("");

    const [page, setPage] = useState(1);

    const onSearchChange = (e)=>{
        setSearch(e.target.value);
    }

    var filteredCoins = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

    

    const handlePageChange = (event, value) => {
      setPage(value);
      var initialCount = (value - 1) * 10;
      setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
    };

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&myapi=CG-Rf8ZBzdirmfSzUZMwRhXFfoS').then((res) => {
            console.log("response >>> ", res.data);
            setCoins(res.data);
            setPaginatedCoins(res.data.slice(0, 10));
        }).catch((err)=>{
            console.log("ERROR >> ", err);
        })
    }, []);

    return ( <div className="min-h-full">
        <h1>EXPLORE</h1>
        <Search onSearchChange={onSearchChange} search={search} />
        <TabsComponenet coins={search ? filteredCoins : paginatedCoins} />
        {!search && (
            <PaginationComponenet page={page} handleChange={handlePageChange} />
        )}
    </div> );
}
 
export default Explore;