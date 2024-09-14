import { useEffect, useState } from "react";
import TabsComponenet from "../components/TabsComponenet";
import axios from "axios";
import Search from "../components/Search";

const Explore = () => {

    const [coins, setCoins] = useState([]);

    const [search, setSearch] = useState("");

    const onSearchChange = (e)=>{
        setSearch(e.target.value);
    }

    var filteredCoins = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&myapi=CG-Rf8ZBzdirmfSzUZMwRhXFfoS').then((res) => {
            console.log("response >>> ", res.data);
            setCoins(res.data);
        }).catch((err)=>{
            console.log("ERROR >> ", err);
        })
    }, []);

    return ( <div className="min-h-full">
        <h1>EXPLORE</h1>
        <Search onSearchChange={onSearchChange} search={search} />
        <TabsComponenet coins={filteredCoins} />
    </div> );
}
 
export default Explore;