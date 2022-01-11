//
"use strict"
//
// //Could do fetch, I just went with Jquery for pratice
// // fetch(“https://frontend-take-home.fetchrewards.com/form”).then(Response=>console.log(Response.json()))
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
$(document).ready(function () {

    const API = "https://frontend-take-home.fetchrewards.com/form";

    function getInfo() {
        var states = "";
        var occups = "";

        return fetch(API)
            .then(function (response) {
                return response.json();
            }).then(function (resultsObjects) {
                console.log(resultsObjects);
                resultsObjects.forEach(function (data, index, array) {
                    occups += "<option>" + data.occupations[i] + "</option>"
                    $("#occupation").html(occups);

                    states += "<option>" + data.states[i].name + ", " + data.states[i].abbreviation + "</option>"
                    $("#state").html(states);
                })
            })
    }
    getInfo();
})
