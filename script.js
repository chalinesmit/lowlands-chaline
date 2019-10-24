/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/ /*eslint-env browser*/ /*eslint 'no-console':0*/

// Declaratie uit html die een rol speelt in dit script
var programmaElement = document.querySelector(".countdown");

// EventHandlers
function programma1() {
    programmaElement.src = "afbeeldingen/countdown2.png";
}

/* EventListeners (afbeelding veranderd) */
programmaElement.addEventListener('click', programma1);
