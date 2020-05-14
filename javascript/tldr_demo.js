var highToggle = document.getElementById("all");
var someToggle = document.getElementById("some");
var minimalToggle = document.getElementById("minimal")

highToggle.onclick = function(){
    toggleActive(2);
}

someToggle.onclick = function(){
    toggleActive(1);
}

minimalToggle.onclick = function(){
    toggleActive(0);
}

function toggleActive(buttonIndex){
    /**
     * Toggles which button is active when a use interacts with the options.
     * 
     * @params {integer} buttonIndex 
     *      The index to the button when getElementsByClassName is used
     */
    let aboutButtons = document.getElementsByClassName("about-button")

    for(var button in aboutButtons){
        if(typeof aboutButtons[button] !== "object") continue;
        if(button == buttonIndex){
            aboutButtons[button].classList.add("active");
            continue;
        }

        aboutButtons[button].classList.remove("active");
    }
}