import { useEffect, useState } from 'react';

import api from '@/lib/api';

import data from '@/data/market.json';

interface MarketApi {
    nm: string;
    c: string;
    s: string;
    lg: string;
    bs: string;
    ss: string;
    h: number;
    l: number;
    op: number;
    cl: number;
    v: number;
    cp: number;
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
            const response = await api('/markets', {
                method: 'GET'
            });
            // const data: MarketApi[] = await response.json();
            const markets = data
                .map((market) => ({
                    // name: market.nm,
                    // code: market.c,
                    // symbol: market.s,
                    // logo: market.lg,
                    // buy: market.bs,
                    // sell: market.ss,
                    // high: market.h,
                    // low: market.l,
                    // open: market.op,
                    // close: market.cl,
                    // volume: market.v,
                    // changePercentage: market.cp,
                    // volumeDecimals: market.vd,
                    // priceDecimals: market.pd,
                    // order: market.o
                    name: market.name,
                    code: market.code,
                    symbol: market.symbol,
                    logo: market.logo,
                    buy: market.buy,
                    sell: market.sell,
                    high: market.high,
                    low: market.low,
                    open: market.open,
                    close: market.close,
                    volume: market.volume,
                    changePercentage: market.changePercentage,
                    volumeDecimals: market.volumeDecimals,
                    priceDecimals: market.priceDecimals,
                    order: market.order
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
