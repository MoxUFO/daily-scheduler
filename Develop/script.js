// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

   var textArea = document.querySelectorAll('textarea')
  //  console.log(textArea )
  $('.saveBtn').on('click', saveEvent)

  function saveEvent(){
   let eventDescription = $(this).siblings('.description').val()
    // console.log(eventDescription)
  let eventTime = $(this).siblings('.hour').text()
  // console.log(eventTime)
   localStorage.setItem(eventTime, eventDescription)
  //  console.log(displayEvent)
   
   
  }
// console.log(localStorage)
  
    for (let index = 0; index < textArea.length; index++) {
      textArea[index].value = localStorage.getItem(textArea[index].id) 
  }

  function timeTracker(){
    let exactHour = dayjs().format('HA')
    let hour11 = $('#hour-11').children('.hour').text()
     let hoursDiv = document.querySelectorAll('.hour')
    console.log(hoursDiv)
    testNum = '11AM'
    console.log(exactHour == testNum)
    if (exactHour === testNum){
      
    }
    let givenHour = document.querySelectorAll('.hour')

    for (let i = 0; i < givenHour.length; i++) {
    //  console.log(givenHour[i]) 
    }
    // console.log(testMe)
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  let displayDate = dayjs().format('dddd, MMMM D')
  let testDay = dayjs().hour()
  // let test = $('.hour10').text()
  // console.log(test)
  $('#currentDay').text(displayDate)
  timeTracker()
});
