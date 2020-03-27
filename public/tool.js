
const socket = io.connect('http://localhost:8000')


let isactive="pencil"{
    let penciloptions=document.querySelector(".pencil-options");
    let eraseroptions=document.querySelector(".eraser-options");
   


function handlecolorchange(color){
    ctx.strokeStyle=color;
    socket.emit("color",color)
}


    function handleClick(tool){

   
    if (tool =="pencil"){
        if(isActive=="pencil"){
            penciloptions.classList.add("show")
        }
        else{

            isActive="pencil";
            ctx.strokeStyle="white"
            eraseroptions.classList.add("show")
        };

    }
       
}
}