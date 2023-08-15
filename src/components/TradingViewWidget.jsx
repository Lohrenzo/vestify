// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef();

    useEffect(
        () => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
            {
            "symbols": [
                [
                "COINBASE:BTCUSD|1M"
                ],
                [
                "BINANCE:ETHUSD|1M"
                ],
                [
                "BINANCE:BTCBUSD|1M"
                ],
                [
                "FX:GBPUSD|1M"
                ],
                [
                "OANDA:EURUSD|1M"
                ],
                [
                "FX:USDJPY|1M"
                ]
            ],
            "chartOnly": false,
            "width": "100%",
            "height": 500,
            "locale": "en",
            "colorTheme": "light",
            "autosize": false,
            "showVolume": false,
            "showMA": false,
            "hideDateRanges": false,
            "hideMarketStatus": false,
            "hideSymbolLogo": false,
            "scalePosition": "right",
            "scaleMode": "Normal",
            "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            "fontSize": "10",
            "noTimeScale": false,
            "valuesTracking": "1",
            "changeMode": "price-and-percent",
            "chartType": "area",
            "maLineColor": "#2962FF",
            "maLineWidth": 1,
            "maLength": 9,
            "lineWidth": 2,
            "lineType": 0,
            "dateRanges": [
                "1d|1",
                "1m|30",
                "3m|60",
                "12m|1D",
                "60m|1W",
                "all|1M"
            ],
            "dateFormat": "MMM dd, yyyy"
            }`;
        container.current.appendChild(script);
        },
        []
    );

    return (
        <section className='flex justify-center items-center lg:h-[68vh] h-[58vh] w-[100%] overflow-hidden'>
            <div className="tradingview-widget-container" ref={container}>
                <div className="tradingview-widget-container__widget"></div>
                <div className="tradingview-widget-copyright bg-white"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="text-black opacity-40">Track all markets on TradingView</span></a></div>
            </div>
        </section>
    );
}

export default memo(TradingViewWidget);
