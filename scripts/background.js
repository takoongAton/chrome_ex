console.log("console log / background.js");

function backgroundFn(){
    console.log("background.js")
}

window.backgroundFn = backgroundFn;
backgroundFn();
/* test123 */