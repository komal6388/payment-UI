
let a = () => {
  let c = document.querySelector(".form")

  c.classList.add("you")



}
let b = () => {
  let c = document.querySelector(".form")

  c.classList.remove("you")

}
let c = "komal           sharma             omshanti     i    am   komal   "
let d = c.split(" ")
console.log(d)
let o = []
for (let i = 0; i < d.length; i++) {



  if (d[i] !== "") {
    o.push(d[i])
  }
}

let s = o.join(" ")
console.log(s)