//https://www.reddit.com/r/dailyprogrammer/comments/3r7wxz/20151102_challenge_239_easy_a_game_of_threes/

// long version
function threes(number){

  if (number > 1){

      if (number % 3 === 0){
      console.log (`${number} 0`);
      threes(number/3);
    } else if (number % 3 === 1) {
      console.log (`${number} -1`)
      threes(number - 1);
    } else {
      console.log(`${number} + 1`);
      threes(number + 1);
    }
  } else {
    console.log('1');
  }
}

// short version
function threes(x) {
    while (x > 1) {
        var op = (-x - 1) % 3 + 1;
        console.log(x + ' ' + op);
        x = (x + op) / 3;
    }
    console.log(1);
}
