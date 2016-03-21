var leftdie = document.getElementById('leftdienumber');
var rightdie = document.getElementById('rightdienumber');
var rollbutton = document.getElementById('rollbutton');
var footerdate = document.getElementById('footerdate');
var title = document.getElementById('title');

var dicegame = {
  starttime: new Date(),
  currentround: 1,
  history: [],
  roll: function roll(){
    leftdienumber.innerHTML = Math.floor((Math.random() * 6)) + 1;
    rightdienumber.innerHTML = Math.floor((Math.random() * 6)) + 1
  }
}

rollbutton.addEventListener('click', function(){
  dicegame.roll();
  if((Number(leftdienumber.innerHTML) + Number(rightdienumber.innerHTML) !== 7) ||
      (Number(leftdienumber.innerHTML) + Number(rightdienumber.innerHTML) !== 11)) {
        title.innerHTML = "Try Again";
      }
  if((Number(leftdienumber.innerHTML) + Number(rightdienumber.innerHTML) === 7) ||
      (Number(leftdienumber.innerHTML) + Number(rightdienumber.innerHTML) === 11)) {
        title.innerHTML = "Winner!";
      } 
})

console.log(title.innerHTML);

footerdate.innerHTML = new Date();
