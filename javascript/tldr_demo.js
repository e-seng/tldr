/**
 * The javascript needed to create the effects on the website tl;dr.
 * 
 * Do note, the website itself is not functional to what it is advertising. It is
 * merely a mock-up website to show a possible app.
 * 
 * If there is a demand for this type of website to be developed, please contact
 * me though email, eth.sengsavang@gmail.com, or on twitter, @potatoPetiole.
 * 
 * @author Ethan Sengsavang
 */

function init(){
    var highToggle = document.getElementById("all");
    var someToggle = document.getElementById("some");
    var minimalToggle = document.getElementById("minimal")

    highToggle.onclick = function(){
        toggleActive(2);
        document.getElementById("about_text").classList.remove("very", "important");
    }

    someToggle.onclick = function(){
        toggleActive(1);
        document.getElementById("about_text").classList.add("important");
        document.getElementById("about_text").classList.remove("very");
    }

    minimalToggle.onclick = function(){
        toggleActive(0);
        document.getElementById("about_text").classList.add("very", "important");
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
            if(Number(button) === buttonIndex){
                aboutButtons[button].classList.add("active");
                continue;
            }

            aboutButtons[button].classList.remove("active");
        }
    }

    /**
     * Allow the Content Hover toggle to have functionality
     */
    var hoverContextToggle = document.querySelector("#view-options #show-context input");
     // Check if the toggle is already checked
     if(hoverContextToggle.checked){
        document.getElementById("about_text").classList.add("hover");
    }

    hoverContextToggle.addEventListener("click", function(){
        let aboutText = document.getElementById("about_text");

        if(hoverContextToggle.checked){
            aboutText.classList.add("hover");
            return;
        }
        aboutText.classList.remove("hover");
    });
}

window.addEventListener("load", init);