let next =document.querySelector("#next")
console.log(next);
let prev =document.querySelector("#previuos")
console.log(prev);
next.addEventListener('click',function()
{
    let items = document.querySelectorAll(".item")
    // console.log(items);
    document.querySelector(".slide").appendChild(items[0])
})
prev.addEventListener('click',function()
{
    let items = document.querySelectorAll(".item")
    // console.log(items);
    document.querySelector(".slide").prepend(items[items.length -1])
})