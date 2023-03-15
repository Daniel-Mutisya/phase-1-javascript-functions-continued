// code your solution here
// a) Define saturdayFun function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // b) Define mondayWork function expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // c) Define wrapAdjective function
  function wrapAdjective(highlight = "*" ,emphatic= "You are *a hard worker*!"){
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }
  
  // Create two functions using wrapAdjective function
  const highlightWithStars = wrapAdjective("*");
  const highlightWithBars = wrapAdjective("||");
  
  // Test the functions
  console.log(saturdayFun()); // This Saturday, I want to roller-skate!
  console.log(saturdayFun("paint the house")); // This Saturday, I want to paint the house!
  
  console.log(mondayWork()); // This Monday, I will go to the office.
  console.log(mondayWork("work from home")); // This Monday, I will work from home.
  
  console.log(highlightWithStars("bold")); // You are *bold*!
  console.log(highlightWithBars("cool")); // You are ||cool||!
  