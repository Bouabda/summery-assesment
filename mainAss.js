window.onload(function () {


    var element = document.createElement("<li>");
    var list = document.getElementById("list");
    var input = document.getElementById("txt")
    var color = document.getElementById("col")

    document.getElementById("button").onclick(function () {
        if (color.textContent() === "red") {
            list.append('<li>+input.textContent+</li>').style(".red");
        }
        if (input.value() === color.value() && color.value === "blue") {
            list.append(element)//.style(".blue");
        }
        else if (input.value() === color.value() && color.value === "yellow") {
            list.append(element)//.style(".yellow");
        }
    });

});
