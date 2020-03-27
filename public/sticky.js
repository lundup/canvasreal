
function createSticky(tool){
    const body=document.querySelector("body")
       const stickypad= document.createElement("div")
       const navbar=document.createElement("div")
       const writtingpad=document.createElement("div")
       const textarea=document.createElement("textarea")
       const stickyoption1= document.createElement("div")
       const stickyoption2= document.createElement("div")

    
       stickypad.setAttribute("class","sticky");
       navbar.setAttribute("class","navbar");
       writtingpad.setAttribute("class","writtingpad");
       textarea.setAttribute("class","textarea");
       stickyoption1.setAttribute("class","minimize");
       stickyoption2.setAttribute("class","close");

       navbar.appendChild(stickyoption1);
       navbar.appendChild(stickyoption2)
    stickypad.appendChild(navbar)
    
    stickypad.appendChild(writtingpad)
    
    writtingpad.appendChild(textarea)
    body.appendChild(stickypad);


    let isStickyDown = false;
  let initialX = null;
  let initialY = null;
  stickypad.addEventListener("mousedown", function(e) {
    initialX = e.clientX;
    initialY = e.clientY;
    isStickyDown = true;
  });
  stickypad.addEventListener("mousemove", function(e) {
    if (isStickyDown == false) return;
    let finalX = e.clientX;
    let finalY = e.clientY;
    let diffX = finalX - initialX;
    let diffY = finalY - initialY;
    let { top, left } = stickypad.getBoundingClientRect();
    stickypad.style.top = top + diffY + "px";
    stickypad.style.left = left + diffX + "px";
    initialX = finalX;
    initialY = finalY;
  });

  stickypad.addEventListener("mouseleave", function() {
   isStickyDown = false;
 });
 
    }
    
    