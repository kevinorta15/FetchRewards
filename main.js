"use strict"

$(document).ready(function () {

    // prevent form submit
    const form = document.getElementById("JSONForm");
    form.addEventListener('submit', handleSubmit);

    // URL to Get and Post To
    const API = "https://frontend-take-home.fetchrewards.com/form";

    //Method to GET Request, Loop Response Into Option Dropdown
    function getInfo() {
        var states = "";
        var occups = "";
        return fetch(API)
            .then(function (response) {
                console.log(response);
                return response.json();
            }).then(function (resultsObjects) {
                console.log(resultsObjects);
                for (let j = 0; j < resultsObjects.occupations.length; j++) {
                    var occupation = resultsObjects.occupations
                    occups += "<option>" + occupation[j] + "</option>"
                    $("#occupation").html(occups);
                }
                for (let k = 0; k < resultsObjects.states.length; k++) {
                    var state = resultsObjects.states
                    states += "<option>" + state[k].name + ", " + state[k].abbreviation + "</option>"
                    $("#state").html(states);
                }
            })
    }
//Call Method to Run
    getInfo();

    //Handles the Post Request from the form
    function handleSubmit(event) {
        event.preventDefault();
        var data = new FormData(event.target);
        var value = Object.fromEntries(data.entries());
        var valueJSON = JSON.stringify(value);
        var options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            // mode: 'no-cors',
            body: valueJSON,
        };

        alert("You have successfully signed up!")
        fetch(API, options).then(r => console.log(r));
    }
})
