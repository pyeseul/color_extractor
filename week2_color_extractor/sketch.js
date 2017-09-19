// Written by Yeseul Song based on Daniel Shiffman's example code for Programming AtoZ class at ITP.
// Dan Shiffman: https://github.com/shiffman/
// Yeseul Song: http://github.com/pyeseul/

// Here is where we are working with a regex
function process(txt) {

  // A regex to match hex color code
  // Make sure we have /g
  var regex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
  //var regex = /href\s*=\s*['"](.*?)['"].*?>(.*?)<\/a>/gi;

  // Fill this array
  var colors = [];  
  // We have to use exec and loop because of the capturing group
  var match = regex.exec(txt);
  //console.log(match);
  while (match != null) {
    // Making an object out of the two captured groups
    var color = match[0];
    colors.push(color);    
    match = regex.exec(txt);
  }

  for (var i = 0; i < colors.length; i++) {
    $("#container").append('<div id=c' + i + '>'+colors[i]+'</div>');
    $("#c" + i).css({'background-color':colors[i]});
  }
}


/***************************************************/
/* Everything below just handles the text input ****/
/***************************************************/


// Many DOM elements
var input, button;

// Checkboxes and regex input
var regexInput, globalCheck, caseCheck;

// An array to keep track of all the new DOM elements being added
var paragraphs = [];

var inputText = '';

function setup() {

  noCanvas();

  // Selecting the text field and button
  input = select('#textinput');
  button = select('#submit');
  // What to do when button pressed
  button.mousePressed(handleInput);

  regexInput = select('#regex');
  globalCheck = select('#global');
  caseCheck = select('#case');
}

// When the file is loaded
function fileLoaded(data) {
  var txt = data.join('\n');

  input.html(txt);
  // Note the use of a function that will "process" the text
  // This is b/c the text might come in a number of different ways
  // process(txt);
}

// Handle the text input field
function handleInput() {
  process(input.value());
}
