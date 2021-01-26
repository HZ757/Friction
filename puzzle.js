// Store existing page in variable
// Inject puzzle page
// Redirect user to existing page

var CurrentURL = window.location.href;

// Redirects user to puzzle.html
window.location.replace(chrome.runtime.getURL('puzzle.html'));

document.getElementById("puzzle").onclick = function()
{
    alert("You finished the puzzle");
}

function finishPuzzle() {
    
}