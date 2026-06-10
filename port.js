let pointer = document.querySelector(".p2");
let pointer1 = document.querySelector(".p1");
let my=document.querySelector(".project1");
let my1=document.querySelector(".myself");
pointer.onclick=()=>{
    my.scrollIntoView({behavior:'smooth' });
    pointer.style.color="rgb(190, 152, 69)";
}
pointer1.onclick=()=>{
    my1.scrollIntoView({behavior:'smooth'});
      pointer1.style.color="rgb(190, 152, 69)";
}