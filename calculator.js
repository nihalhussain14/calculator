let box = document.getElementById("box");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            box.value = string;
        }
        else if (e.target.innerText == "AC") {
            string = "";
            box.value = string;            
        }
        else if(e.target.innerText == "DEL"){
            string = string.substring(0, string.length-1);
            box.value = string;
        }
        else {
            string += e.target.innerHTML;
            box.value = string;
        }
       
    })
})