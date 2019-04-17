setInterval(function() {
  let date = new Date();
  liveClock(date);
}, 1000);

function liveClock(date){
  let sec = document.querySelector('.sHand').style;
  let min = document.querySelector('.mHand').style;
  let hour = document.querySelector('.hHand').style;

  sec.transform = 'rotate(' + date.getSeconds() * 6 + 'deg)';
  min.transform = 'rotate(' + date.getMinutes() * 6 + 'deg)';
  hour.transform = 'rotate(' + (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)';
}



























// setInterval(function() {
//   let date = new Date();
//   updateTime(date);
//   // updateClock(date);
// }, 1000);
//
// function updateTime(date){
//   let timeDiv = document.querySelector('#clock');
//   let time = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
//   timeDiv.innerHTML = time;
// }
