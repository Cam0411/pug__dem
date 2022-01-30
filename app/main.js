
const menu = document.querySelector(".menu")
const modal = document.querySelector(".modal")

const background = document.querySelector(".background")
const content = document.querySelector(".content__modal")


menu.addEventListener("click",() => {
    modal.classList.add("open")
})

menu.addEventListener("click",() => {
    background.classList.add("open-2")
})

modal.addEventListener("click",() => {
    modal.classList.remove("open")
    background.classList.remove("open-2")
})
content.addEventListener("click", event => {
    event.stopPropagation()
})
