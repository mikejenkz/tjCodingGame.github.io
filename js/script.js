var spot = "content1"
var type = "instruction"

var imageScript = "url('./resources/streetlamp.png')"
var allImages = [[imageScript],[imageScript],[imageScript],[imageScript],[imageScript]]
var page = 0
document.getElementById('grid3').style.backgroundImage = allImages[page]
var timer = false


var menu = [

["The year is 2148, the technology meant to send mankind into its golden age instead created\
 the world you see now, and in this world, code is all that \
matters. Those who know how to code control the security forces,\
the money, the food production plants the entire world."],
["A faction known as shadow-coders controls everything, \
you’re not sure how many times you’ve tried to stop them. \
The shadow-coders have caught you in every attempt you’ve made in the past, \
and each time given you a fate worse than death: \
technical memory wipe. But you must try again.."], 
[["Instructions: In order to survive in this world, you have to re-learn the most fundamental coding skills, starting with strings. Strings are how text, words, and sentences are represented and controlled in code. print() allows you to project your code into the physical world. Write your code in the terminal and when you are done, run your program."], [" "], ["Example: print('this text in quotations is a string, and it will be printed to the physical world')"]],
[["PROBLEM ONE"], [" "], ["Problem sets: intro to string data type, defining strings, printing strings."], [" "], ["Tutorial Problem 1: Write a program to say 'Hello World' and print it into the physical world."]]
]
var pages = {1: [menu[0],imageScript[0],type],
2: [menu[1],imageScript[1],type],
2: [menu[2],imageScript[2],type],
3: [menu[3],imageScript[3],type],

}



function nextPage() {
    i = 0, j, item, html,
    e = document.getElementById(spot)
    doItem();
}

var speedChar = 40


var i = 0, j, item, html,
e = document.getElementById(spot);

function doChar() {
    e.innerHTML += item[j++];
    if (j < item.length) {
      setTimeout(doChar, speedChar);
    }
    else {
      e.innerHTML += "<br/>";
      doItem();
    }
  };

function doItem() {
    
    if (i < menu[page].length) {
      item = menu[page][i++];
      j = 0;
      doChar();
    }
    return new Promise(resolve => { 
        setTimeout(() => { 
        resolve(timer = true); 
    }, speedChar*item.length);
    })
    
  };
doItem();




function myFunction() {
    
    if ((timer == true) && (page+1 < menu.length)) {
        page++
        document.getElementById(spot).innerHTML = ""
        document.getElementById('grid3').style.backgroundImage = allImages[page]
        timer=false
        speedChar = 40
        nextPage()
    }

    else {
        speedChar = 1
    }

    }

function myFunctionBack() {

    if(timer == true && page != 0) {
        page--
        document.getElementById(spot).innerHTML = menu[page]
        document.getElementById('grid3').style.backgroundImage = allImages[page]
    }
}