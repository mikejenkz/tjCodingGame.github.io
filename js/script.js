var spot = "content1"
var imageScript = "url('../resources/streetlamp.png')"
var allImages = [[imageScript],[imageScript],[imageScript]]
var page = 0
document.getElementById('grid3').style.backgroundImage = allImages[page]
var timer = false


var menu = [[
"The year is 2148, the technology meant to send mankind into its golden age instead created\
 the world you see now, and in this world, code is all that \
matters. Those who know how tocode control the security forces,\
the money, the food production plants the entire world."
],["A faction known as shadow-coders controls everything,\
you’re not sure how many times you’ve tried to stop them.\
The shadow-coders have caught you in every attempt you’ve made in the past,\
and each time given you a fate worse than death:\
technical memory wipe. But you must try again.."]];



 var i = 0, j, item, html,
  e = document.getElementById(spot);
  doChar = function() {
    e.innerHTML += item[j++];
    if (j < item.length) {
      setTimeout(doChar, 40);
    }
    else {
      e.innerHTML += "<br/>";
      doItem();
    }
  },
  doItem = function() {
    
    if (i < menu[page].length) {
      item = menu[page][i++];
      j = 0;
      doChar();
    }
    return new Promise(resolve => { 
        setTimeout(() => { 
        resolve(timer = true); 
    }, 50*item.length);
    })
    
  };
doItem();




function myFunction() {
    if (timer == true) {
        page++
        document.getElementById(spot).innerHTML = ""
        document.getElementById(spot).style.backgroundImage = allImages[page]
        timer=false
        doItem();
    }

    }

function myFunctionBack() {
    document.getElementById('second').innerHTML = "The year is 2148, the technology meant to send mankind into its golden age instead created the world you see now, and in this world, code is all that matters. Those who know how to code control the security forces, the money, the food production plants–the entire world."
    document.getElementById('second').id = "first"
}