window.onload = function awal(){
   document.getElementById("info").hidden = false;
   document.getElementById("dafus").hidden = true;
   document.getElementById("petunjuk").hidden = true; 
};

function info(){
   document.getElementById("info").hidden = false;
   document.getElementById("dafus").hidden = true;
   document.getElementById("petunjuk").hidden = true;
   document.getElementById("btninfo").classList.add('active');
   document.getElementById("btndafus").classList.remove('active');
   document.getElementById("btnpetunjuk").classList.remove('active'); 
}
   
function dafus(){
   document.getElementById("info").hidden = true;
   document.getElementById("dafus").hidden = false;
   document.getElementById("petunjuk").hidden = true; 
   document.getElementById("btninfo").classList.remove('active');
   document.getElementById("btndafus").classList.add('active');
   document.getElementById("btnpetunjuk").classList.remove('active');
}
   
function petunjuk(){
   document.getElementById("info").hidden = true;
   document.getElementById("dafus").hidden = true;
   document.getElementById("petunjuk").hidden = false; 
   document.getElementById("btninfo").classList.remove('active');
   document.getElementById("btndafus").classList.remove('active');
   document.getElementById("btnpetunjuk").classList.add('active');
}