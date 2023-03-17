function scuberGreetingForFeet(distance){
  // Write your code here!
  //let distance - why didn't I have to declare this first?
  if (distance <= 400) {
    return "This one is on me!"
  } else if(distance<2000) {
    return "That will be twenty bucks."
  } else if(distance<2500) {
    return "I will gladly take your thirty bucks."
  }
    else if(distance>2500) {
      return "No can do."
    }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

    // Write your code here!
  
  


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default :
      return "Bye."

  }
}