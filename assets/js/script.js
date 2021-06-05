window.onload = function awal(){
   document.getElementById("info").hidden = false;
   document.getElementById("dafus").hidden = true;
   document.getElementById("petunjuk").hidden = true; 
};

window.localStorage;

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
   document.getElementById("btnprev").classList.add('disabled'); 
   document.getElementById("satu").hidden = false;
   document.getElementById("btnsatu").classList.add('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active'); 
   document.getElementById("next").setAttribute( "onClick", "javascript: dua();" );
}

function dua(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = false;
   document.getElementById("btndua").classList.add('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active');
   document.getElementById("next").setAttribute( "onClick", "javascript: tiga();" );
   document.getElementById("prev").setAttribute( "onClick", "javascript: satu();" );
}

function tiga(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = false;
   document.getElementById("btntiga").classList.add('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active'); 
   document.getElementById("next").setAttribute( "onClick", "javascript: empat();" );
   document.getElementById("prev").setAttribute( "onClick", "javascript: dua();" );
}

function empat(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = false;
   document.getElementById("btnempat").classList.add('active'); 
   document.getElementById("btnnext").classList.add('disabled'); 
   document.getElementById("prev").setAttribute( "onClick", "javascript: tiga();" );
   document.getElementById("mnext").hidden = false;
}

window.onload = function awalMateri2(){
   document.getElementById("satu").hidden = false;
   document.getElementById("dua").hidden = true;
};

function satu2(){
   document.getElementById("btnprev").classList.add('disabled'); 
   document.getElementById("satu").hidden = false;
   document.getElementById("btnsatu").classList.add('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("next").setAttribute( "onClick", "javascript: dua2();" );
}

function dua2(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = false;
   document.getElementById("btndua").classList.add('active');
   document.getElementById("btnnext").classList.add('disabled'); 
   document.getElementById("prev").setAttribute( "onClick", "javascript: satu2();" );
   document.getElementById("mnext").hidden = false;
}

window.onload = function awalMateri3(){
   document.getElementById("satu").hidden = false;
   document.getElementById("dua").hidden = true;
   document.getElementById("tiga").hidden = true; 
};

function satu3(){
   document.getElementById("btnprev").classList.add('disabled'); 
   document.getElementById("satu").hidden = false;
   document.getElementById("btnsatu").classList.add('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("next").setAttribute( "onClick", "javascript: dua3();" );
}

function dua3(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = false;
   document.getElementById("btndua").classList.add('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("next").setAttribute( "onClick", "javascript: tiga3();" );
   document.getElementById("prev").setAttribute( "onClick", "javascript: satu3();" );
}

function tiga3(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = false;
   document.getElementById("btntiga").classList.add('active'); 
   document.getElementById("prev").setAttribute( "onClick", "javascript: dua3();" );
   document.getElementById("btnnext").classList.add('disabled'); 
   document.getElementById("mnext").hidden = false;
}