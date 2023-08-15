document.addEventListener("DOMContentLoaded", function (event)  {
     
});
const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")


let count = 0;
function startCount() {            
count += 1;
counter.textContent = count;
};
intervalID = setInterval(startCount, 1000);

const pause = document.getElementById("pause");
pause.addEventListener("click", function() {
    clearInterval(intervalID);
})
const buttons = document.getElementsByTagName("button");
let buttonsArray = []
for(let i = 0; i < buttons.length; i++) {
    if(buttons[i].id != "pause") {
        buttonsArray.push(buttons[i])
    }
}
function disableButton(button) {
    button.setAttribute("disabled", true)
}
pause.addEventListener("click", function(){
clearInterval(intervalID);
buttonsArray.forEach(button => disableButton(button));
    })

function replacePause(){
        pause.textContent = "resume"   
}
pause.addEventListener("click", function () {
    setTimeout(intervalID)
    buttonsArray.forEach(button => disableButton(button));
    replacePause()
});
function enableButton(button) {
    button.removeAttribute("disabled", false)
}


function increment(){
    count++;
    counter.textContent = count
}
function decrement() {
    count--;
    counter.textContent = count;
}





plus.addEventListener("click", increment)
minus.addEventListener("click", decrement)

     

    



















