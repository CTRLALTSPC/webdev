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

  let today = new Date("11/01/2021"); // assign today to an object which is new date  
  let dayOfWeek = today.getDay();  // 0 represents sunday
  if (dayOfWeek === 0 || dayOfWeek === 6) { // and = && or || 
    showMessage("Since it is the weekend, please be patient.");
  }

  //functions ; small piece of code over and over again

  function showMessage(message) { // pass in message to function
    document.writeln("<p>" + message + "</p>");  // to change things later, then theres only one spot to change
    document.writeln("<hr/>");  // hr creates a horizontal line on the page
  }