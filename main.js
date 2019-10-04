var time=document.getElementsByClassName("time");


   function clockfun()
    {
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
time.innerHTML=`<p>${h}:${m}:${s}</p>`;
    }