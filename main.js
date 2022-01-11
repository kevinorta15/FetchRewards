const API = "https://frontend-take-home.fetchrewards.com/form";


$.get(API).done(function (data){
    console.log(data);
    $("#occupationID").text("");

    var occups = "";


    for (var i = 0; i <= 12; i += 1){
        console.log(data.occupations[i]);
        occups += "<option>" + data.occupations[i] + "</option>"
        // $("occupationID").html(
        //     "<div>" +
        //     "<p>" + data.occupations[i] + "</p>" +
        //     "</div>"
        // )
    }
    $("#inputGroupSelect01").html(occups);
})