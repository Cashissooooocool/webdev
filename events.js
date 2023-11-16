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

document.addEventListener("dragstart", function () {
    event.dataTransfer("text" )
});