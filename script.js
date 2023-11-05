document.addEventListener("readystatechange",(event)=>{
    if(event.target.readystate==="complete"){
        console.log("Complete");
    }
    initApp();
});
const initApp=()=>{
    const open=document.querySelector(".open");
    const close=document.querySelector(".close");
    const closenav=document.querySelector(".close-nav");
    open.addEventListener("click",(event)=>{
        close.style.display="flex";
        open.style.display="none";
    });
    close.addEventListener("click",(event)=>{
        open.style.display="block";
        close.style.display="none"
    });
}