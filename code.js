// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Create your own Madlibs story!

let firstName = prompt("What is your name?");
let emotion = prompt("How are you feeling?");
let place = prompt("What is a place you like to go to? ");
let clothing = prompt("What is a piece of clothing?");
let animal= prompt("Name a kind of animal")


let madlib=
(firstName && emotion && place && clothing && animal)

if (madlib){
document.write("<h3>Here is my first madlib, enjoy!<br></h3>");
document.write(
  "<p>My name is <strong>"+
  firstName +
  " </strong>,today I woke up<strong> "+
   emotion +
  "</strong> this cold morning,"
);
document.write(
  " I decided to go out, I went to the <strong>"+
  place +
  "</strong>.<br> When I got there, it started to snow and I realized I forgot to bring my <strong>" +
  clothing +
  "</strong> I found a bench and decided to sit,<br> while I sat down a <strong>" +
  animal +
  "</strong> came by and started jumping all over me. I decided maybe I should go back home. "
);
} else {
  document.write(" You did not input all values, refresh the page and try again")
}


