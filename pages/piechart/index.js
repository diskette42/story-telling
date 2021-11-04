import React from 'react'
import { Chart } from "react-google-charts";
import { Data } from '../../components/data';
function dataVisualize() {
    let temp = [];
    temp.push(["year_week", "new_cases",]);
    Data.forEach((item) => temp.push([item.year_week, item.new_cases]));
    console.log(temp)
    
    return (
        <div>
            <Chart
                width="100%"
                height={300}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={temp}
                options={{
                    title: 'Covid19 in Austria',
                    chartArea: { width: '30%' },
                    hAxis: {
                        title: 'Total Population',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Number',
                    },
                }}
                legendToggle
            />
        </div>
    )
}

export default dataVisualize
