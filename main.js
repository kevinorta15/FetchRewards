"use strict"

$(document).ready(function () {

    // prevent form submit
    const form = document.getElementById("JSONForm");
    form.addEventListener('submit', handleSubmit);


    const API = "https://frontend-take-home.fetchrewards.com/form";
    const hookbin = "https://requestinspector.com/inspect/01fs7x8bwj66va3ze123cpmjks"

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

    getInfo();


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
//
//
// const API = "https://frontend-take-home.fetchrewards.com/form";
//
//
//     $.get(API).done(function (data) {
//         console.log(data);
//
//         var occups = "";
//
//
//         for (var i = 0; i <= 12; i += 1) {
//             // console.log(data.occupations[i]);
//             occups += "<option>" + data.occupations[i] + "</option>"
//         }
//         $("#occupation").html(occups);
//
//         var states = "";
//
//         for (var i = 0; i <= 50; i += 1) {
//             // console.log(data.states[i].name);
//             states += "<option>" + data.states[i].name + ", " + data.states[i].abbreviation + "</option>"
//         }
//
//         $("#state").html(states);
//
//         $('#JSONForm').submit(function () {
//
//             alert("Form has been submitted successfully!");
//
//             var obj = $('#JSONForm');
//             $.ajax({
//                 type: 'POST',
//                 url: 'https://hookb.in/1gmgeGREKZFd6NOO6DYo',
//                 // url:'https://frontend-take-home.fetchrewards.com/form',
//                 dataType: 'json',
//                 data: JSON.stringify(obj),
//                 contentType: 'application/json',
//                 success: function (data) {
//                     alert(data)
//                     console.log(obj.status);
//                 }
//             });
//         })
//     });