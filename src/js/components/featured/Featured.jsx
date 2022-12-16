const BrainIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M13,8.57c-0.79,0-1.43,0.64-1.43,1.43s0.64,1.43,1.43,1.43s1.43-0.64,1.43-1.43S13.79,8.57,13,8.57z"/><path d="M13,3C9.25,3,6.2,5.94,6.02,9.64L4.1,12.2C3.85,12.53,4.09,13,4.5,13H6v3c0,1.1,0.9,2,2,2h1v3h7v-4.68 c2.36-1.12,4-3.53,4-6.32C20,6.13,16.87,3,13,3z M16,10c0,0.13-0.01,0.26-0.02,0.39l0.83,0.66c0.08,0.06,0.1,0.16,0.05,0.25 l-0.8,1.39c-0.05,0.09-0.16,0.12-0.24,0.09l-0.99-0.4c-0.21,0.16-0.43,0.29-0.67,0.39L14,13.83c-0.01,0.1-0.1,0.17-0.2,0.17h-1.6 c-0.1,0-0.18-0.07-0.2-0.17l-0.15-1.06c-0.25-0.1-0.47-0.23-0.68-0.39l-0.99,0.4c-0.09,0.03-0.2,0-0.25-0.09l-0.8-1.39 c-0.05-0.08-0.03-0.19,0.05-0.25l0.84-0.66C10.01,10.26,10,10.13,10,10c0-0.13,0.02-0.27,0.04-0.39L9.19,8.95 c-0.08-0.06-0.1-0.16-0.05-0.26l0.8-1.38c0.05-0.09,0.15-0.12,0.24-0.09l1,0.4c0.2-0.15,0.43-0.29,0.67-0.39l0.15-1.06 C12.02,6.07,12.1,6,12.2,6h1.6c0.1,0,0.18,0.07,0.2,0.17l0.15,1.06c0.24,0.1,0.46,0.23,0.67,0.39l1-0.4c0.09-0.03,0.2,0,0.24,0.09 l0.8,1.38c0.05,0.09,0.03,0.2-0.05,0.26l-0.85,0.66C15.99,9.73,16,9.86,16,10z"/></g></g></svg>

)

const UpArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.5 40V13.7L10.1 26.1 8 24 24 8l16 16-2.1 2.1-12.4-12.4V40Z"/></svg>

)

const DownArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 40 8 24l2.1-2.1 12.4 12.4V8h3v26.3l12.4-12.4L40 24Z"/></svg>
)



const Featured = () => {
    return (
        <div className="featured">
          <div className="top">
            <h1 className="title">Sentiment Analysis</h1>
            <BrainIcon></BrainIcon>
          </div>
          <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}></CircularProgressbar>
            </div>
            <p className="title">Customer Satisfaction With Product</p>
            <p className="amount">Happy</p>
            <p className="desc">70% Positive Analysis. People are happy</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">7 Day Average</div>
                    <div className="itemResult positive"><UpArrow></UpArrow>
                    <div className="resultAmount">80%</div></div>
                </div>
                <div className="item">
                    <div className="itemTitle">1 Month Average</div>
                    <div className="itemResult positive"><UpArrow></UpArrow>
                    <div className="resultAmount">75%</div></div>
                </div>
                <div className="item">
                    <div className="itemTitle">3 Month Average</div>
                    <div className="itemResult negative"><DownArrow></DownArrow>
                    <div className="resultAmount">65%</div></div>
                </div>
            </div>
          </div>
          </div>

    )
}

ReactDOM.render(
    <div className="feature">
    <Featured></Featured>
    
    </div>,
    

    document.getElementById('root2')
);


export default Featured