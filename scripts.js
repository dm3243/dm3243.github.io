/*
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal 
window.onload = function() {
    btn.onclick = function() {
        modal.style.display = "block";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/
var article1 = document.getElementById('article1')

window.onload = function() {
    article1.onclick = function() {
        alert('This is the first article!')
    }
}