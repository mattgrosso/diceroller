var starttime = new Date()
var leftdie = document.getElementById('leftdienumber');
var rightdie = document.getElementById('rightdienumber');
var rollbutton = document.getElementById('rollbutton');
var footerdate = document.getElementById('footerdate');
var title = document.getElementById('title');
var winnerstats = document.getElementById('winnerstats');

var dicegame = {
  starttime: starttime.getTime(),
  currentround: 0,
  history: [],
  roll: function roll(){
    leftdienumber.innerHTML = Math.floor((Math.random() * 6)) + 1;
    rightdienumber.innerHTML = Math.floor((Math.random() * 6)) + 1
  }
}

rollbutton.addEventListener('mousedown', function(){
  rollbutton.style.color = "white";
  rollbutton.style["background-color"] = "black";
})

rollbutton.addEventListener('mouseup', function(){
  rollbutton.style.color = "black";
  rollbutton.style["background-color"] = "white";

})

rollbutton.addEventListener('click', function(){
  dicegame.roll();
  var sum = Number(leftdienumber.innerHTML) + Number(rightdienumber.innerHTML);
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

footerdate.innerHTML = "Game Started " + starttime.getFullYear() + "-" + starttime.getMonth() + "-" + starttime.getDate() + " at " + starttime.getHours() + ":" + starttime.getMinutes()
