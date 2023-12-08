document.getElementById("greeting").addEventListener("click", function () {
    document.getElementById("greeting").innerHTML = "Goodbye!";
});

document.getElementById("greeting").addEventListener("dblclick", function () {
    document.getElementById("greeting").innerHTML = "I love Family Guy!";
});

document.getElementById("color").addEventListener("mouseover", function () {
    document.getElementById("color").style.backgroundColor = "red";
    document.getElementById("color").style.height = "500px";
    document.getElementById("color").style.width = "500px";
    document.getElementById("color").style.borderRadius = "50%";
});

document.getElementById("color").addEventListener("mouseout", function () {
    document.getElementById("color").style.backgroundColor = "blue";
    document.getElementById("color").style.height = "200px";
    document.getElementById("color").style.width = "200px";
    document.getElementById("color").style.borderRadius = "0%";
});

document.getElementById("shape").addEventListener("wheel", function () {
    document.getElementById("shape").style.backgroundColor = "green";
});

document.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

document.addEventListener("drag", function (event) {
    document.getElementById("demo").innerHTML = "The text is being dragged";
});

document.addEventListener("dragover", function(event) {
    event.preventDefault();
})

document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget") {
        const data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById("demo").innerHTML = "The text was dropped";
    }
});

document.ondragover = function(event) {
    event.preventDefault();
};

document.ondrop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "the p element was dropped";
};