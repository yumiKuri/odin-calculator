const display = document.getElementById("display");
const btnContainer = document.getElementById("button-container");
let firstValue = "", secondValue = "", operation = "";
let computed = false;

btnContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("buttons")){
        let content = e.target.innerText;

        if(content === "AC") reset();

        else if(e.target.classList.contains("number")){
            if(operation === "" && computed){
                reset();
                firstValue = content;
            }
            else if(operation === "") firstValue += content;
            else secondValue += content;
        }

        else if(e.target.classList.contains("operation")){
            if(content === "="){
                if(operation !== "" && secondValue !== ""){
                    operate();
                    computed = true;
                }
                else return;
            }
            else{
                if(firstValue === "") return;
                else if(secondValue !== "" && firstValue !== "" && operation !== ""){
                    operate();
                    computed = true;
                    operation = content;
                }
                else{
                    operation = content;
                }
            }
        }

        display.innerText = firstValue + operation + secondValue;
    }
})


function operate(){
    if(operation === "+") firstValue = String(Number(firstValue) + Number(secondValue));
    else if(operation === "-") firstValue = String(Number(firstValue) - Number(secondValue));
    else if(operation === "x") firstValue = String(Number(firstValue) * Number(secondValue));
    else if(operation === "÷") firstValue = String(Number(firstValue) / Number(secondValue));
    secondValue = "";
    operation = "";
    return;
}

function reset(){
    display.innerText = "";
    firstValue = "";
    secondValue = "";
    operation = "";
    computed = false;
}

