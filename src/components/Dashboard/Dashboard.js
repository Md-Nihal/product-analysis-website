import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [chart, setChart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return (
        <div>
            <h1>This is dashboard</h1>
            
            <div className='flex space-x-2 m-5'>
                <div>
                    <h5>Revenue vs Investment</h5>
                <LineChart width={500} height={300} data={chart}>
                <Line dataKey="investment"></Line>
                <Line dataKey="sell"></Line>
                <Line dataKey="revenue"></Line>
                <Tooltip />
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>

            </LineChart>
                </div>
                <div>
                <h5>Revenue vs Investment</h5>
                <BarChart
                width={600}
                height={350}
                data={chart}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#82ca9d" />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="sell" fill="#85da4d" />
            </BarChart>
                </div>
            
            
            
            </div>
        </div>

    );
};

export default Dashboard;