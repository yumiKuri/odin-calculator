const display = document.getElementById("display");
const btnContainer = document.getElementById("button-container");

btnContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("buttons")){
        var content = e.target.innerText;
        display.innerText += content;
    }
})