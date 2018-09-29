
 var bee = document.getElementById("follower");
 var bee2 = document.getElementById("follower2");
 var bee3 = document.getElementById("follower3");
 var bee4 = document.getElementById("follower4");
 var bee5 = document.getElementById("follower5");

 document.addEventListener("mousemove", getMouse);


 bee.style.position = "absolute"; //css
 var beepos = {x:0, y:0};

 bee2.style.position = "absolute"; //css
 var bee2pos = {x:0, y:0};

 bee3.style.position = "absolute"; //css
 var bee3pos = {x:0, y:0};

 bee4.style.position = "absolute"; //css
 var bee4pos = {x:0, y:0};

 bee5.style.position = "absolute"; //css
 var bee5pos = {x:0, y:0};



 setInterval(followMouse, 50);

 var mouse = {x:0, y:0}; //mouse.x, mouse.y

 function getMouse(e){
   mouse.x = e.pageX;
   mouse.y = e.pageY;

 }

 function followMouse(){
   //1. find distance X , distance Y
   var distX = mouse.x - beepos.x;
   var distY = mouse.y - beepos.y;

   var dist2X = mouse.x - bee2pos.x;
   var dist2Y = mouse.y - bee2pos.y;

   var dist3X = mouse.x - bee3pos.x;
   var dist3Y = mouse.y - bee3pos.y;

   var dist4X = mouse.x - bee4pos.x;
   var dist4Y = mouse.y - bee4pos.y;

   var dist5X = mouse.x - bee5pos.x;
   var dist5Y = mouse.y - bee5pos.y;
   //Easing motion
    //Progressive reduction of distance
   beepos.x += distX/5 +2;
   beepos.y += distY/2 +4;

   bee2pos.x += dist2X/6 +9;
   bee2pos.y += dist2Y/3 -10;

   bee3pos.x += dist3X/8 +15;
   bee3pos.y += dist3Y/5 +5;

   bee4pos.x += dist4X/10 +5;
   bee4pos.y += dist4Y/5 +2;

   bee5pos.x += dist5X/6 +15;
   bee5pos.y += dist5Y/3 +20;


   bee.style.left = beepos.x + "px";
   bee.style.top = beepos.y + "px";

   bee2.style.left = bee2pos.x + "px";
   bee2.style.top = bee2pos.y + "px";

   bee3.style.left = bee3pos.x + "px";
   bee3.style.top = bee3pos.y + "px";

   bee4.style.left = bee4pos.x + "px";
   bee4.style.top = bee4pos.y + "px";

   bee5.style.left = bee5pos.x + "px";
   bee5.style.top = bee5pos.y + "px";

 }
