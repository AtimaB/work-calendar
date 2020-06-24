$(document).ready(function() {
    // add moment.js //
    var dayOfWeek = moment().format("dddd");
    var currentDay = moment().format("MMMM Do YYYY");
    var currentInfo = dayOfWeek + ", " + currentDay;
    $("#currentDay").text(currentInfo);
    console.log(currentInfo);

    var currentHour = moment().hours();
// add all classes //
    for (i =0; i< 9; i++){
        if ($(".hour").eq(i).data("hour") === currentHour){
            $("textarea").eq(i).addClass("present");
    }   else if ($(".hour").eq(i).data("hour") < currentHour){
        $("textarea").eq(i).addClass("past");
    } else {
        $("textarea").eq(i).addClass("future");
    }
}


});
// set save button to save the input in local storage from the user//
$("i").click(saveSchedule);
showSchedule();

    function saveSchedule(){
        for (i=0; i<9; i++){
            var content= $("textarea").eq(i).val();
            var hour= $(".hour").eq(i).data("hour");
            localStorage.setItem(hour, content);
        }
    }

    function showSchedule(){
        for(i=0; i<9; i++){
        var hour= $(".hour").eq(i).data("hour");
        var objectives= localStorage.getItem(hour);
        $("textarea").eq(i).text(objectives)    
        }
    
    }