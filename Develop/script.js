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

  // $('.time-block').each(function(){})
    // let timeBlock = parseInt($(this).attr('id'))
    // console.log(timeBlock)
    let hour9 = $('#9')
    let hour10 = $('#10')
    let hour11 = $('#11')
    let hour12 = $('#12')
    let hour1 = $('#13')
    let hour2 = $('#14')
    let hour3 = $('#15')
    let hour4 = $('#16')
    let hour5 = $('#17')
    let hourCount = [9,10,11,12,13,14,15,16,17]
    let hoursArray = [hour9,hour10,hour11,hour12,hour1,hour2,hour3,hour4,hour5]
    let exactHour = dayjs().format('H')
     for (let i = 0; i < hoursArray.length; i++) {
      let timeBlock = parseInt($(hoursArray[i]).attr('id'))
      console.log(timeBlock)
      if(hourCount[i] < exactHour) {
        console.log()
        $(hoursArray[i]).removeClass('future')
        $(hoursArray[i]).removeClass('present')
        $(hoursArray[i]).addClass('past')
        } else if(hourCount[i] == exactHour){
          $(hoursArray[i]).removeClass('future')
          $(hoursArray[i]).removeClass('past')
          $(hoursArray[i]).addClass('present') 
        } else{
          $(hoursArray[i]).removeClass('.present')
          $(hoursArray[i]).removeClass('.past')
          $(hoursArray[i]).addClass('future')  
        }

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


  setInterval(function(){
    $('#currentDay').text(dayjs().format('MMM,D,YYYY h:mm:ss'))
  },10)



});
