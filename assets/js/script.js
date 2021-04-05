function hitung ()
       {
              var a =document.getElementById("a").value;
              var b =document.getElementById("b").value;
              var c =document.getElementById("c").value;
              var disk = (b*b)-(4*a*c);
                   document.getElementById("disk").value= disk;

           if (disk>0)
          {
               var x1 = (-b - Math.sqrt (d))/(2*a);
                  document.getElementById("x1").value= x1;
               var x2 = (-b + Math.sqrt (d))/(2*a);
                  document.getElementById("x2").value= x2;
               var ket = ("Memiliki 2 akar real yang berbeda");
                  document.getElementById("ket").value= ket; 
          }else if (disk==0)
          {
               var x1 = -b /2*a
                 document.getElementById("x1").value= x1;
               var x2 = -b /2*a
                 document.getElementById("x2").value= x2;
               var ket = ("Memiliki 2 akar yang sama dan rasional");
                 document.getElementById("ket").value= ket;
          }else 
          {
               var x1 = ("Tidak Dapat Di Hitung");
                  document.getElementById("x1").value= x1;
               var x2 = ("Tidak Dapat Di Hitung");
                  document.getElementById("x2").value= x2;
               var ket = ("Persamaan kuadrat imajiner (tidak memiliki akar-akar)");
                  document.getElementById("ket").value= ket;
          }
        }

/*var a, b, c;

a = document.getElementById("a").value;
b = document.getElementById("b").value;
c = document.getElementById("c").value;

document.getElementById("a").innerHTML = a;
document.getElementById("b").innerHTML = b;
document.getElementById("c").innerHTML = c;

Hitung(a,b,c);

function Hitung(a,b,c) {
	var disk, x1, x2;

	if (a == 0) {
		document.write("Bukan persamaan kuadrat");
	}
	else {
		disk = (b*b) - (4*a*c);

		if (disk > 0) {
			x1=(-b+Math.sqrt(disk))/(2*a);
	        x2=(-b-Math.sqrt(disk))/(2*a);
	        document.getElementById("disk").innerHTML = disk;
	        document.getElementById("x1").innerHTML = x1;
			document.getElementById("x2").innerHTML = x2;
		}
		else if (disk == 0) {
			x1=-b/(2*a);
	        x2=x1;
	        document.getElementById("disk").innerHTML = 0;
	        document.getElementById("x1").innerHTML = x1;
			document.getElementById("x2").innerHTML = x2;
		}
		else {
			document.write("Akar Imajiner");
		}
	}
}

/*var a=1;
var b=6;
var c=5;
document.getElementById("a").innerHTML = a;
document.getElementById("b").innerHTML = b;
document.getElementById("c").innerHTML = c;

var d = (b*b) - (4*a*c);
document.getElementById("d").innerHTML = d;

var x1=(-b+Math.sqrt(d))/(2*a);
var x2=(-b-Math.sqrt(d))/(2*a);

document.getElementById("x1").innerHTML = x1;
document.getElementById("x2").innerHTML = x2;