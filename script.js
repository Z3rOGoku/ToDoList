// Creating a close/X button

var myList = document.getElementsByTagName("LI");
var i;
for ( i = 0; i < myList.length; i++) {
    
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

//Click to close the list
var close = document.getElementsByClassName("close");
var i;
for (i =0;i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Checked icon on clicking
var list = document.querySelector('ul');
list.addEventListener('click', function(event){
    if (event.target.tagName ==="LI") {
        event.target.classList.toggle('checked');
    }
}, false)

//Creating ToDo list on clicking on Add todo btn

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === ' ') {
        alert("No Input");
    }
    else{
        document.getElementById("list").appendChild(li);
    }

    document.getElementById("myInput").value = " ";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);


    for(i=0;i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


// Dark/light Mode buttton
var colorToggleButton = document.getElementById("color-toggle");

// Set an initial background color (black)
var isWhite = false;
updateBackgroundColor();

// Add a click event listener to the button
colorToggleButton.addEventListener("click", function () {
    isWhite = !isWhite; // Toggle the flag
    updateBackgroundColor();
});

// Function to update the background color based on the flag
function updateBackgroundColor() {
    if (isWhite) {
        document.body.style.backgroundColor = "white";
        colorToggleButton.innerText = "DARK MODE 🌚";
    } else {
        document.body.style.backgroundColor = "rgb(36, 36, 36)";
        colorToggleButton.innerText = "LIGHT MODE ☀️";
    }
}
