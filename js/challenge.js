    document.addEventListener("DOMContentLoaded", () => {
        intervalID = setInterval(startCount, 1000);
    });
//defining variables

    let paused = false
    const counter = document.getElementById("counter")
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    const commentForm = document.getElementById("comment-form")
    const commentInput = document.getElementById("comment-input")
    const pause = document.getElementById("pause");

    let count = 0;
    let intervalID;

//start timer
    function startCount() {            
    count +=1;
    counter.textContent = count;
};
//creating array of all buttons exc pause

    const buttons = document.getElementsByTagName("button");
    let buttonsArray = []
    for(let i = 0; i < buttons.length; i++) {
    if(buttons[i].id != "pause") {
        buttonsArray.push(buttons[i])
    }
}
//disable buttons

    function disableButton(button) {
    button.setAttribute("disabled", true)
    }
    pause.addEventListener("click", function(){
    clearInterval(intervalID);
    buttonsArray.forEach(button => disableButton(button));
    })

    function replacePause(){
        pause.textContent = "resume";  
    }
    pause.addEventListener("click", function () {
    if(paused === false) {
    clearInterval(intervalID)
    buttonsArray.forEach(button => disableButton(button));
    replacePause()
    } if(paused === true) {
        intervalID = setInterval(startCount, 1000)
        buttonsArray.forEach(button => {
        enableButton(button)
            })
        }
    paused = !paused
    })
//enable buttons
    function enableButton(button) {
    pause.textContent = "pause"
    button.removeAttribute("disabled")
}
//manually increment timer
    function increment(){
    count++;
    counter.textContent = count
}
//manually decrement timers
    function decrement() {
    count--;
    counter.textContent = count;
}
//hearting numbers 
    function likeIt() {
    const likes = document.querySelector(".likes");
    let liked = document.createElement("li");
    liked.textContent = `${count} has been liked`;
    likes.appendChild(liked);
}
//commenting on page
    function commentFunc(event) {
    event.preventDefault()
    if(commentInput.value === "") {
        alert("please leave a comment");
    } else {
        const list = document.querySelector("#list");
        let listItem = document.createElement("div");
        listItem.textContent = commentInput.value.trim()
        list.appendChild(listItem)
        commentInput.value = ""
    }

}
//Event Listeners

plus.addEventListener("click", increment)
minus.addEventListener("click", decrement)
heart.addEventListener("click", likeIt)
commentForm.addEventListener("submit", commentFunc)



     

    



















