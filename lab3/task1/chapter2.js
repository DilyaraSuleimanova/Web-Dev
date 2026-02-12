"use strict";


alert("I'm JavaScript!");


alert(3 +
1
+ 2);

alert("Hello");
[1, 2].forEach(alert);

/*alert("Hello")
[1, 2].forEach(alert);
*/


/* VARIABLES */
let message;
message = 'Hello!';

alert(message);

// let user = 'John', age = 25, message_user = 'Hello';
/*let user = 'John',
    age = 25,
    message = 'Hello';
*/

/*let hello = 'Hello world!';
let message;    
---copy 'Hello world' from hello into message---
message = hello;
*/

let apple, APPLE; // apple != APPLE

const BIRTHDAY = '18.04.1982'; 
const age = someCode(BIRTHDAY);
// when const known before execution var-name is capital letters and underscores
// myBirthday = '01.01.2001'; <-- error, can't reassign the constant!

let admin, u_name; 
u_name = "John";
admin = u_name;
alert( admin );

let ourPlanetName = "Earth";
let currentUserName = "John";


/* DATA TYPES */
// no error
let message_ = "hello";
message_ = 123456;

let n = 123;
n = 12.345;

alert( 1 / 0 ); // alert( Infinity );

alert( "not a number" / 2 ); // alert( NaN + 1 ); alert( 3 * NaN ); alert( "not a number" / 2 - 1 ); <== NaN

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = 'can embed another ${str}';
alert(phrase);

let nameFieldChecked = true; 
let isGreater = 4 > 1;
alert( isGreater );

// let age = null;

// let age;
alert(age);
age = undefined;
alert(age);

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

// let name = "Ilya";
// the expression is a number 1
alert( `hello ${1}` ); // hello 1
// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name
// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya


/* INTERACTION: ALERT, PROMPT, CONFIRM*/
age = prompt('How old are you?', 100);
alert('You are ${age} years old!');

let test = prompt("Test", '');

let isBoss = confirm("Are you the boss?");
alert( isBoss );

let name = prompt("What is your name?", "");
alert(name);


/* TYPE CONVERSION */
let value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string

let strs = "123";
alert(typeof strs); // string
let num = Number(strs); // becomes a number 123
alert(typeof num); // number

let ages = Number("an arbitrary string instead of a number");
alert(ages); // NaN, conversion failed
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false


/* BASIC OPERATORS, MATHS */
let x = 1;
x = -x;
alert( x ); // -1, unary negation was applied
let y = 3;
alert( y - x ); // 2, binary minus subtracts values

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 2 ** 2 ); // 2² = 4
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)

let s = "my" + "string";
alert(s); // mystring
alert( '1' + 2 ); // "12"
alert(2 + 2 + '1' ); // "41" and not "221"
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

y = -2;
alert( +y ); // -2
// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";
// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

x = 2 * 2 + 1;
alert( x ); // 5

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert( a ); // 3
alert( c ); // 0

a = b = c = 2 + 2;
alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
c = 2 + 2;
b = c;
a = c;

n = 2;
n = n + 5; // n += 5;
n = n * 2; // n *= 2; or mix both n *= 3 + 5;

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

counter = 1;
a = ++counter; // returns the new value
alert(a); // 2
counter = 1;
a = counter++; // returns the old value (prior to increment)
alert(a); // 1

counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same

counter = 1;
alert( 2 * ++counter ); // 4
counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

/*Bitwise operand
AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/

a = 1, b = 1;
alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value
alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14 
null + 1 // 1 
undefined + 1 // NaN 
" \t \n" - 2 // -2 

a = "1"; // prompt("First number?", 1);
b = "2"; // prompt("Second number?", 2);
alert(a + b); // 12
a = +prompt("First number?", 1);
b = +prompt("Second number?", 2);
alert(a + b); // 3
a = prompt("First number?", 1);
b = prompt("Second number?", 2);
alert(+a + +b); // 3


/* COMPARISON */
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

result = 5 > 4; // assign the result of the comparison
alert( result ); // true

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

alert( true == 1 ); // true
alert( false == 0 ); // true

alert( 0 === false ); // false, because the types are different; !== analogous to !=
//null becomes 0, undefined becomes NaN
alert( null === undefined ); // false
alert( null == undefined ); // true

alert( null > 0 );  // false
alert( null == 0 ); // false, undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else
alert( null >= 0 ); // true 

alert( undefined > 0 ); // false
alert( undefined < 0 ); // false
alert( undefined == 0 ); // false


/* CONDITIONAL BRANCHING: IF, '?' */
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert( 'You are right!' );
if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}

// if (0) is false
// if (1) is true

year = prompt('In which year was the ECMAScript-2015 specification published?', '');
if (year == 2015) {
  alert( 'You guessed it right!' );
} 
else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

year = prompt('In which year was the ECMAScript-2015 specification published?', '');
if (year < 2015) {
  alert( 'Too early...' );
} 
else if (year > 2015) {
  alert( 'Too late' );
} 
else {
  alert( 'Exactly!' );
}

let accessAllowed = (age > 18) ? true : false;

age = prompt('age?', 18);

