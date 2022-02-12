
// // //welcome alert
var names = prompt("Hi, i'm Alena!☺️ And what is your name?");
if (names == null || names == "") {
    txt = "You didn't provided your name☹️";
} else {
    txt = "Hi, " + names + "!🥳";
}
alert(txt);

function ScrollUp(){
    var t,s;
    s=document.body.scrollTop||window.pageYOffset;
    t=setInterval(function(){if(s>0)window.scroll(0,s-=60);else clearInterval(t)},5);
}


        
function showElement(show, obj, time, resolution) {
resolution=(resolution>0? resolution: 50); 
var step=(show? 1: -1)*(1/(time>0? time: 700))*resolution;
var opacity=(typeof(obj.style.KhtmlOpacity)!="undefined")? parseFloat(obj.style.KhtmlOpacity): 
            (typeof(obj.style.MozOpacity)!="undefined")? parseFloat(obj.style.MozOpacity): 
            (typeof(obj.filters)!="undefined")? obj.filters.Alpha.Opacity.value/100: 
            (typeof(obj.style.opacity)!="undefined")? parseFloat(obj.style.opacity): 
            null; 
if(opacity==null) return;
opacity=isNaN(opacity)? (show? 0: 1) : opacity; 
var timer=window.setInterval(function() {
    if((opacity+=step)>=1||opacity<=0) window.clearInterval(timer);
    if(obj.filters) obj.filters.alpha.opacity=Math.round(opacity*100);
    obj.style.KhtmlOpacity=obj.style.MozOpacity=obj.style.opacity=opacity;
}, resolution);
}

var tit = document.title;
var c = 0;
//
function writetitle() {
  document.title = tit.substring(0,c);
  if(c==tit.length) {
    c = 0;setTimeout("writetitle()", 3000)
  } else {
    c++;
    setTimeout("writetitle()", 250)
  }
}
writetitle()
        

