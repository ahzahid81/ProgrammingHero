import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const ResultBar = ({studentPromise}) => {
    const data = use(studentPromise);
    const finalData = data.data;

    // data processing for the chart
    // { "id": 10, "name": "Student 10", "marks": { "physics": 83, "chemistry": 81, "math": 87 } }

    const finalChartsData = finalData.map( studentData => {
        const student = {
            id : studentData.id,
            name : studentData.name,
            physics : studentData.marks.physics,
            chemistry : studentData.marks.chemistry,
            math : studentData.marks.math
        }
        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;
        return student;
    })



    return (
        <div>
            <BarChart width={500} height={500} data={finalChartsData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Bar dataKey={'avg'} fill='yellow'></Bar>
            <Bar dataKey={'chemistry'} fill='red'></Bar>
            </BarChart>
            
        </div>
    );
};

export default ResultBar;