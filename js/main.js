let divs = document.querySelectorAll(".phase .text .data > div")
let phase = document.querySelector(".phase")
let imags = document.querySelectorAll(".phase .imags img") 
divs.forEach((el) => {
    el.addEventListener ("click" , (ele) => {
        divs.forEach((e) => {
            e.classList.remove("active")
        })
        imags.forEach((e) => {
            e.classList.remove("active")
        })
        ele.currentTarget.classList.add("active")
        phase.style.background = `#${ele.currentTarget.dataset.color}`
        document.querySelectorAll(ele.currentTarget.dataset.img).forEach((el) => {
            el.classList.add("active")
        })
        divs.forEach((e) => {
            e.style.background = `#${ele.currentTarget.dataset.col}`
        })
        ele.currentTarget.style.background = "white"
    })
})

// let boxs = document.querySelectorAll(".feedback .boxs .row")
// let balls = document.querySelectorAll(".balls span")

// balls.forEach((e) => {
//     e.addEventListener("click" , removeActive)
//     e.addEventListener("click" , change)
// })

// function removeActive () {
//             balls.forEach(el => {
//             el.classList.remove("active")
//             this.classList.add("active")
//         })
// }

// function change () {
//     boxs.forEach ((e) => {
//         e.classList.remove("active")
//         document.querySelectorAll(this.dataset.num).forEach((el) => {
//             el.classList.add("active")
//         })
//     })
// }

