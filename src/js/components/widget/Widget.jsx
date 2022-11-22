const StarHalfIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"/></g></g></g></svg>
)

const ReviewIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M13.57,11.57L12,15l-1.57-3.43L7,10l3.43-1.57 L12,5l1.57,3.43L17,10L13.57,11.57z"/></g></svg>
)

const CommentsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
)


const Widget = ( { type } ) => {


    let data;

    switch(type){
        case "totalreviews":
            data={
                titleWidget: "Total Reviews",
                section1: "Average Review Score: ",
                section4: "See Review Page",
                starRating: "4.0",
                starRatingText: "4.0 out of 5 stars",
                icon: <StarHalfIcon className="icon"></StarHalfIcon>,

            };
            break;
        case "avgreviews":
            data = {
                titleWidget: "Breakdown of Review Score",
                section1: "Positive Reviews (above 4 stars): ",
                section2: "Average Reviews",
                section3: "Bad Reviews",
                icon: <ReviewIcon className="icon"></ReviewIcon>,
            };
            break;
        case "posnegcomments":
            data = {
                titleWidget: "Positive and Negative Comments",
                section1: "Amount: ",
                section2: "Amount: ",
                icon: <CommentsIcon className="icon"></CommentsIcon>,

            };
            break;
        default:
            break;


     }

    
    return (
        <div className="widget">
            <div className="left">
                <span className="titleWidget">{data.titleWidget} </span>
                <span className="section1">{data.section1} </span>
                <span className="section2">{data.section2}  </span>
                <span className="section3">{data.section3} </span>
                <span className="section4">{data.section4} </span>
            </div>
            <div className="right">
            {data.icon}
            <div className="starSymbol">
                <i data-star={data.starRating} className="starRating"></i>
                
            

            {data.starRatingText}
                
            </div>
            


        </div>
        </div>
    );
};


ReactDOM.render(
    <div className="widgets">
    <Widget type="totalreviews"/>
    <Widget type="avgreviews"/>
    <Widget type="posnegcomments"/>
    
    </div>,
    

    document.getElementById('root')
);



export default Widget