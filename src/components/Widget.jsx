// import { useEffect } from "react";
import { AdvancedChart, Screener, Ticker, SymbolOverview } from "react-tradingview-embed";

export default function Widget() {
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    //     script.type = "text/javascript";
    //     script.async = true;
    //     script.innerHTML = `{
    //         "symbols": [
    //         {
    //             "proName": "FX_IDC:EURUSD",
    //             "title": "EUR to USD"
    //         },
    //         {
    //             "proName": "BITSTAMP:BTCUSD",
    //             "title": "Bitcoin"
    //         },
    //         {
    //             "proName": "BITSTAMP:ETHUSD",
    //             "title": "Ethereum"
    //         },
    //         {
    //             "description": "GBP to UDS",
    //             "proName": "FX:GBPUSD"
    //         }
    //         ],
    //         "colorTheme": "light",
    //         "isTransparent": false,
    //         "showSymbolLogo": true,
    //         "locale": "en"
    //     }`
    // },[]);

    return (
        <section className="flex w-[100vw]">
            {/* <AdvancedChart widgetProps={{ theme: "dark"}} /> */}
            <SymbolOverview />
        </section>
        // <!-- TradingView Widget BEGIN -->
        // <div className="tradingview-widget-container">
        //   <div className="tradingview-widget-container__widget"></div>
        //   <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
        // </div>
        // <!-- TradingView Widget END -->
    );
};