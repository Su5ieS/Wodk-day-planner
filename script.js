today = moment().format("dddd MMM Do, YYYY h:mm a");
$("#currentDay").text(today);


//Change textarea background color based on time
let checkTime = function () {
  //Get Current time
  var currentTime = moment().format("H");

  //get all elements with class "textarea"
  var timeBlockElements = $(".textarea");

  //loop through textarea classes
  for (var i = 0; i < timeBlockElements.length; i++) {
    //Get element i's ID as a string
    var elementID = Number.parseInt(timeBlockElements[i].id.split("-")[1]);

    //get element by ID
    var changeBox = document.getElementById(timeBlockElements[i].id);

    console.log(elementID, currentTime);
    // apply new class if task is present/past/future
    if (elementID > currentTime) {
      $(changeBox).addClass("future");
    } else if (elementID == currentTime) {
      $(changeBox).addClass("present");
    } else if (elementID < currentTime) {
      $(changeBox).addClass("past");
    }
  }
};

//check time every 10 min
setInterval(checkTime(), 1000 * 60 * 10);



//local storage - save information on pressing save button
$("#saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})



//retrieve local storage
$(".row").each(function() {
    let id = $(this).attr("id");
    let hour = localStorage.getItem(id);

    if (hour !== null) {
        $(this).children(".description").val(hour);
    }

})



