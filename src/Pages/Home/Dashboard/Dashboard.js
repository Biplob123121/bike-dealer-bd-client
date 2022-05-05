import React, { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] =useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    //console.log(data);
    return (
    <section className='chart-section'>
        <div className='container'>
            <h2 className='chart-info text-center pt-5'>Last month Delivered :</h2>
            <ResponsiveContainer width='100%' height={400}>
            <BarChart data={data}>
                <Bar dataKey="sell" fill="#8884d8" />
                <XAxis dataKey={'brand'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </BarChart>
            </ResponsiveContainer>
            
        </div>
    </section>
    );
};

export default Dashboard;