const socket = io.connect('http://localhost:8000')
    
    const board = document.querySelector(".board");
    board.height=window.innerHeight;
    board.width=window.innerWidth;
    const ctx= board.getContext("2d");
    ctx.fillRect(0,0,window.innerWidth,innerHeight);
    //  
    // ctx.fillRect(0,0,window.innerWidth/2,innerHeight/2);

    ctx.strokeStyle="white";
    ctx.lineWidth=7;
    // ctx.beginPath();
    // ctx.moveTo(100,200);
    // ctx.lineTo(300,400);
    // ctx.stroke();
    // ctx.closePath();
    let isMOuseDown=false;

    board.addEventListener("mousedown",function(e){
        isMOuseDown=true;
   const x= e.clientX;
   const y=e.clientY;

   ctx.beginPath();
   ctx.moveTo(x,y);


    })
    board.addEventListener("mousemove",function(e){
        if(!isMOuseDown){
            return;
        }


   ctx.lineTo(e.clientX, e.clientY);
   ctx.stroke();
    })

    board.addEventListener("mouseup",function(e){
        ctx.closePath();
    isMOuseDown=false;

    })
 function pencilClick(){
    ctx.strokeStyle="white";
 }
 function eraserClick(){
    ctx.strokeStyle="black";
}


function colorhandle(color){

    if(color=="red"){
    ctx.strokeStyle="red";
}

if(color=="blue"){
    ctx.strokeStyle="blue";
}
if(color=="yellow"){
    ctx.strokeStyle="yellow";
}


}

function toolHandle(tool){

    if(tool=="pencil"){
        console.log("hello")
           ctx.strokeStyle="white"
    }
    if(tool=="eraser"){
        ctx.strokeStyle="black"
        
    }
    if(tool=="sticky"){

        console.log("hello")
        createSticky();
    }
}
const pencilSlider=  document.getElementById("pencil-size");
pencilSlider.addEventListener("change",function(){
let pencilSize=pencilSlider.value;
ctx.lineWidth=pencilSize;
})




