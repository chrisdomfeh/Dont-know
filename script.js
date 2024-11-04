var x=document.getElementById("bar");
var box = document.querySelector(".box");
var glow=[...document.querySelectorAll("#glow")];
var win=[...document.querySelectorAll(".block")];
var a=document.querySelector(".restart");


function eventnone(){
    win.map((item)=>{item.style.pointerEvents="none"});

}
var reestart= setInterval(function(){    
if(win[0].innerText=="X" && win[1].innerText=="X" && win[2].innerText=="X")
    {
        glow[4].style.visibility="visible";
        glow[4].classList.add("anime");
        eventnone();        
}
 else if(win[0].innerText=="O" && win[1].innerText=="O" && win[2].innerText=="O")
    {
        glow[4].classList.add("oo");
        glow[4].style.visibility="visible";
        glow[4].classList.add("foro");
eventnone();
}
else if(win[3].innerText=="X" && win[4].innerText=="X" && win[5].innerText=="X")
    {
        glow[3].style.visibility="visible";
        glow[3].classList.add("anime");
eventnone();
}
 else if(win[3].innerText=="O" && win[4].innerText=="O" && win[5].innerText=="O")
    {
        glow[3].classList.add("oo");
        glow[3].style.visibility="visible";
        glow[3].classList.add("foro");
eventnone();
}
else if(win[6].innerText=="X" && win[7].innerText=="X" && win[8].innerText=="X")
    {
        glow[5].style.visibility="visible";
        glow[5].classList.add("anime");
eventnone();
}
else if(win[6].innerText=="O" && win[7].innerText=="O" && win[8].innerText=="O")
    {
        glow[5].classList.add("oo");
        glow[5].style.visibility="visible";
        glow[5].classList.add("foro");
eventnone();
}
else if(win[0].innerText=="X" && win[4].innerText=="X" && win[8].innerText=="X")
    {
        glow[0].style.visibility="visible";
        glow[0].classList.add("anime");
eventnone();
}
else if(win[0].innerText=="O" && win[4].innerText=="O" && win[8].innerText=="O")
    {
        glow[0].classList.add("oo");
        glow[0].style.visibility="visible";
        glow[0].classList.add("foro");
eventnone();
}
else if(win[2].innerText=="X" && win[4].innerText=="X" && win[6].innerText=="X")
    {
        glow[1].style.visibility="visible";
        glow[1].classList.add("anime");
eventnone();
}
else if(win[2].innerText=="O" && win[4].innerText=="O" && win[6].innerText=="O")
    {
        glow[1].classList.add("oo");
        glow[1].style.visibility="visible";
        glow[1].classList.add("foro");
eventnone();
}
else if(win[0].innerText=="X" && win[3].innerText=="X" && win[6].innerText=="X")
    {
        glow[6].style.visibility="visible";
        glow[6].classList.add("anime");
eventnone();
}
else if(win[0].innerText=="O" && win[3].innerText=="O" && win[6].innerText=="O")
    {
        glow[6].classList.add("oo");
        glow[6].style.visibility="visible";
        glow[6].classList.add("foro");
eventnone();
}
else if(win[1].innerText=="X" && win[4].innerText=="X" && win[7].innerText=="X")
    {
        glow[2].style.visibility="visible";
        glow[2].classList.add("anime");
eventnone();
}
else if(win[1].innerText=="O" && win[4].innerText=="O" && win[7].innerText=="O")
    {
        glow[2].classList.add("oo");
        glow[2].style.visibility="visible";
        glow[2].classList.add("foro");
eventnone();
}
else if(win[2].innerText=="X" && win[5].innerText=="X" && win[8].innerText=="X")
    {
        glow[7].style.visibility="visible";
        glow[7].classList.add("anime");
eventnone();
}
else if(win[2].innerText=="O" && win[5].innerText=="O" && win[8].innerText=="O")
    {
        glow[7].classList.add("oo");
        glow[7].style.visibility="visible";
        glow[7].classList.add("foro");
eventnone();
};console.log("checked")
},1000)

function check(){
    if(x.style.background="white")
        {
            x.style.left="0px";
        }
    else if (x.style.background="rgb(10, 0, 0,0.4)")
    {
        x.style.left="70px";
    }
}
setTimeout(check(),3)

function xo()
{
    x.style.left="0px";
    x.style.background="white";

}
function ox()
{
    x.style.left="70px";
    x.style.background="rgb(10, 0, 0,0.4)";
}
function f1(item){
    if(x.style.background="rgb(10, 0, 0,0.4)" && x.style.left=="70px")
    {  
         item.innerText="O";
         item.style.color="rgba(10, 0, 0, 0.452)";
         item.style.background="red";

         xo()
    }
    else if(x.style.background="white" && x.style.left=="0px")
    {
        item.innerText="X"
        item.style.color="white";
        item.style.background="cyan";

        ox();
    }
    item.style.pointerEvents="none";

}
function comeAgain(){
    a.classList.remove("ress");
}
function restart(){
    setTimeout(comeAgain,1000);
a.classList.add("ress");

for(i=0;i<win.length;i++)
{
    win[i].innerText="";
    win[i].style.background="rgba(255, 255, 255, 0.438)";
    win[i].style.pointerEvents="all";
    console.log("loop")
}
for(y=0;y<glow.length;y++)
{
    glow[y].classList.remove("oo");
    glow[y].style.visibility="hidden";
}
for(y=0;y<glow.length;y++)
    {
        glow[y].classList.remove("anime");
        glow[y].style.visibility="hidden";
    }
    
}
