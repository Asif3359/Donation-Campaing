
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
    const allDonation = useLoaderData();

    const [price, setPrice] = useState(0);
    // const [donationData, setDonationData] = useState([]);
    const [localPrice, setLocalPrice] = useState(0);


    useEffect(() => {
        const localStorageData = localStorage.getItem('donations');

        if (localStorageData) {
            const parsedData = JSON.parse(localStorageData);
            // setDonationData(parsedData);
            const localTotalPrice = parsedData.reduce((localTotal, localItem) => localTotal + localItem.price, 0);
            setLocalPrice(localTotalPrice);
        }
        const total_price = allDonation.reduce((total, item) => total + item.price, 0);
        setPrice(total_price);

    }, []);


    const data = [
        { name: "Group A", value: ((localPrice / price).toFixed(3) * 100) },
        { name: "Group B", value: 100 - ((localPrice / price).toFixed(3) * 100) },

    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className="px-5 mt-2">
            <div className="flex justify-center items-center">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="flex  gap-5 justify-center items-center mb-5 ">
                <div>
                    <div className="border bg-[#00C49F] m-4 py-1 rounded-sm"></div>
                    <p className="bg-blue-400 px-2 py-1 rounded-lg text-white">Total Donation : {price}</p>
                </div>
                <div>
                    <div className="border bg-[#0088FE] m-4 py-1 rounded-sm"></div>
                    <p className="bg-blue-400 px-2 py-1 rounded-lg text-white">Your Donation : {localPrice}</p>
                </div>
            </div>
            <div>

            </div>
        </div>

    );
};

export default Statistics;