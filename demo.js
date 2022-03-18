const checkbox = document.getElementById("checkbox");

checkbox.addEventListener ("change", () => {
    document.body.classList.toggle("dark");
    document.body.div.classList.toggle("dark");

});

let outputEl = document.getElementById("out")
let outputScr = document.getElementById("output")
let equalTo = document.getElementById("equal");
let cleared = document.getElementById("ac");


function display(num){
    outputEl.value += num;
}

function equal() {
    try{
        outputScr.textContent = eval(outputEl.value)
    }
    catch{
        outputScr.textContent = "Invalid"
    }
}

function clearing() {
    outputScr.innerHTML = " ";
    outputEl.innerHTML = " ";
    outputEl.value = " ";
}

function del(){
    outputEl.value = outputEl.value.slice(0,-1);
}