message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What an unusual age!';
alert( message );

let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');

let result = (a + b < 4) ? 'Below' : 'Over';

message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';


/* LOGICAL OPERATORS */
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let hour = 9;
if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
alert( 1 && 2 && null && 3 ); // null; When all values are truthy, the last value is returned

alert( !true ); // false
alert( !0 ); // true

alert( !!"non-empty string" ); // true; A double NOT !! is sometimes used for converting a value to boolean type
alert( !!null ); // false

alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // first 1, then 2; alert does not return a value

alert(1 && null && 2); // null
alert( alert(1) && alert(2) ); // 1, and then undefined
alert( null || 2 && 3 || 4 ); // 3; && is higher than || => null || 3 || 4 => result is the first truth

// if (!(age >= 14 && age <= 90)) or if (age < 14 || age > 90)

let userName = prompt("Who's there?", '');
if (userName === 'Admin') {
  let pass = prompt('Password?', '');
  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } 
  else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } 
  else {
    alert( 'Wrong password' );
  }
} 
else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} 
else {
  alert( "I don't know you" );
}


/* NULLISH COALESCING OPERATOR '??' */
// result = (a !== null && a !== undefined) ? a : b; or result = a ?? b
let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

firstName = null;
lastName = null;
nickName = "Supercoder";
// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

height = null;
let width = null;
// important: use parentheses
let area = (height ?? 100) * (width ?? 50); // if we omit parentheses, then as * has the higher precedence than ??, it would execute first
alert(area); // 5000

x = (1 && 2) ?? 3; // forbidden to use it with || or && without explicit parentheses.
alert(x); // 2


/* LOOPS: WHILE AND FOR */
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
} // while (i) alert(i--);

i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

i = 0; // we have i already declared and assigned
for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}

i = 0;
for (; i < 3;) {
  alert( i++ );
}

let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // force the exit
  sum += value;
}
alert( 'Sum: ' + sum );

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue; // if true, skip the remaining part of the body
  alert(i); // 1, then 3, 5, 7, 9
}
// No break/continue to the right side of ‘?’

// label using
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // break outer looks upwards for the label named outer and breaks out of that loop.
    // do something with the value...
  }
}

num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...
  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }
  alert( i ); // a prime
}


/* SWITCH */
a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

a = "1";
b = 0;
switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;
  default:
    alert("this doesn't run");
}

a = 3;
switch (a) {
  case 4:
    alert('Right!');
    break;
  case 3: // grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;
  default:
    alert('The result is strange. Really.');
}

let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;
  case '2':
    alert( 'Two' );
    break;
  case 3: // "3" is not strictly equal === to the number 3
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}


/* FUNCTIONS */
function showMessage() {
//   alert( 'Hello everyone!' );
    let message = "Hello, I'm JavaScript!"; // local variable
    alert( message );
}
showMessage();

userName = 'John';
function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessage();

userName = 'John';
function showMessage() {
  userName = "Bob"; // (1) changed the outer variable
  let message = 'Hello, ' + userName;
  alert(message);
}
alert( userName ); // John before the function call
showMessage();
alert( userName ); // Bob, the value was modified by the function

userName = 'John'; // global var
function showMessage() {
  let userName = "Bob"; // declare a local variable
  let message = 'Hello, ' + userName; // Bob
  alert(message);
}
// the function will create and use its own userName
showMessage();
alert( userName ); // John, unchanged, the function did not access the outer variable

function showMessage(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}
showMessage('Ann', 'Hello!'); // Ann: Hello!
showMessage('Ann', "What's up?"); // Ann: What's up? 

function showMessage(from, text) {
  from = '*' + from + '*'; // make "from" look nicer
  alert( from + ': ' + text );
}
let from = "Ann";
showMessage(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}
showMessage("Ann"); // Ann: no text given

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

function showMessage(text) {
  if (text === undefined) { // if the parameter is missing
    text = 'empty message'; // or alert(count ?? "unknown"); or text = text || 'empty';
  }
  alert(text);
}
showMessage(); // empty message

function sum(a, b) {
  return a + b; // Never add a newline between return and the value
}
result = sum(1, 2);
alert( result ); // 3

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }
  alert( "Showing you the movie" );
}

//One function – one action
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);  // a prime
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}


/* FUNCTION EXPRESSION */
let sayHi = function() {
  alert( "Hello" );
};

function sayHi() {   // (1) create
  alert( "Hello" );
}
let func = sayHi;    // (2) copy
func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  alert( "You agreed." );
}
function showCancel() {
  alert( "You canceled the execution." );
}
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
// or
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

age = prompt("What is your age?", 18);
let welcome;
if (age < 18) {
  welcome = function() {
    alert("Hello!");
  };

} else {
  welcome = function() {
    alert("Greetings!");
  };
}
welcome();
// or
age = prompt("What is your age?", 18);
welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };
welcome();


/* ARROW FUNCTION */
let sum = (a, b) => a + b;
alert( sum(1, 2) ); // 3

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
alert( double(3) ); // 6

age = prompt("What is your age?", 18);
welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");
welcome();

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
alert( sum(1, 2) ); // 3

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
//or
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
