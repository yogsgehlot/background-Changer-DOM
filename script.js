// document.querySelector("body").style.backgroundColor="yellow"
// console.log("hii")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")
console.log(buttons)
buttons.forEach(function (button){
    button.addEventListener('click',(e)=>{
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id       
        }
        if(e.target.id == "black"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "Green"){
            body.style.backgroundColor = e.target.id;
        }
    })
});


