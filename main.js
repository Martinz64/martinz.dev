document.getElementById("year").innerHTML = new Date().getFullYear()

let g_counter = 0;


function enableItemClickAnimations() {
    let items = document.querySelectorAll("a.item")

    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.addEventListener("mousedown",(a,b)=>{
            element.classList.add("active")
        })
        element.addEventListener("mouseup",(a,b)=>{
            element.classList.remove("active")
        })
        element.addEventListener("keydown",(a,b)=>{
            if(a.key == "Enter" || a.key == "Tab")
                element.classList.add("active")
        })
        element.addEventListener("keyup",(a,b)=>{
            if(a.key == "Enter" || a.key == "Tab")
                element.classList.remove("active")
        })
        element.addEventListener("blur",(a,b)=>{
            element.classList.remove("active")
        })
    }
}

document.addEventListener("DOMContentLoaded", ()=>{

    console.log("%c No esperaba verte por aqui...","font-size:2em")

    enableItemClickAnimations();

    let gender_item = document.getElementById("gender-item");
    gender_item.onclick = () => {
        if(g_counter == 6){
            gender_item.querySelector("img.icon").src="assets/female.svg"
            gender_item.querySelector("span.f").innerHTML="Female"
        } else {
            gender_item.querySelector("img.icon").src="assets/male.svg"
            gender_item.querySelector("span.f").innerHTML="Male"
        }
        g_counter = (g_counter+1)%7
        console.log(g_counter)
    }

    
})