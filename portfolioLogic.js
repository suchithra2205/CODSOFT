
let btn=document.getElementById("btn");
btn.addEventListener("click",myfun)
function myfun(){
    var dots=document.getElementById("dots");
    var moretext=document.getElementById("more");
    
    if(dots.style.display==="none"){
        dots.style.display="inline";
        btn.innerHTML="read more";
        moretext.style.display="none";
    }
    else{
        dots.style.display="none";
        btn.innerHTML="read less";
        moretext.style.display="inline";
    }
}
let btn1=document.getElementById("btn1");
btn1.addEventListener("click",myfun1)
function myfun1(){
    var dots1=document.getElementById("dots1");
    var moretext1=document.getElementById("more1");
    
    if(dots1.style.display==="none"){
        dots1.style.display="inline";
        btn1.innerHTML="read more";
        moretext1.style.display="none";
    }
    else{
        dots1.style.display="none";
        btn1.innerHTML="read less";
        moretext1.style.display="inline";
    }
}
let btn2=document.getElementById("btn2");
btn2.addEventListener("click",myfun2)
function myfun2(){
    var dots2=document.getElementById("dots2");
    var moretext2=document.getElementById("more2");
    
    if(dots2.style.display==="none"){
        dots2.style.display="inline";
        btn2.innerHTML="read more";
        moretext2.style.display="none";
    }
    else{
        dots2.style.display="none";
        btn2.innerHTML="read less";
        moretext2.style.display="inline";
    }
}





