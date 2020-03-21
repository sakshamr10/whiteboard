socket.on("oncolorChange", function (color) {
    ctx.strokeStyle = color;
})

socket.on("onstart",function(point){
const {x,y,color,width}=point;
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.beginPath();
ctx.moveTo(x, y);

})
socket.on("onend",function(point){
    
    const {x,y,color,width}=point;
    ctx.strokeStyle=color;
ctx.lineWidth=width;
    ctx.lineTo(x, y);
    ctx.stroke();
})
/*socket.on("onredo",function(redoStack){
    if(redoStack.length>0){
        redraw();
    }
    
})
socket.on("onundo",function(undoStack){
    if(undoStack.length>0){
        redraw(); 
    }
})
socket.on("ontool",function(tool){
    handleClick(tool)
})*/
