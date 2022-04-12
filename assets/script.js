//Date and time from moment
var todaysDateTime = moment().format('MMMM do YYYY, h:mm:ss a');
$("#currentDay").html(todaysDateTime);

//Saving text
$(document).ready(function() {
    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id");
        var task = $(this).siblings(".description").val();
        
        //Local storage
        localStorage.setItem(time, task);
    })

    //function for hours
    function hourTask() {
        var currTime = moment().hour();
        $(".time-block").each(function() {
            var timeSect = parseInt($(this).attr("id").split("hour")[1]);

            if (timeSect < currTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeSect === currTime) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    //Getting from local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));

    //calling function
    hourTask();
})

