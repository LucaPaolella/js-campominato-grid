"use strict";

//Function

function myCreateElement(htmlElement, className, htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;

    element.addEventListener("click", function(){
        alert(htmlValue);
    })

    return element;
}

function myAppendElement(containerElement, htmlElement){
    containerElement.append(htmlElement);
}
//main
let cellNumber = 100;
const containerBoard = document.querySelector(".board");

for(let i = 1; i <= cellNumber; i++){
    const createdElement = myCreateElement("div", "cell", i);
    myAppendElement(containerBoard, createdElement);
}

