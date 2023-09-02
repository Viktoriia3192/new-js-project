import { data } from "./fonds.daryna.js";
console.log(data)
const fondsList = document.querySelector(".fonds-list")
let number = 0
data.forEach(({title, url, img}) => {
    doMarkUp(title, url, img)
})


function doMarkUp(title, url, img) {
    number += 1
    console.log("Image Path:", img);
    const markup = `<li class="fonds-items"><p class="fond-num">0${number}.</p><a href="${url}"><img class="fond-img" srcset="${img}" alt="${title}"></a></li>`
    fondsList.insertAdjacentHTML("beforeend", markup)
    
}




