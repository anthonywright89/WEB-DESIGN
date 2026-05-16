// Handles Activities 2, 4, and 5 combined
function runVariablesActivity() {
    let $name = "Anthony Wright";
    document.getElementById("text").innerHTML = $name; // Updates the page text
    console.log($name);                                // Logs to DevTools
    alert($name);                                      // Pop up alert box
}

// Handles Activity 8: innerText
function getInnerText() {
    alert(document.getElementById("example").innerText);
}

// Handles Activity 8: innerHTML
function getInnerHTML() {
    alert(document.getElementById("example").innerHTML);
}

// Handles Activity 8: textContent
function getTextContent() {
    alert(document.getElementById("example").textContent);
}