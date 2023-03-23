const btns = document.querySelectorAll(".tabs__btn-item")
const tabsItems = document.querySelector(".tabs__items")

btns.forEach((element, i)=>{
    element.addEventListener("click", (event)=>{
        btns.forEach((element)=>{
            element.classList.remove('tabs__btn-item--active')
        })
        element.classList.add("tabs__btn-item--active")
        const height = 318 * i
        tabsItems.style.transform = `translateY(${-height}px)`
    })
})