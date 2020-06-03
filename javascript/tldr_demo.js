function init(){
    var highToggle = document.getElementById("all");
    var someToggle = document.getElementById("some");
    var minimalToggle = document.getElementById("minimal")

    highToggle.onclick = function(){
        toggleActive(2);
        document.getElementById("about_text").classList = "";
    }

    someToggle.onclick = function(){
        toggleActive(1);
        document.getElementById("about_text").classList = "important";
    }

    minimalToggle.onclick = function(){
        toggleActive(0);
        document.getElementById("about_text").classList = "very important";
    }

    /**
     * Toggles which button is active when a use interacts with the options.
     * 
     * @param {number} buttonIndex 
     *      The index to the button when getElementsByClassName is used
     */
    function toggleActive(buttonIndex){
        let aboutButtons = document.getElementsByClassName("about-button")

        for(var button in aboutButtons){
            if(typeof aboutButtons[button] !== "object") continue;
            if(button === buttonIndex){
                aboutButtons[button].classList.add("active");
                continue;
            }

            aboutButtons[button].classList.remove("active");
        }
    }
}

window.addEventListener("load", init);