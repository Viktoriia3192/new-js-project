import { data } from "./fonds.daryna.js";

const fondsList = document.querySelector(".fonds-list")
let number = 0
data.forEach(({title, url, img}) => {
    doMarkUp(title, url, img)
})


function doMarkUp(title, url, img) {
    number += 1

    const markup = `<li class="fonds-items"><p class="fond-num">0${number}</p><a href="${url}" target=”_blank” ><img class="fond-img" srcset="${img}" alt="${title}"></a></li>`
    fondsList.insertAdjacentHTML("beforeend", markup)
    
}




const buttonscroll = document.querySelector(".fond-scroll-button")

const slider = tns({
  axis: 'vertical',
  nav: false,
  container: '.my-slider.fonds-list',
  controls: false,
  nextButton: '.fond-scroll-button',
  rewind: true,
  mouseDrag: true,
  responsive: {
    375: {
      items: 4,
    },
    768: {
      items: 6,
    },
  }
})

buttonscroll.addEventListener("click", () => {
    slider.goTo('next')
})

