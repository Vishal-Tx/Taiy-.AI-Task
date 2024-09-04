import React from "react";
import { useQuery } from "react-query";
import { fetchGlobalData, fetchCountryData, fetchHistoricalData } from "../api/covidAPI";
import LineChart from "../components/LineChart";
import Map from "../components/Map";
const Dashboard: React.FC = () => {
    const options = {
        staleTime: Infinity,
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    }
    // Fetching data using React Query
    const { data: globalData, isLoading: isLoadingGlobal } = useQuery("globalData", fetchGlobalData, options);
    const { data: countryData, isLoading: isLoadingCountry } = useQuery("countryData", fetchCountryData, options);
    const { data: historicalData, isLoading: isLoadingHistorical } = useQuery("historicalData", fetchHistoricalData, options);

    if (isLoadingGlobal || isLoadingCountry || isLoadingHistorical) {

        return <div className="flex justify-center items-center h-screen text-2xl text-gray-700 animate-bounce">
            Loading...
        </div>;
    }

    if (!globalData || !countryData || !historicalData) {
        return <div>Error fetching data</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">COVID-19 Dashboard</h1>

            {/* Line Chart with historical data */}
            <LineChart historicalData={historicalData} />

            {/* Map with country data */}
            <Map countryData={countryData} />

        </div>
    );
};

export default Dashboard;
