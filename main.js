{   //To add and delete classes to a menu item 

let IconMenu = document.querySelector(".menu")
let NavMenu = document.querySelector(".nav-menu")
let NavMenuLink = document.querySelectorAll(".nav-menu a")

IconMenu.addEventListener("click", (e)=>{
    NavMenu.classList.toggle("visabl")
    NavMenuLink.forEach((item)=>{
        item.addEventListener("click", (e)=>{
            NavMenu.classList.remove("visabl")
        })
    })
})
}

{   // This is when the page scroll happens, the following happens

let About = document.getElementById("about")
let Allfeatures = document.querySelectorAll(".features .image")
let mission = document.querySelector(".mission")
let Allnumber = document.querySelectorAll(".number")
let start = false;


let counter = (el)=>{   //Then the numbers are incremented inside the mission element
    let count = el.dataset.number;
    let interval = setInterval(() => {
        el.textContent++
        if(el.textContent == count){
            clearInterval(interval)
        }
    }, 2000 / count);
}


window.onscroll = function(){
    if (window.scrollY >= About.offsetTop -200) {   // first, the two images are moved left and right, which is in the abuot element
        Allfeatures.forEach((item)=>{
            item.style.transform= "translateX(0vw)"
        })
    }else{
        Allfeatures.forEach((item)=>{
        item.style.transform = "translateX(-10vw)"
        })
    }

if (window.scrollY >= mission.offsetTop - 400) {   //Then the numbers are incremented inside the mission element
        if(!start){
            Allnumber.forEach((item) => counter(item))
        }
        start = true
    }
}
}

