import { useEffect, useState } from 'react';

interface MarketApi {
    nm: string;
    c: string;
    s: string;
    lg: string;
    bs: string;
    ss: string;
    h: string;
    l: string;
    op: string;
    cl: string;
    v: string;
    cp: string;
    vd: number;
    pd: number;
    o: number;
}

interface MarketModel {
    name: string;
    code: string;
    symbol: string;
    logo: string;
    buy: string;
    sell: string;
    high: number;
    low: number;
    open: number;
    close: number;
    volume: number;
    changePercentage: number;
    volumeDecimals: number;
    priceDecimals: number;
    order: number;
}

interface MarketArgs {
    search?: string;
}

export const useMarkets = (args: MarketArgs = {}) => {
    const [markets, setMarkets] = useState<MarketModel[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchMarkets = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.binalokaindonesia.com/v1/markets', {
                method: 'GET'
            });
            const data: MarketApi[] = await response.json();
            const markets = data
                .map((market) => ({
                    name: market.nm,
                    code: market.c,
                    symbol: market.s,
                    logo: `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/color/${market?.c.toLocaleLowerCase()}.png`,
                    buy: market.bs,
                    sell: market.ss,
                    high: parseFloat(market.h),
                    low: parseFloat(market.l),
                    open: parseFloat(market.op),
                    close: parseFloat(market.cl),
                    volume: parseFloat(market.v),
                    changePercentage: parseFloat(market.cp),
                    volumeDecimals: market.vd,
                    priceDecimals: market.pd,
                    order: market.o
                }))
                .filter((market) => {
                    if (!market) return false;
                    const search = args?.search?.toLowerCase();

                    if (search) {
                        const name = market.name.toLowerCase();
                        const code = market.code.toLowerCase();

                        return name.includes(search) || code.includes(search);
                    }

                    return true;
                });
            setMarkets(markets);
        } catch (error) {
            console.error('Failed to fetch markets', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMarkets();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [args.search]);

    return { markets, loading };
};

export const useMarketByCode = (code: string) => {
    const { markets, loading } = useMarkets();
    const market = markets.find((market) => market.code === code);

    return { market, loading };
};
