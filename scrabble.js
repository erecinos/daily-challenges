/*
# Scrabble Score

Write a program that, given a word, computes the scrabble score for that word.

## Letter Values

You'll need these:

```plain
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

## Examples
"cabbage" should be scored as worth 14 points:

- 3 points for C
- 1 point for A, twice
- 3 points for B, twice
- 2 points for G
- 1 point for E

And to total:

- `3 + 2*1 + 2*3 + 2 + 1`
- = `3 + 2 + 6 + 3`
- = `5 + 9`
- = 14

### Instructions
1. Review the description, and create a scopre method that returns the score based on the rules above.
2. Once you have a passing test suite, add your code to your daily-challenges repo
3. Link us to your scrabble.js file on Slack.

*/

function score(string) {

	var tally = 0;

	if (string != null) {

	var strArray = string.toUpperCase().split('');

		for (var i = 0; i < strArray.length; i++) {

		if ( (/[AEIOULNRST]/).test(strArray[i]) ) {
			tally += 1;
		}
		if ( (/[DG]/).test(strArray[i]) ) {
			tally += 2;
		}
		if ( (/[BCMP]/).test(strArray[i]) ) {
			tally += 3;
		}
		if ( (/[FHVWY]/).test(strArray[i]) ) {
			tally += 4;
		}
		if ( (/[K]/).test(strArray[i]) ) {
			tally += 5;
		}
		if ( (/[JX]/).test(strArray[i]) ) {
			tally += 8;
		}
		if ( (/[QZ]/).test(strArray[i]) ) {
			tally += 10;
		}
  }

}

	string = tally;
	return string;

}

/// -- do not edit below ---


describe('Scrabble', function() {
  it('scores an empty word as zero',function() {
    expect(score('')).toEqual(0);
  });

  it('scores a null as zero',function() {
    expect(score(null)).toEqual(0);
  });

  it('scores a very short word',function() {
    expect(score('a')).toEqual(1);
  });

  it('scores the word by the number of letters',function() {
    expect(score('street')).toEqual(6);
  });

  it('scores more complicated words with more',function() {
    expect(score('quirky')).toEqual(22);
  });

  it('scores case insensitive words',function() {
    expect(score('OXYPHENBUTAZONE')).toEqual(41);
  });
});
