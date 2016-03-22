var starttime = new Date()
var leftdie = document.getElementById('leftdienumber');
var rightdie = document.getElementById('rightdienumber');
var rollbutton = document.getElementById('rollbutton');
var footerdate = document.getElementById('footerdate');
var title = document.getElementById('title');
var winnerstats = document.getElementById('winnerstats');
var leftnumber;
var rightnumber;
var leftpip1 = document.getElementById('leftpip1');
var leftpip2 = document.getElementById('leftpip2');
var leftpip3 = document.getElementById('leftpip3');
var leftpip4 = document.getElementById('leftpip4');
var leftpip5 = document.getElementById('leftpip5');
var leftpip6 = document.getElementById('leftpip6');
var rightpip1 = document.getElementById('rightpip1');
var rightpip2 = document.getElementById('rightpip2');
var rightpip3 = document.getElementById('rightpip3');
var rightpip4 = document.getElementById('rightpip4');
var rightpip5 = document.getElementById('rightpip5');
var rightpip6 = document.getElementById('rightpip6');

var dicegame = {
  starttime: starttime.getTime(),
  currentround: 0,
  history: [],
  roll: function roll(){
    var leftvalue = Math.floor((Math.random() * 6)) + 1;
    var rightvalue = Math.floor((Math.random() * 6)) + 1;
    leftnumber = leftvalue;
    rightnumber = rightvalue;
    if (leftvalue === 1){
      leftpip1.style.display = "block";
      leftpip1.style.top = "10px";
      leftpip1.style.left = "26px";
      leftpip2.style.display = "none";
      leftpip3.style.display = "none";
      leftpip4.style.display = "none";
      leftpip5.style.display = "none";
      leftpip6.style.display = "none";
    }
    if (leftvalue === 2){
      leftpip1.style.display = "block";
      leftpip1.style.top = "-5px";
      leftpip1.style.left = "11px";
      leftpip2.style.display = "block";
      leftpip2.style.top = "12px";
      leftpip2.style.left = "40px";
      leftpip3.style.display = "none";
      leftpip4.style.display = "none";
      leftpip5.style.display = "none";
      leftpip6.style.display = "none";
    }
    if (leftvalue === 3){

      leftpip1.style.display = "block";
      leftpip1.style.top = "-7px";
      leftpip1.style.left = "9px";
      leftpip2.style.display = "block";
      leftpip2.style.top = "14px";
      leftpip2.style.left = "43px";
      leftpip3.style.display = "block";
      leftpip3.style.top = "-17px";
      leftpip3.style.left = "26px";
      leftpip4.style.display = "none";
      leftpip5.style.display = "none";
      leftpip6.style.display = "none";
    }
    if (leftvalue === 4){
      leftpip1.style.display = "block";
      leftpip1.style.top = "-5px";
      leftpip1.style.left = "11px";
      leftpip2.style.display = "block";
      leftpip2.style.top = "12px";
      leftpip2.style.left = "40px";
      leftpip3.style.display = "block";
      leftpip3.style.top = "-33px";
      leftpip3.style.left = "40px";
      leftpip4.style.display = "block";
      leftpip4.style.top = "-17px";
      leftpip4.style.left = "11px";
      leftpip5.style.display = "none";
      leftpip6.style.display = "none";
    }
    if (leftvalue === 5){
      leftpip1.style.display = "block";
      leftpip1.style.top = "-7px";
      leftpip1.style.left = "9px";
      leftpip2.style.display = "block";
      leftpip2.style.top = "14px";
      leftpip2.style.left = "43px";
      leftpip3.style.display = "block";
      leftpip3.style.top = "-35px";
      leftpip3.style.left = "43px";
      leftpip4.style.display = "block";
      leftpip4.style.top = "-15px";
      leftpip4.style.left = "9px";
      leftpip5.style.display = "block";
      leftpip5.style.top = "-45px";
      leftpip5.style.left = "26px";
      leftpip6.style.display = "none";
    }
    if (leftvalue === 6){
      leftpip1.style.display = "block";
      leftpip1.style.top = "-8px";
      leftpip1.style.left = "11px";
      leftpip2.style.display = "block";
      leftpip2.style.top = "14px";
      leftpip2.style.left = "41px";
      leftpip3.style.display = "block";
      leftpip3.style.top = "-36px";
      leftpip3.style.left = "41px";
      leftpip4.style.display = "block";
      leftpip4.style.top = "-15px";
      leftpip4.style.left = "11px";
      leftpip5.style.display = "block";
      leftpip5.style.top = "-46px";
      leftpip5.style.left = "41px";
      leftpip6.style.display = "block";
      leftpip6.style.top = "-60.5px";
      leftpip6.style.left = "11px";
    }
    if (rightvalue === 1){
      rightpip1.style.display = "block";
      rightpip1.style.top = "10px";
      rightpip1.style.left = "26px";
      rightpip2.style.display = "none";
      rightpip3.style.display = "none";
      rightpip4.style.display = "none";
      rightpip5.style.display = "none";
      rightpip6.style.display = "none";
    }
    if (rightvalue === 2){
      rightpip1.style.display = "block";
      rightpip1.style.top = "-5px";
      rightpip1.style.left = "11px";
      rightpip2.style.display = "block";
      rightpip2.style.top = "12px";
      rightpip2.style.left = "40px";
      rightpip3.style.display = "none";
      rightpip4.style.display = "none";
      rightpip5.style.display = "none";
      rightpip6.style.display = "none";
    }
    if (rightvalue === 3){
      rightpip1.style.display = "block";
      rightpip1.style.top = "-7px";
      rightpip1.style.left = "9px";
      rightpip2.style.display = "block";
      rightpip2.style.top = "14px";
      rightpip2.style.left = "43px";
      rightpip3.style.display = "block";
      rightpip3.style.top = "-17px";
      rightpip3.style.left = "26px";
      rightpip4.style.display = "none";
      rightpip5.style.display = "none";
      rightpip6.style.display = "none";
    }
    if (rightvalue === 4){
      rightpip1.style.display = "block";
      rightpip1.style.top = "-5px";
      rightpip1.style.left = "11px";
      rightpip2.style.display = "block";
      rightpip2.style.top = "12px";
      rightpip2.style.left = "40px";
      rightpip3.style.display = "block";
      rightpip3.style.top = "-33px";
      rightpip3.style.left = "40px";
      rightpip4.style.display = "block";
      rightpip4.style.top = "-17px";
      rightpip4.style.left = "11px";
      rightpip5.style.display = "none";
      rightpip6.style.display = "none";
    }
    if (rightvalue === 5){
      rightpip1.style.display = "block";
      rightpip1.style.top = "-7px";
      rightpip1.style.left = "9px";
      rightpip2.style.display = "block";
      rightpip2.style.top = "14px";
      rightpip2.style.left = "43px";
      rightpip3.style.display = "block";
      rightpip3.style.top = "-35px";
      rightpip3.style.left = "43px";
      rightpip4.style.display = "block";
      rightpip4.style.top = "-15px";
      rightpip4.style.left = "9px";
      rightpip5.style.display = "block";
      rightpip5.style.top = "-45px";
      rightpip5.style.left = "26px";
      rightpip6.style.display = "none";
    }
    if (rightvalue === 6){
      rightpip1.style.display = "block";
      rightpip1.style.top = "-8px";
      rightpip1.style.left = "11px";
      rightpip2.style.display = "block";
      rightpip2.style.top = "14px";
      rightpip2.style.left = "41px";
      rightpip3.style.display = "block";
      rightpip3.style.top = "-36px";
      rightpip3.style.left = "41px";
      rightpip4.style.display = "block";
      rightpip4.style.top = "-15px";
      rightpip4.style.left = "11px";
      rightpip5.style.display = "block";
      rightpip5.style.top = "-46px";
      rightpip5.style.left = "41px";
      rightpip6.style.display = "block";
      rightpip6.style.top = "-60.5px";
      rightpip6.style.left = "11px";
    }
  }
}

