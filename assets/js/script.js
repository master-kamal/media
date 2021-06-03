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

window.onload = function awalMateri(){
   document.getElementById("satu").hidden = false;
   document.getElementById("dua").hidden = true;
   document.getElementById("tiga").hidden = true; 
   document.getElementById("empat").hidden = true; 
};

function satu(){
   document.getElementById("satu").hidden = false;
   document.getElementById("btnsatu").classList.add('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active'); 
}

function dua(){
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = false;
   document.getElementById("btndua").classList.add('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active'); 
}

function tiga(){
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = false;
   document.getElementById("btntiga").classList.add('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active'); 
}

function empat(){
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = false;
   document.getElementById("btnempat").classList.add('active'); 
}