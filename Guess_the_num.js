get_random_number = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  let random = get_random_number(1, 100);
  let guessNum;
  let chance = 0;
  
  while (guessNum !== random){
    guessNum = prompt("please provide input ");
    guessNum = Number.parseInt(guessNum);
    chance = chance + 1;
  
    if (guessNum == random) {
      console.log(" hurrey you have guessd the correct number ");
      console.log("your score is ", 100 - chance);
      
    } else if (guessNum > random) {
      console.log("your num is higher then the guessd number ");
      
    } else if (guessNum < random) {
      console.log("you have guessed the lesser number ");
      
    } else {
      console.log("please enter a valid number ");
      
    }
  }