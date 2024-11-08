// function click() {
//     fetch('/getdata')
//         .then(response => response.json())
//         .then(data => {
//             const name = document.getElementById("name").innerHTML = data.message
//             if(name){
//                 console.log("Yes")
//             }
//         })
//     console.log("Hello")
// }

// // click()

// const btn = document.getElementById("btn").addEventListener("click", ()=>{
//     fetch('/getdata')
//         .then(response => response.json())
//         .then(data => {
//             const name = document.getElementById("name").innerHTML = data.message
//             if(name){
//                 console.log("Yes")
//             }
//         })
// })

const container = document.getElementById("product-container")

const productDiv = document.createElement("div")
fetch("/getProducts").then(data=> data.json()).then(data=>{
   data.map((data)=>{
   const img = document.createElement("img")
   img.src = data.image
   img.alt = data.title
   img.style.width="200px"
   const title = document.createElement("p");
   title.textContent= data.title
   
   productDiv.appendChild(img)
   productDiv.appendChild(title)
   container.appendChild(productDiv)
})

})



