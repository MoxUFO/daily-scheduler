

$(function () {
  var textArea = document.querySelectorAll("textarea");
// code lines 8-17 uses jquerys method to add an event listener to each save button, this saves information users input to the local storage.
//  the information the user insert into the text area of any given hour is the value and related hour is the key.
//the information is the returned to the given area based on the text areas id which is the same as key in the local storage
  $(".saveBtn").on("click", saveEvent);

  function saveEvent() {
    let eventDescription = $(this).siblings(".description").val();
    let eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, eventDescription);
  }

  for (let index = 0; index < textArea.length; index++) {
    textArea[index].value = localStorage.getItem(textArea[index].id);
  }
//code lines 22-60 expreeses the change in the color of the time block based on the given hour
//the hourCount array and hoursArray array are one in the same. hourCount is used in comparison so JavaScript knows when to change the classes
// and the hoursArray is used to target the specific element so JavaScript knows where it is going to remove and add classes.
  let hour9 = $("#9");
  let hour10 = $("#10");
  let hour11 = $("#11");
  let hour12 = $("#12");
  let hour1 = $("#13");
  let hour2 = $("#14");
  let hour3 = $("#15");
  let hour4 = $("#16");
  let hour5 = $("#17");
  let hourCount = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  let hoursArray = [
    hour9,
    hour10,
    hour11,
    hour12,
    hour1,
    hour2,
    hour3,
    hour4,
    hour5,
  ];
  let exactHour = dayjs().format("H");//the varible that is going to used in comparison with the hourCount
  for (let i = 0; i < hoursArray.length; i++) {

    if (hourCount[i] < exactHour) {
      console.log();
      $(hoursArray[i]).removeClass("future");
      $(hoursArray[i]).removeClass("present");
      $(hoursArray[i]).addClass("past");
    } else if (hourCount[i] == exactHour) {
      $(hoursArray[i]).removeClass("future");
      $(hoursArray[i]).removeClass("past");
      $(hoursArray[i]).addClass("present");
    } else {
      $(hoursArray[i]).removeClass(".present");
      $(hoursArray[i]).removeClass(".past");
      $(hoursArray[i]).addClass("future");
    }
  }

  setInterval(function () {
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  }, 1000);
});
