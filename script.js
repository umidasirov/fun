var button = document.getElementById('myButton');

function moveButton() {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  
  button.style.left = x + 'px';
  button.style.top = y + 'px';
}
let button2 = document.getElementById('ButtonYes')
button2.addEventListener('click', () =>{
    alert("hahahahahaahahahaahahh" + " look console")
})
button.addEventListener('click', () =>{
    alert("good job")
})
console.log("wrote by UMID");
setInterval(moveButton, 300);
