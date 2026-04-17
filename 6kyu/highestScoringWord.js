/**
 Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

function high(x) {
  const words = x.split(' ');
  
  const scores = words.map(word =>
    [...word].reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0)
  );
  
  const maxScore = Math.max(...scores);
  
  return words[scores.indexOf(maxScore)];
}

/**
 for loop solution:
 function high(x) {
  let maxScore = 0;
  let bestWord = '';

  for (const word of x.split(' ')) {
    const score = [...word].reduce((sum, c) => sum + c.charCodeAt(0) - 96, 0);
    
    if (score > maxScore) {
      maxScore = score;
      bestWord = word;
    }
  }

  return bestWord;
}
 */