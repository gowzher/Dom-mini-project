let yearText = document.querySelector("strong");
yearText.style.fontSize = "40px";

// generateColor in hexadex form
let generateColor = () => {
  let alphanums = "123456789adcdef";

  let colorArr = [];
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 15);
    colorArr.push(alphanums[index]);
  }
  return "#" + colorArr.join("");
};

// add color to 2020

setInterval(() => {
  yearText.style.color = generateColor();
}, 1000);

let h1 = document.querySelector("h1");
h1.style.fontSize = "15px";
h1.style.fontFamily = "courier";
h1.style.fontWeight = "bold";
h1.style.textAlign = "center";

let h2 = document.querySelector("h2")
h2.style.color = "grey"
h2.style.fontSize = "12px"
h2.style.fontWeight = "bold"
h2.style.textDecoration = "underline"
h2.style.textAlign = "center"
h2.style.marginBottom = "10px"
h2.style.fontFamily = 'san-serif';

// add date to the DOM

let getDate = () => {
    let d = new Date()

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let monthIndex = d.getMonth()
    let year = d.getFullYear()
    let date = d.getDate()
    let hour = d.getHours()
    let mins = d.getMinutes()

    date = date < 10 ? "0" + date.toString() : date
    hour = hour < 10 ? "0" + hour.toString() : hour
    mins = mins < 10 ? "0" + mins.toString() : mins

    return `${months[monthIndex]} ${date}, ${year} ${hour}:${mins}`
}

let date = document.querySelector("p")
date.textContent = getDate()

date.style.margin = "auto"
date.style.padding = "6px"
date.style.textAlign = "center"
date.style.fontSize = "12px"
date.style.fontWeight = "400"
date.style.width = "40%"

setInterval(() => {
    date.style.color = generateColor()
}, 1000)

let listItems = document.querySelectorAll('li');

for (let list of listItems) {
  list.style.listStyleType = "none";
  list.style.fontWeight = "350";
  list.style.padding = "8px";
  list.style.margin = "6px";
  list.style.textAlign = "left";
}

// last task

for(let list of listItems){
    if(list.textContent.endsWith("Done"))
    list.style.backgroundColor = '#228b22'
    else if(list.textContent.endsWith("Ongoing"))
    list.style.backgroundColor = '#FFFF00';
    else list.style.backgroundColor = '#DC143C';


    list.style.fontFamily = "san-serif"
    list.style.marginRight = "50px"
}




