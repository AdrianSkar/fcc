let username = "JackOfAllTrades";
let userCheck = /[a-zA-Z]\d{2,}$|^[a-zA-Z]{2,}\d*$/; // Change this line
let result = userCheck.test(username);


/*
Your regex should match JACK

Passed
Your regex should not match J

Passed
Your regex should match Jo

Passed
Your regex should match Oceans11

Passed
Your regex should match RegexGuru

Passed
Your regex should not match 007

Passed
Your regex should not match 9

Passed
Your regex should not match A1

Passed
Your regex should not match BadUs3rnam3

Passed
Your regex should match Z97

Passed
Your regex should not match c57bT3
*/

/// Hints/solutions:

userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
/* 
^ - start of input
[a - z] - first character is a letter
[a - z] + - following characters are letters;
\d * $ - input ends with 0 or more digits
	| - or
	^ [a - z] - first character is a letter;
\d\d + - following characters are 2 or more digits;
$ - end of input; 
*/

userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;

/*
^ - start of input
[a-z] - first character is a letter
[0-9]{2,0} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input
*/