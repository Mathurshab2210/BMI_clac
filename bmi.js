function display(){
    document.getElementById("result").style.display="block"
}
document.getElementById("calc").onclick=function(){
   let h=document.getElementById("height")
   let ch=parseFloat(h.value)
   let w=document.getElementById("weight")
   let cw=parseFloat(w.value)
   let op=cw/(ch*ch);
   
   if(op>1 && op<16){
      display();
      document.getElementById("result").innerHTML="Your BMI is :" +op + "you are thin need to take good diet"
    

   }
   else if(op>=16 && op<19){
       display();
       document.getElementById("result").innerHTML="Your BMI is :" +op + "you are under-Weight"
     }
     else if(op>=19 && op<=25){
        display();
       document.getElementById("result").innerHTML="Your BMI is :" +op + "you are healthy"

     }
     else if(op>25 && op<=30){
        display();
       document.getElementById("result").innerHTML="Your BMI is :" +op + "you are over-Weight"
     }
     else {
        display();
       document.getElementById("result").innerHTML="Your BMI is :" +op + "you are Obese" 
     }
     
}
document.getElementById("reset").onclick=function(){
   let h1=document.getElementById("height")
   h1.value=""
   let w1=document.getElementById("weight")
   w1.value=""
   document.getElementById("result").innerHTML="" 
}