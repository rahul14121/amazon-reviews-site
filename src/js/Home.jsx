import React from 'react'
import "../css/home.scss"
import Widget from './components/widget/Widget'

const Home = () => {
    return (
        <div className="home">
            <div className="widgets">
                <Widget></Widget>
                <Widget></Widget>
                <Widget></Widget>
                <Widget></Widget>
            </div>
        </div>
    )
}

export default Home