$(document).ready(function(){
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    $(“.time”).html(`<p>${h}:${m}:${s}</p>`);
});
