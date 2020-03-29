var highToggle = document.getElementById("all");
var someToggle = document.getElementById("some");
var minimalToggle = document.getElementById("minimal")

highToggle.onclick = () => {
    console.log("click!!");
    if(!highToggle.classList.contains("active")) highToggle.classList.add("active");
    if(someToggle.classList.contains("active")) someToggle.classList.remove("active");
    if(minimalToggle.classList.contains("active")) minimalToggle.classList.remove("active");
}

someToggle.onclick = () => {
    if(highToggle.classList.contains("active")) highToggle.classList.remove("active");
    if(!someToggle.classList.contains("active")) someToggle.classList.add("active");
    if(minimalToggle.classList.contains("active")) minimalToggle.classList.remove("active");
}

minimalToggle.onclick = () =>{
    if(highToggle.classList.contains("active")) highToggle.classList.remove("active");
    if(someToggle.classList.contains("active")) someToggle.classList.remove("active");
    if(!minimalToggle.classList.contains("active")) minimalToggle.classList.add("active");
}