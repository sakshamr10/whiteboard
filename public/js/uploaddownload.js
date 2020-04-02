function download(){
    var link = document.createElement('a');
    link.download = 'filename.png';
    // canvas board => link
    link.href = board.toDataURL("image/png");
    // click 
    link.click();
  }
  
  const upload=document.querySelector(".upload-img");
  const input=document.querySelector(".input-img");
  
  upload.addEventListener("click", function(e) {
    e.preventDefault();
    input.click();
    input.addEventListener("change", function(e) {
      //const writingPad = createBox();
      const stickyPad = document.createElement("div");
      stickyPad.setAttribute("class", "sticky"); 
      const img = document.createElement("img");
      let src = URL.createObjectURL(e.target.files[0]);
      img.src = src;
      img.setAttribute("class", "uploadedImgStyle");
      const body=document.querySelector("body");
      body.appendChild(stickyPad);
      stickyPad.appendChild(img);
      /*img.onload = function() {
        URL.revokeObjectURL(img.src);
      };*/
      
        let isStickyDown = false;
  
        let initialX = null;
        let initialY = null;

        stickyPad.addEventListener("mousedown", function(e) {
            initialX = e.clientX;
            initialY = e.clientY;
            isStickyDown = true;
        });
  
  
  
  
        stickyPad.addEventListener("mousemove", function(e) {
        if (isStickyDown == false) return;
  
        let finalX = e.clientX;
        let finalY = e.clientY;
        let diffX = finalX - initialX;
        let diffY = finalY - initialY;
      
        let { top, left } = stickyPad.getBoundingClientRect();
      
        stickyPad.style.top = top + diffY + "px";
  
        stickyPad.style.left = left + diffX + "px";
      
        initialX = finalX;
        initialY = finalY;
        });
  
  
  //   precaution
        stickyPad.addEventListener("mouseleave", function() {
        isStickyDown = false;
        });
        stickyPad.addEventListener("mouseup",function(){
        isStickyDown=false;
        })
     })  
  });
 /* upload.addEventListener("mousedown",function(){

      const imgFile=upload.files[0];
      
      const img = document.createElement("img");

      img.src = URL.createObjectURL(imgFile);
      
      img.height = 60;
      const body=document.querySelector("body");
      body.appendChild(img);
  })*/
  