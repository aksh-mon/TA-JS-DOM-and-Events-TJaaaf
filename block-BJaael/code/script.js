let body = document.querySelector("body");

function generateRandomColor(){
    let hexCharacters = [
        "0","1","2","3","4","5","6","7","8","9","a","b","c",
        "d","e","f",
    ];
    
    let color = "#";
    for(let i = 0; i < 6; i++ ){
     let randomNumber = Math.floor(Math.random()*16);
     color = color + hexCharacters[randomNumber];   
    }

    return color;
}


let boxes = [];

for (let i = 0; i < 500; i++) {

  let box = document.createElement("div");
  box.classList.add("box");

  let randomNumber = Math.floor(Math.random() * 501);
  let numberText = document.createTextNode(randomNumber);
  box.appendChild(numberText);

  boxes.push(box);
  body.appendChild(box);
}

body.addEventListener("mousemove", () => {
  boxes.forEach(box => {

    let randomColor = generateRandomColor();
    box.style.backgroundColor = randomColor;

    let randomNumber = Math.floor(Math.random() * 501);
    box.textContent = randomNumber;

  });
});
