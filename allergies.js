/*
# Allergies

Write a program that, given a person's allergy score, can tell them whether or not they're allergic to a given item, and their full list of allergies.

An allergy test produces a single numeric score which contains the
information about all the allergies the person has (that they were
tested for).

The list of items (and their value) that were tested are:

* eggs (1)
* peanuts (2)
* shellfish (4)
* strawberries (8)
* tomatoes (16)
* chocolate (32)
* pollen (64)
* cats (128)

So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

Now, given just that score of 34, your program should be able to say:

- Whether Tom is allergic to any one of those allergens listed above.
- All the allergens Tom is allergic to.


### Instructions
1. Review the description, and create a Allergies class that has a list method and allergicTo.
2. Once you have a passing test suite, add your code to your daily-challenges repo
3. Link us to your allergies.js file on Slack.

*/

var Allergies = function(score){
	this.score = score % 256;
};

Allergies.prototype.list = function(){

	var set = new Set();
	var array = [];

	while (this.score > 0) {
		if (this.score >= 128) {
			set.add('cats');
			this.score = this.score - 128;
		}
		if (this.score >= 64) {
			set.add('pollen');
			this.score = this.score - 64;
		}
		if (this.score >= 32) {
			set.add('chocolate');
			this.score = this.score - 32;
		}
		if (this.score >= 16) {
			set.add('tomatoes');
			this.score = this.score - 16;
		}
		if (this.score >= 8) {
			set.add('strawberries');
			this.score = this.score - 8;
	 	}
		if (this.score >= 4) {
			set.add('shellfish');
			this.score = this.score - 4;
		}
		if (this.score >= 2) {
			set.add('peanuts');
			this.score = this.score - 2;
		}
		if (this.score >= 1) {
			set.add('eggs');
			this.score = this.score - 1;
		}
	}
	console.log(set);
	return Array.from(set).reverse();
};

Allergies.prototype.allergicTo = function(food){

	if (this.score > 0) {
		return true;
	}
		return false;

};


/// -- do not edit below ---


describe('Allergies',function() {

  it('no allergies at all', function() {
    var allergies = new Allergies(0);
    expect(allergies.list()).toEqual([]);
  });

  it('allergies to eggs', function() {
    var allergies = new Allergies(1);
    expect(allergies.list()).toEqual([ 'eggs' ]);
  });

  it('allergies to peanuts', function() {
    var allergies = new Allergies(2);
    expect(allergies.list()).toEqual([ 'peanuts' ]);
  });

  it('allergies to strawberries', function() {
    var allergies = new Allergies(8);
    expect(allergies.list()).toEqual([ 'strawberries' ]);
  });

  it('allergies to eggs and peanuts', function() {
    var allergies = new Allergies(3);
    expect(allergies.list()).toEqual([ 'eggs', 'peanuts' ]);
  });

  it('allergies to more than eggs but not peanuts', function() {
    var allergies = new Allergies(5);
    expect(allergies.list()).toEqual([ 'eggs', 'shellfish' ]);
  });

  it('allergic to lots of stuff', function() {
    var allergies = new Allergies(248);
    expect(allergies.list()).toEqual(['strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
  });

  it('allergic to everything', function() {
    var allergies = new Allergies(255);
    expect(allergies.list()).toEqual(['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
  });

  it('no allergic means not allergic', function() {
    var allergies = new Allergies(0);
    expect(allergies.allergicTo('peanuts')).toEqual(false);
    expect(allergies.allergicTo('cats')).toEqual(false);
    expect(allergies.allergicTo('strawberries')).toEqual(false);
  });

  it('allergic to eggs', function() {
    var allergies = new Allergies(1);
    expect(allergies.allergicTo('eggs')).toEqual(true);
  });

  it('allergic to eggs and other things', function() {
    var allergies = new Allergies(5);
    expect(allergies.allergicTo('eggs')).toEqual(true);
  });

  it('ignore non allergen score parts', function() {
    var allergies = new Allergies(509);
    expect(allergies.list()).toEqual(['eggs', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
  });
});
