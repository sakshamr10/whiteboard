// socket is established
const socket = io.connect('https://noteswhiteboard.herokuapp.com:3002');
console.log("Inside tool");
let isActive = "pencil";
let pencilOptions = document.querySelector(".pencil-options")
let eraserOptions = document.querySelector(".eraser-options");
function handleClick(tool){
    if (tool == "pencil") {
        if (isActive == "pencil") {
            pencilOptions.classList.add("show")
        } else {
            isActive = "pencil";

            ctx.strokeStyle = "black";
            eraserOptions.classList.remove("show")

        }
    } else if (tool == "eraser") {
        if (isActive == "eraser") {

            eraserOptions.classList.add("show")
        } else {
            isActive = "eraser";
            pencilOptions.classList.remove("show")

            ctx.strokeStyle = "white";
        }

    } else if (tool == "sticky") {
        createSticky();
    }
    //socket.emit("tool",tool)
}

//handle color change
function handleColorChange(color) {

    ctx.strokeStyle = color;
    socket.emit("color", color);
}
//handle size change
function sizeChange(value) {
    ctx.lineWidth = value;
   // socket.emit("size", value);
  }



/*let inputArr = document.getElementsByTagName("input");
inputArr[0].addEventListener("change", function (e) {
    ctx.lineWidth = inputArr[0].value
})*/