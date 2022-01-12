var searchFormEl = document.getElementById("user-form");

//get the modal form to accept a state and populate the container 2 info
var getParkInfo = function (event) {

    event.preventDefault();

    var stateInputEl = document.querySelector("#state");
    var stateAbbr = (stateInputEl.value.trim()).toUpperCase();  

    console.log(stateAbbr);
    
    //need to add query parameter and hopefully be able to use state without having to convert state to anything queryable
    var apiUrl = "https://developer.nps.gov/api/v1/parks?" + stateAbbr + "&api_key=LlVYiDWyyOiv7SJeWDVIbQAJ2mMuYi64fapw7tEA&limit=20";

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {

                    //this function on the following line was Preston's first issue
                    generateCards(data);

                    if (data.total > 20) {
                        //create a link with the following href, and append to  I don't believe there is an L at the end of htm
                        var cardContainer = document.querySelector(".large-8");
                        var theHref = "<a href='https://www.nps.gov/state/" + stateAbbr + "/index.htm'>Link to National Park Service site for your selected state</a>"
                        cardContainer.innerHTML = theHref;                
                    }
                });
            }
            //else if () {               
                //if the form entry is not a valid two letter state initial, don't accpt input and let user know
            //};
        })
        .catch(function(error) {
            //notice this '.catch()' getting chained onto the end of the '.then()' method
            console.log(error);
        });
}


    //else

var generateCards = function() {

    //Preston volunteered to do this first

    //empty container two
    
    //take state initials input and filter api data to create an array with that state's park identifier

            //loop through the array and generate a card for each park

            //set href of card to info-page

    //I already added a link to the end of the container, after the cards are generated, that will link to the national park page if
    //the state returns more than 20 parks

}
        

//ZACH START

//when a card is clicked in container two

    //create an div in the dynamic divs section with the 

    //set dynamic div link href to that info-page

    //save the parkname to local storage to load in the dynamic divs section when the
    //page is loaded

//ZACH END    

//create a loadParks() function

    //get array of park names from local storage

    //loop through array to generate dynamic divs of parks that we've looked at



//add event listener for form submission
searchFormEl.addEventListener("submit", getParkInfo);

//add event listener for when a card is clicked in container two



//call loadParks() function