// https://www.reddit.com/r/dailyprogrammer/comments/1ystvb/022414_challenge_149_easy_disemvoweler/

// long way
function disemvoweler(string) {
  string = string.split(' ').join('');
  let remainingVowels = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    for (var j = 0; j < string.length; j++) {
      if (vowels[i] === string.charAt(j)) {
        remainingVowels.push(vowels[i]);
        string = string.split(string[j]).join('');
      }
    }
  }
}

// shorter way using regex
function disemvowel(string) {
  console.log(string.match(/[^aeiou ]/g).join(""));
  console.log(string.match(/[aeiou]/g).join(""));
}
