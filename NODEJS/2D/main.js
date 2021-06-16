//import './style.css'

/*
window.onload = function(){

var area = document.getElementById('app')
const room_width=600
const room_height=600

var char
var x 
var y 

var image = new Image()
image.src = 'pixel.png'

var key
var keyFlag

function initArea(){
  area.style.borderStyle='dotted'
  area.width=room_width
  area.height=room_height
  x = room_width/2
  y = room_height/2

}



  initArea()
  char = area.getContext('2d')

document.onkeyup = function(e){
  keyFlag = 0
  console.log("yyy")
}
document.onkeydown = function(e){
  keyFlag = 1
  key=window.event?e.keyCode:e.which

}
setInterval(function()
{
  if(keyFlag==0)return;
  if(key==37)x-=20;
  if(key==38)y-=20;
  if(key==39)x+=20;
  if(key==40)y+=20;
  console.log(char)
  char.width=char.width
  char.drawImage(image,x,y,70,70);
},30);

}

*/
const app=document.getElementById('app')
app.width = 600
app.height = 600


window.onload=function(){
  var x=120;
  var y=120;
  var key,pos=0;
  var canvas=document.getElementById("app");
  var ctx=canvas.getContext("2d");
  var img=new Image();
  img.onload=function()
  {
    ctx.drawImage(img,x,y,70,70);
  }
  img.src="pixel.png";
  document.onkeydown=function(e)
  {
    pos=1;
    key=window.event?e.keyCode:e.which;
  }
  document.onkeyup=function(e){pos=0;}
  setInterval(function()
  {
    if(pos==0)return;
    if(key==37)x-=2;
    if(key==38)y-=2;
    if(key==39)x+=2;
    if(key==40)y+=2;
    console.log(canvas)
      canvas.width=canvas.width;
    ctx.drawImage(img,x,y,70,70);
  },5)
}
