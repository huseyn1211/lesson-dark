


let b = document.querySelectorAll("#you-list li")
b.forEach((li) =>{
    li.addEventListener("mouseenter", () => {
        li.style.color = "gray"
    })
    //   li.addEventListener("mouseleave", () => {
    //     li.style.color = "black"})
})







   
    let s = document.querySelectorAll("#my-list li")
    s.forEach((li) => {
        li.addEventListener("click", function () {
            li.style.color = "blue";
            if (
                li.style.textDecoration == "line-through") {
                li.style.textDecoration = "none"
            }
            else if (li.style.textDecoration == "none"
            ) {
                li.style.textDecoration == "line-through"

            }
        })

})


document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log("enter")
    }
    else {
        console.log("yanlis ")
    }
})



let password = document.querySelector("#password")
password.addEventListener("Submit",function ("event") => {
    if(event.length)
})