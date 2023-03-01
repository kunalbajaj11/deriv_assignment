import DerivAPIBasic from "https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic"
import { useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";

const useDeriv = (app_id) => {
    // const msg = useContext(DataContext);
    // console.log('msg', msg);
    let {res, setRes} = useContext(DataContext);

    useEffect(() => {
        // const app_id = 35596; // Replace with your app_id or leave as 1089 for testing.
        const connection = new WebSocket(
            `wss://ws.binaryws.com/websockets/v3?app_id=${app_id}`
        );
        const api = new DerivAPIBasic({ connection });
    
        const active_symbols_request = {
            active_symbols: "brief",
            product_type: "basic"
        };
    
        const activeSymbolsResponse = async (res) => {
            const data = JSON.parse(res.data);
    
            if (data.error !== undefined) {
                console.log("Error : ", data.error?.message);
                connection.removeEventListener("message", activeSymbolsResponse, false);
                await api.disconnect();
            }
    
            if (data.msg_type === "active_symbols") {
                setRes(data.active_symbols);
            }
    
            connection.removeEventListener("message", activeSymbolsResponse, false);
        };
    
        const getActiveSymbols = () => {
            setTimeout(async () => {
                connection.addEventListener("message", activeSymbolsResponse);
                await api.activeSymbols(active_symbols_request);
                console.log('Data received again ', data);
                // setSubCategories(...filterSubCategories(data));
            }, 3000);
        };

        getActiveSymbols();
    });
}

export default useDeriv;