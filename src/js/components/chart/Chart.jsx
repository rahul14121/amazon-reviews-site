







const data = [
    {name: "January", OneStar: 1200, TwoStar: 150, ThreeStar: 510, FourStar: 900, FiveStar: 1300,},
    {name: "February", OneStar: 1000, TwoStar: 120, ThreeStar: 500, FourStar: 950, FiveStar: 1000,},
    {name: "March", OneStar: 900, TwoStar: 100, ThreeStar: 532, FourStar: 990, FiveStar: 1100,},
    {name: "April", OneStar: 1400, TwoStar: 175, ThreeStar: 570, FourStar: 1000, FiveStar: 1200,},
    {name: "May", OneStar: 1100, TwoStar: 200, ThreeStar: 600, FourStar: 910, FiveStar: 1150,},
    {name: "June", OneStar: 850, TwoStar: 220, ThreeStar: 580, FourStar: 975, FiveStar: 1050,},
  ];

  const data2 = [
    {
      month: '2015.01',
      a: 4000,
      b: 2400,
      c: 2400,
    },
    {
      month: '2015.02',
      a: 3000,
      b: 1398,
      c: 2210,
    },
    {
      month: '2015.03',
      a: 2000,
      b: 9800,
      c: 2290,
    },
    {
      month: '2015.04',
      a: 2780,
      b: 3908,
      c: 2000,
    },
    {
      month: '2015.05',
      a: 1890,
      b: 4800,
      c: 2181,
    },
    {
      month: '2015.06',
      a: 2390,
      b: 3800,
      c: 2500,
    },
    {
      month: '2015.07',
      a: 3490,
      b: 4300,
      c: 2100,
    },
  ];

  const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;

  const getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0;
  
    return toPercent(ratio, 2);
  };
  
  const renderTooltipContent = (o) => {
    const { payload, label } = o;
    const total = payload.reduce((result, entry) => result + entry.value, 0);
    return (
      <div className="customized-tooltip-content">
        <p className="total">{`${label} (Total: ${total})`}</p>
        <ul className="list">
          {payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

const ChartComponent = () => {
  
  console.log(window.React)
    return (
        <div className="chart">Chart
        <div className="title">Last Six Months Reviews</div>
        <recharts.AreaChart
          width={950}
          height={400}
          data={data}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 40,
            bottom: 0,
          }}
        >
          <recharts.CartesianGrid strokeDasharray="3 3" />
          <recharts.XAxis dataKey="name" />
          <recharts.YAxis tickFormatter={toPercent} />
          <recharts.Tooltip content={renderTooltipContent} />
          <recharts.Area type="monotone" dataKey="OneStar" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <recharts.Area type="monotone" dataKey="TwoStar" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <recharts.Area type="monotone" dataKey="ThreeStar" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <recharts.Area type="monotone" dataKey="FourStar" stackId="1" stroke="#34d856" fill="#34d856" />
          <recharts.Area type="monotone" dataKey="FiveStar" stackId="1" stroke="#fff586" fill="#fff586" />
        </recharts.AreaChart>
        </div>
    )
}

ReactDOM.render(
    <div className="chartRender">
      
    <ChartComponent></ChartComponent>
    
    </div>,
    

    document.getElementById('root3')
);


export default ChartComponent