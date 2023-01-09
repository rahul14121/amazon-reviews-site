fetch('http://127.0.0.1:5000/test')
.then(function (response) {
    return response.json();
}).then(function (text) {
    console.log('GET response:');
    console.log(text);
    document.getElementsByClassName("section1totalreviews")[0].innerHTML = "Total Review Amount: " + text[0];
    console.log(document.getElementsByClassName("starSymboltotalreviews"));
    var starSymbol = document.getElementsByClassName("starSymboltotalreviews")[0];
    console.log(Math.round((text[3])*10)/10);
    starSymbol.innerHTML = `<i data-star=${(Math.round((text[3])*10)/10)} class="starRating"></i>${(Math.round((text[3])*10)/10)} out of 5 stars`
    
    
    //document.getElementById('section2').innerHTML = "<p>Average Rating:</p>" + text[3]; 
    document.getElementsByClassName('section1avgreviews')[0].innerHTML = "Positive Reviews: " + text[1]; 
    document.getElementsByClassName('section3avgreviews')[0].innerHTML = "Negative Ratings: " + text[2];
    
    
    
});


