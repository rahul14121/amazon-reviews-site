

const Widget = () => {
    return (
        <div className="widget">
            <div className="left">left</div>
                <span className="totalReviews">Total Reviews: </span>
            <div className="right">right</div>


        </div>
    )
}

ReactDOM.render(
    <div className="widgets">
    <Widget />
    <Widget />
    <Widget />
    <Widget />
    </div>,
    

    document.getElementById('root')
);



export default Widget