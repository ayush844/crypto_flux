import { useEffect, useState } from "react";
import TabsComponenet from "../components/TabsComponenet";
import axios from "axios";
import Search from "../components/Search";
import PaginationComponenet from "../components/Pagination";
import Loader from "../components/Loader";

const Explore = () => {

    const [coins, setCoins] = useState([]);

    const [paginatedCoins, setPaginatedCoins] = useState([]);

    const [search, setSearch] = useState("");

    const [page, setPage] = useState(1);

    const [isLoading, setIsLoading] = useState(true);

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
            setIsLoading(false);
        }).catch((err)=>{
            console.log("ERROR >> ", err);
            setIsLoading(false);
        })
    }, []);

    return (
<>
    {(isLoading || coins.length == 0)? (
        <Loader />
    ) : (
        <div className="min-h-full pt-10 md:pt-16">
        <Search onSearchChange={onSearchChange} search={search} />
        <TabsComponenet coins={search ? filteredCoins : paginatedCoins} />
        {!search && (
            <PaginationComponenet page={page} handleChange={handlePageChange} />
        )}
    </div> 
    )}

</>    
    );
}
 
export default Explore;