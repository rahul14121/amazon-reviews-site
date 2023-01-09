







const data = [
    {date: "January", rating: 4.5,},
    {date: "February", rating: 4.1,},
    {date: "March", rating: 4.3,},
    {date: "April", rating: 4.2,},
    {date: "May", rating: 4.6,},
    {date: "June", rating: 4.9,},
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
  console.log(dataDB);
  
    return (
        <div className="chart">Chart
        <div className="title">Last Six Months Reviews</div>
        <recharts.AreaChart
          width={950}
          height={400}
          data={dataDB}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 40,
            bottom: 0,
          }}
        >
          <recharts.CartesianGrid strokeDasharray="3 3" />
          <recharts.XAxis dataKey="date" />
          <recharts.YAxis domain={[0, 5]}/>
          <recharts.Tooltip content={renderTooltipContent} />
          <recharts.Area type="monotone" dataKey="rating" stroke="#8884d8" fill="#8884d8" />
          
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