rollbutton.addEventListener('mousedown', function mounseDown(){
  rollbutton.style.color = "white";
  rollbutton.style["background-color"] = "#534D56";
})

rollbutton.addEventListener('mouseup', function mouseUp(){
  rollbutton.style.color = "black";
  rollbutton.style["background-color"] = "#F8F1FF";

})

rollbutton.addEventListener('click', function buttonClick(){
  dicegame.roll();
  var sum = Number(leftnumber) + Number(rightnumber);
  if((sum !== 7) ||
      (sum !== 11)) {
        title.innerHTML = "Try Again";
        winnerstats.innerHTML = "";
        dicegame.currentround = dicegame.currentround + 1;
      }
  if((sum === 7) ||
      (sum === 11)) {
        dicegame.history.push({
          rounds: dicegame.currentround,
          time: ((new Date().getTime() - starttime)/1000)
        })
        console.log(dicegame.history);
        title.innerHTML = "Winner!";
        winnerstats.innerHTML = "(It took you " + dicegame.currentround + " tries " + "and " + ((new Date().getTime() - starttime)/1000) + " seconds)"
        dicegame.currentround = 0;
        starttime = new Date().getTime();
      };
})

footerdate.innerHTML = "Game Started " + starttime.getFullYear() + "-" + (starttime.getMonth()+1) + "-" + starttime.getDate() + " at " + starttime.getHours() + ":" + starttime.getMinutes()
