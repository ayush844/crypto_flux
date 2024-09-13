import { useEffect, useState } from "react";
import TabsComponenet from "../components/TabsComponenet";
import axios from "axios";

const Explore = () => {

    const [coins, setCoins] = useState([]);

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
        <TabsComponenet coins={coins} />
    </div> );
}
 
export default Explore;