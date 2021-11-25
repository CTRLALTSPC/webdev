// index.js 

// var number = 5;
// let name = "Blaise";

// number = 12;  // executed from the top down so the number would print 12 

// // writing to the document
// document.writeln(name + number);
// alert("Hello World");  -- this will be ignored --

let hasJob = true; 
    if (hasJob) {
         // have a job
      showMessage("I am employed, thanks");
    } else {
        // I need a job  
      showMessage("I am looking for a position, thanks");
    }

  let today = new Date(); // assign today to an object which is new date  
  let dayOfWeek = today.getDay();  // 0 represents sunday
  if (dayOfWeek === 0 || dayOfWeek === 6) { // and = && or || 
    showMessage("Since it is the weekend, please be patient.");
  }

  //functions ; small piece of code over and over again
  // as of 11/25 - added forminfo element into css under contact to add in message in section
  function showMessage(message) { // pass in message to function
    const formInfo = document.getElementById("formInfo"); //search through document for the first element that has a name or an id; form info 
    formInfo.innerHTML = "<p>" + message + "</p>";
   // document.writeln("<p>" + message + "</p>");  // to change things later, then theres only one spot to change
   // -get rid of-  document.writeln("<hr/>");  // hr creates a horizontal line on the page
  }

  //formInfo. - cant use because it doesnt exist, neither is it an actual html element, because when
  // we create a function, a scope is being created which means that all the code between the braces is private to itself 
  // if we wanted to add something else before it, you can simply add it before the function 