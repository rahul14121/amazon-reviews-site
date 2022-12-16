import React from 'react'
import "../css/home.scss"
import Widget from './components/widget/Widget'
import Featured from './components/featured/Featured'
import Chart from './components/chart/Chart'

const Home = () => {
    return (
        <div className="home">
            <div className="widgets">
                <Widget></Widget>
                <Widget></Widget>
                <Widget></Widget>
                <Widget></Widget>
            </div>
            <div classname="charts">
                <Featured></Featured>
                <Chart></Chart>
            </div>
        </div>
    )
}

export default Home