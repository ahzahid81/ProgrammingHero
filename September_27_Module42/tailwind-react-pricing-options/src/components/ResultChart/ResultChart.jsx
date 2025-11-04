import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { "id": 1, "name": "Student1", "physics": 86, "chemistry": 79 },
  { "id": 2, "name": "Student2", "physics": 72, "chemistry": 68 },
  { "id": 3, "name": "Student3", "physics": 95, "chemistry": 91 },
  { "id": 4, "name": "Student4", "physics": 58, "chemistry": 64 },
  { "id": 5, "name": "Student5", "physics": 80, "chemistry": 85 },
  { "id": 6, "name": "Student6", "physics": 67, "chemistry": 70 },
  { "id": 7, "name": "Student7", "physics": 91, "chemistry": 88 },
  { "id": 8, "name": "Student8", "physics": 74, "chemistry": 77 },
  { "id": 9, "name": "Student9", "physics": 49, "chemistry": 55 },
  { "id": 10, "name": "Student10", "physics": 83, "chemistry": 81 }
];


const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'chemistry'}></Line>
                <Line dataKey={'physics'} stroke='red'></Line>

            </LineChart>
            
        </div>
    );
};

export default ResultChart;