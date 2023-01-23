document.getElementById("bod").innerHTML=0;
var dar=document.getElementById("correct");
	dar.innerHTML=0;
	var mar=document.getElementById("falsee");
	mar.innerHTML=0;

function Dugme(){
	document.getElementById("trikolor").style.borderColor="red";
	document.getElementById("bumgaga").style.borderColor="rgb(7,99,18)";
	document.getElementById("vlajtgloria").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=-10;
	var dar=document.getElementById("correct");
	dar.innerHTML=0;
	var mar=document.getElementById("falsee");
	mar.innerHTML=1;
	var div1=document.getElementById("nzm");
var div2=document.getElementById("tru");
var div3=document.getElementById("truw");
div1.style.display="none";	
div2.style.display="none";	
div3.style.display="none";	
div2.style.display="block";


}
function Tread(){
	document.getElementById("trikolor").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga").style.borderColor="rgb(164,185,186)";
	document.getElementById("vlajtgloria").style.borderColor="red";
	document.getElementById("bumgaga").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=-10;
var dar=document.getElementById("correct");
	dar.innerHTML=0;
	var mar=document.getElementById("falsee");
	mar.innerHTML=1;
	var div1=document.getElementById("nzm");
var div2=document.getElementById("tru");
var div3=document.getElementById("truw");


div1.style.display="none";	
div2.style.display="none";	
div3.style.display="none";	

div2.style.display="block";

}
function Lacku(){
	document.getElementById("trikolor").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga").style.borderColor="red";
	document.getElementById("vlajtgloria").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumgaga").style.borderColor="rgb(7,99,18)";
	var par=document.getElementById("bod");
	par.innerHTML=-10;

	alert("Netacan odgovor");
var mar=document.getElementById("falsee");
	mar.innerHTML=1;
	var div1=document.getElementById("nzm");
var div2=document.getElementById("tru");
var div3=document.getElementById("truw");


div1.style.display="none";	
div2.style.display="none";	
div3.style.display="none";	

div2.style.display="block";
}
function Cerak(){
	document.getElementById("trikolor").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga").style.borderColor="rgb(164,185,186)";
	document.getElementById("vlajtgloria").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumgaga").style.borderColor="rgb(7,99,18)";
	var par=document.getElementById("bod");
	par.innerHTML=10;
	var dar=document.getElementById("correct");
	dar.innerHTML=1;
	alert("Tacan odgovor");
	var div1=document.getElementById("nzm");
var div2=document.getElementById("tru");
var div3=document.getElementById("truw");


div1.style.display="none";	
div2.style.display="none";	
div3.style.display="none";	

div2.style.display="block";
}
function Dugmer(){


	document.getElementById("trikolor1").style.borderColor="red";
	document.getElementById("bumgaga1").style.borderColor="rgb(164,185,186)";
	document.getElementById("vlajtgloria1").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga1").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	var div1=document.getElementById("nzm");
var div2=document.getElementById("tru");
var div3=document.getElementById("truw");


div1.style.display="none";	
div2.style.display="none";	
div3.style.display="none";	

div3.style.display="block";
	
}
function Treadr(){
	document.getElementById("trikolor1").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga1").style.borderColor="rgb(7,99,18)";
	document.getElementById("vlajtgloria1").style.borderColor="red";
	document.getElementById("bumgaga1").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var div1=document.getElementById("nzm");
var div2=document.getElementById("tru");
var div3=document.getElementById("truw");


div1.style.display="none";	
div2.style.display="none";	
div3.style.display="none";	

div3.style.display="block";
}
function Lackur(){
	document.getElementById("trikolor1").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga1").style.borderColor="rgb(7,99,18)";
	document.getElementById("vlajtgloria1").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumgaga1").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
	var div1=document.getElementById("nzm");
var div2=document.getElementById("tru");
var div3=document.getElementById("truw");


div1.style.display="none";	
div2.style.display="none";	
div3.style.display="none";	

div3.style.display="block";
}
function Cerakr(){
	document.getElementById("trikolor1").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga1").style.borderColor="rgb(7,99,18)";
	document.getElementById("vlajtgloria1").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumgaga1").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	var div1=document.getElementById("nzm");
var div2=document.getElementById("tru");
var div3=document.getElementById("truw");


div1.style.display="none";	
div2.style.display="none";	
div3.style.display="none";	

div3.style.display="block";
}

function Dugmee(){
    document.getElementById("trikolor2").style.borderColor="red";
	document.getElementById("bumgaga2").style.borderColor="rgb(164,185,186)";
	document.getElementById("vlajtgloria2").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga2").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("truw").style.display="none";
document.getElementById("truk").style.display="block";
	
}
function Treade(){
	document.getElementById("trikolor2").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga2").style.borderColor="rgb(7,99,18)";
	document.getElementById("vlajtgloria2").style.borderColor="red";
	document.getElementById("bumgaga2").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("truw").style.display="none";
document.getElementById("truk").style.display="block";
}
function Lackue(){
	document.getElementById("trikolor2").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga2").style.borderColor="rgb(7,99,18)";
	document.getElementById("vlajtgloria2").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumgaga2").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
	document.getElementById("truw").style.display="none";
	document.getElementById("truk").style.display="block";
}
function Cerake(){
	document.getElementById("trikolor2").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga2").style.borderColor="rgb(7,99,18)";
	document.getElementById("vlajtgloria2").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumgaga2").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	document.getElementById("truw").style.display="none";
document.getElementById("truk").style.display="block";
}


function Dugmeem(){
    document.getElementById("trikolor22").style.borderColor="rgb(7,99,18)";
	document.getElementById("bumgaga22").style.borderColor="rgb(164,185,186)";
	document.getElementById("vlajtgloria22").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumga22").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");

var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
	document.getElementById("truk").style.display="none";
	document.getElementById("trus").style.display="block";
}
function Treadem(){
	document.getElementById("trikolor22").style.borderColor="rgb(7,99,18)";
	document.getElementById("bumga22").style.borderColor="rgb(164,185,186)";
	document.getElementById("vlajtgloria22").style.borderColor="red";
	document.getElementById("bumgaga22").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("truk").style.display="none";
	document.getElementById("trus").style.display="block";
}
function Lackuem(){
	document.getElementById("trikolor22").style.borderColor="rgb(7,99,18)";
	document.getElementById("bumga22").style.borderColor="red";
	document.getElementById("vlajtgloria22").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumgaga22").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("truk").style.display="none";
	document.getElementById("trus").style.display="block";
}
function Cerakem(){
	document.getElementById("trikolor22").style.borderColor="rgb(7,99,18)";
	document.getElementById("bumga22").style.borderColor="rgb(164,185,186)";
	document.getElementById("vlajtgloria22").style.borderColor="rgb(164,185,186)";
	document.getElementById("bumgaga22").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("truk").style.display="none";
	document.getElementById("trus").style.display="block";
}


function Dum(){
    document.getElementById("trik").style.borderColor="red";
	document.getElementById("bum").style.borderColor="rgb(164,185,186)";
	document.getElementById("vla").style.borderColor="rgb(7,99,18)";
	document.getElementById("bu").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("trus").style.display="none";
	document.getElementById("tr").style.display="block";
}
function Tre(){
	document.getElementById("trik").style.borderColor="rgb(164,185,186)";
	document.getElementById("bum").style.borderColor="rgb(164,185,186)";
	document.getElementById("vla").style.borderColor="rgb(7,99,18)";
	document.getElementById("bu").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("trus").style.display="none";
	document.getElementById("tr").style.display="block";
}
function Lac(){
	document.getElementById("trik").style.borderColor="rgb(164,185,186)";
	document.getElementById("bum").style.borderColor="red";
	document.getElementById("vla").style.borderColor="rgb(7,99,18)";
	document.getElementById("bu").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("trus").style.display="none";
	document.getElementById("tr").style.display="block";
}
function Cer(){
	document.getElementById("trik").style.borderColor="rgb(164,185,186)";
	document.getElementById("bum").style.borderColor="rgb(164,185,186)";
	document.getElementById("vla").style.borderColor="rgb(7,99,18)";
	document.getElementById("bu").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("trus").style.display="none";
	document.getElementById("tr").style.display="block";
}
	


function Du(){
    document.getElementById("tri").style.borderColor="red";
	document.getElementById("vl").style.borderColor="rgb(164,185,186)";
	document.getElementById("bu2").style.borderColor="rgb(7,99,18)";
	document.getElementById("b").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("tr").style.display="none";
	document.getElementById("t").style.display="block";
	
}
function Tr(){
	document.getElementById("tri").style.borderColor="rgb(164,185,186)";
	document.getElementById("vl").style.borderColor="red";
	document.getElementById("bu2").style.borderColor="rgb(7,99,18)";
	document.getElementById("b").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("tr").style.display="none";
	document.getElementById("t").style.display="block";
}
function La(){
	document.getElementById("tri").style.borderColor="rgb(164,185,186)";
	document.getElementById("vl").style.borderColor="rgb(164,185,186)";
	document.getElementById("bu2").style.borderColor="rgb(7,99,18)";
	document.getElementById("b").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("tr").style.display="none";
	document.getElementById("t").style.display="block";
}
function Ce(){
	document.getElementById("tri").style.borderColor="rgb(164,185,186)";
	document.getElementById("vl").style.borderColor="rgb(164,185,186)";
	document.getElementById("bu2").style.borderColor="rgb(7,99,18)";
	document.getElementById("b").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("tr").style.display="none";
	document.getElementById("t").style.display="block";
}


function D(){
    document.getElementById("tr2").style.borderColor="red";
	document.getElementById("bu3").style.borderColor="rgb(164,185,186)";
	document.getElementById("v").style.borderColor="rgb(7,99,18)";
	document.getElementById("b2").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("t").style.display="none";
	document.getElementById("haha").style.display="block";
}
function T(){
	document.getElementById("tr2").style.borderColor="rgb(164,185,186)";
	document.getElementById("bu3").style.borderColor="rgb(164,185,186)";
	document.getElementById("v").style.borderColor="rgb(7,99,18)";
	document.getElementById("b2").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("t").style.display="none";
	document.getElementById("haha").style.display="block";
}
function L(){
	document.getElementById("tr2").style.borderColor="rgb(164,185,186)";
	document.getElementById("bu3").style.borderColor="red";
	document.getElementById("v").style.borderColor="rgb(7,99,18)";
	document.getElementById("b2").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("t").style.display="none";
	document.getElementById("haha").style.display="block";
}
function C(){
	document.getElementById("tr2").style.borderColor="rgb(164,185,186)";
	document.getElementById("bu3").style.borderColor="rgb(164,185,186)";
	document.getElementById("v").style.borderColor="rgb(7,99,18)";
	document.getElementById("b2").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("t").style.display="none";
	document.getElementById("haha").style.display="block";
}


function Maks(){
    document.getElementById("uzi").style.borderColor="rgb(7,99,18)";
	document.getElementById("pik").style.borderColor="rgb(164,185,186)";
	document.getElementById("kalas").style.borderColor="rgb(164,185,186)";
	document.getElementById("vac").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("haha").style.display="none";
	document.getElementById("hah").style.display="block";
}
function Vers(){
	document.getElementById("uzi").style.borderColor="rgb(7,99,18)";
	document.getElementById("vac").style.borderColor="rgb(164,185,186)";
	document.getElementById("kalas").style.borderColor="red";
	document.getElementById("pik").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("haha").style.display="none";
	document.getElementById("hah").style.display="block";
}
function Lars(){
	document.getElementById("uzi").style.borderColor="rgb(7,99,18)";
	document.getElementById("vac").style.borderColor="red";
	document.getElementById("kalas").style.borderColor="rgb(164,185,186)";
	document.getElementById("pik").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("haha").style.display="none";
	document.getElementById("hah").style.display="block";
}
function Cars(){
	document.getElementById("uzi").style.borderColor="rgb(7,99,18)";
	document.getElementById("vac").style.borderColor="rgb(164,185,186)";
	document.getElementById("kalas").style.borderColor="rgb(164,185,186)";
	document.getElementById("pik").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("haha").style.display="none";
	document.getElementById("hah").style.display="block";
}


function Mak(){
	document.getElementById("uz").style.borderColor="red"; 
	document.getElementById("va").style.borderColor="rgb(7,99,18)";
	document.getElementById("kala").style.borderColor="rgb(164,185,186)";
	document.getElementById("pi").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("hah").style.display="none";
	document.getElementById("ha").style.display="block";
	
}
function Ver(){
	document.getElementById("uz").style.borderColor="rgb(164,185,186)";
	document.getElementById("va").style.borderColor="rgb(7,99,18)";
	document.getElementById("kala").style.borderColor="red";
	document.getElementById("pi").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("hah").style.display="none";
	document.getElementById("ha").style.display="block";
}
function Lar(){
	document.getElementById("uz").style.borderColor="rgb(164,185,186)";
	document.getElementById("va").style.borderColor="rgb(7,99,18)";
	document.getElementById("kala").style.borderColor="rgb(164,185,186)";
	document.getElementById("pi").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("hah").style.display="none";
	document.getElementById("ha").style.display="block";
}
function Car(){
	document.getElementById("uz").style.borderColor="rgb(164,185,186)";
	document.getElementById("va").style.borderColor="rgb(7,99,18)";
	document.getElementById("kala").style.borderColor="rgb(164,185,186)";
	document.getElementById("pi").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("hah").style.display="none";
	document.getElementById("ha").style.display="block";
}

function Ma(){
    document.getElementById("u").style.borderColor="rgb(7,99,18)";
	document.getElementById("pk").style.borderColor="rgb(164,185,186)";
	document.getElementById("kal").style.borderColor="rgb(164,185,186)";
	document.getElementById("va2").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");

var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
	document.getElementById("ha").style.display="none";
	document.getElementById("suzi").style.display="block";
}
function Ve(){
	document.getElementById("u").style.borderColor="rgb(7,99,18)";
	document.getElementById("va2").style.borderColor="rgb(164,185,186)";
	document.getElementById("kal").style.borderColor="red";
	document.getElementById("pk").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	document.getElementById("ha").style.display="none";
	document.getElementById("suzi").style.display="block";
}
function Le(){
	document.getElementById("u").style.borderColor="rgb(7,99,18)";
	document.getElementById("va2").style.borderColor="red";
	document.getElementById("kal").style.borderColor="rgb(164,185,186)";
	document.getElementById("pk").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	document.getElementById("ha").style.display="none";
	document.getElementById("suzi").style.display="block";
}
function Ca(){
	document.getElementById("u").style.borderColor="rgb(7,99,18)";
	document.getElementById("va2").style.borderColor="rgb(164,185,186)";
	document.getElementById("kal").style.borderColor="rgb(164,185,186)";
	document.getElementById("pk").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	document.getElementById("ha").style.display="none";
	document.getElementById("suzi").style.display="block";
}

function Vukla(){
    document.getElementById("fkt").style.borderColor="red";
	document.getElementById("tbm").style.borderColor="rgb(7,99,18)";
	document.getElementById("bgm").style.borderColor="rgb(164,185,186)";
	document.getElementById("dgv").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("suzi").style.display="none";
	document.getElementById("suz").style.display="block";
	
}
function Ona(){
	document.getElementById("fkt").style.borderColor="rgb(164,185,186)";
	document.getElementById("tbm").style.borderColor="rgb(7,99,18)";
	document.getElementById("bgm").style.borderColor="red";
	document.getElementById("dgv").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("suzi").style.display="none";
	document.getElementById("suz").style.display="block";
}
function Sugla(){
	document.getElementById("fkt").style.borderColor="rgb(164,185,186)";
	document.getElementById("tbm").style.borderColor="rgb(7,99,18)";
	document.getElementById("bgm").style.borderColor="rgb(164,185,186)";
	document.getElementById("dgv").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("suzi").style.display="none";
	document.getElementById("suz").style.display="block";
}
function Uma(){
	document.getElementById("fkt").style.borderColor="rgb(164,185,186)";
	document.getElementById("tbm").style.borderColor="rgb(7,99,18)";
	document.getElementById("bgm").style.borderColor="rgb(164,185,186)";
	document.getElementById("dgv").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("suzi").style.display="none";
	document.getElementById("suz").style.display="block";
}


function Vukl(){
    document.getElementById("fk").style.borderColor="red";
	document.getElementById("tb").style.borderColor="rgb(164,185,186)";
	document.getElementById("bg").style.borderColor="rgb(164,185,186)";
	document.getElementById("dg").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	document.getElementById("suz").style.display="none";
	document.getElementById("su").style.display="block";
}
function On(){
	document.getElementById("fk").style.borderColor="rgb(164,185,186)";
	document.getElementById("tb").style.borderColor="rgb(164,185,186)";
	document.getElementById("bg").style.borderColor="red";
	document.getElementById("dg").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	document.getElementById("suz").style.display="none";
	document.getElementById("su").style.display="block";
}
function Sugl(){
	document.getElementById("fk").style.borderColor="rgb(164,185,186)";
	document.getElementById("tb").style.borderColor="red";
	document.getElementById("bg").style.borderColor="rgb(164,185,186)";
	document.getElementById("dg").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	document.getElementById("suz").style.display="none";
	document.getElementById("su").style.display="block";
}
function Um(){
	document.getElementById("fk").style.borderColor="rgb(164,185,186)";
	document.getElementById("tb").style.borderColor="rgb(164,185,186)";
	document.getElementById("bg").style.borderColor="rgb(164,185,186)";
	document.getElementById("dg").style.borderColor="rgb(7,99,18)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
	document.getElementById("suz").style.display="none";
	document.getElementById("su").style.display="block";
}

function Vukln(){
    document.getElementById("fkn").style.borderColor="red";
	document.getElementById("tbn").style.borderColor="rgb(164,185,186)";
	document.getElementById("bgn").style.borderColor="rgb(164,185,186)";
	document.getElementById("dgn").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("su").style.display="none";
	document.getElementById("staje").style.display="block";
}
function Onn(){
	document.getElementById("fkn").style.borderColor="rgb(164,185,186)";
	document.getElementById("tbn").style.borderColor="rgb(164,185,186)";
	document.getElementById("bgn").style.borderColor="red";
	document.getElementById("dgn").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("su").style.display="none";
	document.getElementById("staje").style.display="block";
}
function Sugln(){
	document.getElementById("fkn").style.borderColor="rgb(164,185,186)";
	document.getElementById("tbn").style.borderColor="red";
	document.getElementById("bgn").style.borderColor="rgb(164,185,186)";
	document.getElementById("dgn").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("su").style.display="none";
	document.getElementById("staje").style.display="block";
}
function Umn(){
	document.getElementById("fkn").style.borderColor="rgb(164,185,186)";
	document.getElementById("tbn").style.borderColor="rgb(164,185,186)";
	document.getElementById("bgn").style.borderColor="rgb(164,185,186)";
	document.getElementById("dgn").style.borderColor="rgb(7,99,18)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("su").style.display="none";
	document.getElementById("staje").style.display="block";
}


function strancom(){
    document.getElementById("kucici").style.borderColor="red";
	document.getElementById("griza").style.borderColor="rgb(164,185,186)";
	document.getElementById("cipelu").style.borderColor="rgb(7,99,18)";
	document.getElementById("osecalo").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("staje").style.display="none";
	document.getElementById("staj").style.display="block";
}
function drogu(){
	document.getElementById("kucici").style.borderColor="rgb(164,185,186)";
	document.getElementById("griza").style.borderColor="rgb(164,185,186)";
	document.getElementById("cipelu").style.borderColor="rgb(7,99,18)";
	document.getElementById("osecalo").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("staje").style.display="none";
	document.getElementById("staj").style.display="block";
}
function snogu(){
	document.getElementById("kucici").style.borderColor="rgb(164,185,186)";
	document.getElementById("griza").style.borderColor="red";
	document.getElementById("cipelu").style.borderColor="rgb(7,99,18)";
	document.getElementById("osecalo").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("staje").style.display="none";
	document.getElementById("staj").style.display="block";
}
function sankom(){
	document.getElementById("kucici").style.borderColor="rgb(164,185,186)";
	document.getElementById("griza").style.borderColor="rgb(164,185,186)";
	document.getElementById("cipelu").style.borderColor="rgb(7,99,18)";
	document.getElementById("osecalo").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("staje").style.display="none";
	document.getElementById("staj").style.display="block";
}

function stranco(){
    document.getElementById("kucic").style.borderColor="red";
	document.getElementById("griz").style.borderColor="rgb(7,99,18)";
	document.getElementById("cipel").style.borderColor="rgb(164,185,186)";
	document.getElementById("osecal").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	document.getElementById("staj").style.display="none";
	document.getElementById("sta").style.display="block";
}
function drog(){
	document.getElementById("kucic").style.borderColor="rgb(164,185,186)";
	document.getElementById("griz").style.borderColor="rgb(7,99,18)";
	document.getElementById("cipel").style.borderColor="red";
	document.getElementById("osecal").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	document.getElementById("staj").style.display="none";
	document.getElementById("sta").style.display="block";
}
function snog(){
	document.getElementById("kucic").style.borderColor="rgb(164,185,186)";
	document.getElementById("griz").style.borderColor="rgb(7,99,18)";
	document.getElementById("cipel").style.borderColor="rgb(164,185,186)";
	document.getElementById("osecal").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
	document.getElementById("staj").style.display="none";
	document.getElementById("sta").style.display="block";
}
function sanko(){
	document.getElementById("kucic").style.borderColor="rgb(164,185,186)";
	document.getElementById("griz").style.borderColor="rgb(7,99,18)";
	document.getElementById("cipel").style.borderColor="rgb(164,185,186)";
	document.getElementById("osecal").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
	document.getElementById("staj").style.display="none";
	document.getElementById("sta").style.display="block";
}



function stranc(){
    document.getElementById("kuci").style.borderColor="red";
	document.getElementById("gri").style.borderColor="rgb(164,185,186)";
	document.getElementById("cipe").style.borderColor="rgb(164,185,186)";
	document.getElementById("oseca").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("sta").style.display="none";
	document.getElementById("st").style.display="block";
}
function dro(){
	document.getElementById("kuci").style.borderColor="rgb(164,185,186)";
	document.getElementById("gri").style.borderColor="rgb(164,185,186)";
	document.getElementById("cipe").style.borderColor="red";
	document.getElementById("oseca").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("sta").style.display="none";
	document.getElementById("st").style.display="block";
}
function sno(){
	document.getElementById("kuci").style.borderColor="rgb(164,185,186)";
	document.getElementById("gri").style.borderColor="red";
	document.getElementById("cipe").style.borderColor="rgb(164,185,186)";
	document.getElementById("oseca").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("sta").style.display="none";
document.getElementById("st").style.display="block";
}
function sank(){
	document.getElementById("kuci").style.borderColor="rgb(164,185,186)";
	document.getElementById("gri").style.borderColor="rgb(164,185,186)";
	document.getElementById("cipe").style.borderColor="rgb(164,185,186)";
	document.getElementById("oseca").style.borderColor="rgb(7,99,18)";
	alert("Tacan odgovor");
	var mar=document.getElementById("falsee");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("sta").style.display="none";
	document.getElementById("st").style.display="block";
}



function stran(){
    document.getElementById("kuc").style.borderColor="red";
	document.getElementById("gr").style.borderColor="rgb(164,185,186)";
	document.getElementById("cip").style.borderColor="rgb(7,99,18)";
	document.getElementById("osec").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st").style.display="none";
	document.getElementById("st2").style.display="block";
}
function dr(){
	document.getElementById("kuc").style.borderColor="rgb(164,185,186)";
	document.getElementById("gr").style.borderColor="rgb(164,185,186)";
	document.getElementById("cip").style.borderColor="rgb(7,99,18)";
	document.getElementById("osec").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("st").style.display="none";
	document.getElementById("st2").style.display="block";
}
function sn(){
	document.getElementById("kuc").style.borderColor="rgb(164,185,186)";
	document.getElementById("gr").style.borderColor="red";
	document.getElementById("cip").style.borderColor="rgb(7,99,18)";
	document.getElementById("osec").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st").style.display="none";
	document.getElementById("st2").style.display="block";
}
function san(){
	document.getElementById("kuc").style.borderColor="rgb(164,185,186)";
	document.getElementById("gr").style.borderColor="rgb(164,185,186)";
	document.getElementById("cip").style.borderColor="rgb(7,99,18)";
	document.getElementById("osec").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st").style.display="none";
	document.getElementById("st2").style.display="block";
}


function stra(){
    document.getElementById("ku").style.borderColor="rgb(7,99,18)";
	document.getElementById("ose").style.borderColor="rgb(164,185,186)";
	document.getElementById("g").style.borderColor="rgb(164,185,186)";
	document.getElementById("ci").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("st2").style.display="none";
	document.getElementById("st3").style.display="block";
}
function d(){
	document.getElementById("ku").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci").style.borderColor="red";
	document.getElementById("g").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st2").style.display="none";
	document.getElementById("st3").style.display="block";
}
function s(){
	document.getElementById("ku").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci").style.borderColor="rgb(164,185,186)";
	document.getElementById("g").style.borderColor="red";
	document.getElementById("ose").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st2").style.display="none";
	document.getElementById("st3").style.display="block";
}
function sa(){
	document.getElementById("ku").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci").style.borderColor="rgb(164,185,186)";
	document.getElementById("g").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st2").style.display="none";
	document.getElementById("st3").style.display="block";
}



function stra2(){
    document.getElementById("ku2").style.borderColor="rgb(7,99,18)";
	document.getElementById("ose2").style.borderColor="rgb(164,185,186)";
	document.getElementById("g2").style.borderColor="rgb(164,185,186)";
	document.getElementById("ci2").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("st3").style.display="none";
	document.getElementById("st4").style.display="block";
}
function d2(){
	document.getElementById("ku2").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci2").style.borderColor="red";
	document.getElementById("g2").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose2").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st3").style.display="none";
	document.getElementById("st4").style.display="block";
}
function s2(){
	document.getElementById("ku2").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci2").style.borderColor="rgb(164,185,186)";
	document.getElementById("g2").style.borderColor="red";
	document.getElementById("ose2").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st3").style.display="none";
	document.getElementById("st4").style.display="block";
}
function sa2(){
	document.getElementById("ku2").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci2").style.borderColor="rgb(164,185,186)";
	document.getElementById("g2").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose2").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st3").style.display="none";
	document.getElementById("st4").style.display="block";
}


function stra3(){
    document.getElementById("ku3").style.borderColor="rgb(7,99,18)";
	document.getElementById("ose3").style.borderColor="rgb(164,185,186)";
	document.getElementById("g3").style.borderColor="rgb(164,185,186)";
	document.getElementById("ci3").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");

var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("st4").style.display="none";
	document.getElementById("st5").style.display="block";
}
function d3(){
	document.getElementById("ku3").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci3").style.borderColor="red";
	document.getElementById("g3").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose3").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st4").style.display="none";
	document.getElementById("st5").style.display="block";
}
function s3(){
	document.getElementById("ku3").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci3").style.borderColor="rgb(164,185,186)";
	document.getElementById("g3").style.borderColor="red";
	document.getElementById("ose3").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st4").style.display="none";
	document.getElementById("st5").style.display="block";
}
function sa3(){
	document.getElementById("ku3").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci3").style.borderColor="rgb(164,185,186)";
	document.getElementById("g3").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose3").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st4").style.display="none";
	document.getElementById("st5").style.display="block";
	}


	function stra4(){
    document.getElementById("ku4").style.borderColor="red";
	document.getElementById("g4").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci4").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose4").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st5").style.display="none";
	document.getElementById("st6").style.display="block";
}
function d4(){
	document.getElementById("ku4").style.borderColor="rgb(164,185,186)";
	document.getElementById("g4").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci4").style.borderColor="red";
	document.getElementById("ose4").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st5").style.display="none";
	document.getElementById("st6").style.display="block";
}
function s4(){
	document.getElementById("ku4").style.borderColor="rgb(164,185,186)";
	document.getElementById("g4").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci4").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose4").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("st5").style.display="none";
	document.getElementById("st6").style.display="block";
}
function sa4(){
	document.getElementById("ku4").style.borderColor="rgb(164,185,186)";
	document.getElementById("g4").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci4").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose4").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st5").style.display="none";
	document.getElementById("st6").style.display="block";
}


function stra5(){
    document.getElementById("ku5").style.borderColor="red";
	document.getElementById("g5").style.borderColor="rgb(164,185,186)";
	document.getElementById("ci5").style.borderColor="rgb(7,99,18)";
	document.getElementById("ose5").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st6").style.display="none";
	document.getElementById("st7").style.display="block";
}
function d5(){
	document.getElementById("ku5").style.borderColor="rgb(164,185,186)";
	document.getElementById("g5").style.borderColor="rgb(164,185,186)";
	document.getElementById("ci5").style.borderColor="rgb(7,99,18)";
	document.getElementById("ose5").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("st6").style.display="none";
	document.getElementById("st7").style.display="block";
}
function s5(){
	document.getElementById("ku5").style.borderColor="rgb(164,185,186)";
	document.getElementById("g5").style.borderColor="red";
	document.getElementById("ci5").style.borderColor="rgb(7,99,18)";
	document.getElementById("ose5").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st6").style.display="none";
	document.getElementById("st7").style.display="block";
}
function sa5(){
	document.getElementById("ku5").style.borderColor="rgb(164,185,186)";
	document.getElementById("g5").style.borderColor="rgb(164,185,186)";
	document.getElementById("ci5").style.borderColor="rgb(7,99,18)";
	document.getElementById("ose5").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st6").style.display="none";
	document.getElementById("st7").style.display="block";
}


function stra6(){
    document.getElementById("ku6").style.borderColor="red";
	document.getElementById("g6").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci6").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose6").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st7").style.display="none";
	document.getElementById("st8").style.display="block";
}
function d6(){
	document.getElementById("ku6").style.borderColor="rgb(164,185,186)";
	document.getElementById("g6").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci6").style.borderColor="red";
	document.getElementById("ose6").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st7").style.display="none";
	document.getElementById("st8").style.display="block";
}
function s6(){
	document.getElementById("ku6").style.borderColor="rgb(164,185,186)";
	document.getElementById("g6").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci6").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose6").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("st7").style.display="none";
	document.getElementById("st8").style.display="block";
}
function sa6(){
	document.getElementById("ku6").style.borderColor="rgb(164,185,186)";
	document.getElementById("g6").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci6").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose6").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st7").style.display="none";
	document.getElementById("st8").style.display="block";
}


function stra7(){
    document.getElementById("ku7").style.borderColor="red";
	document.getElementById("g7").style.borderColor="rgb(164,185,186)";
	document.getElementById("ci7").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose7").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st8").style.display="none";
	document.getElementById("st9").style.display="block";
}
function d7(){
	document.getElementById("ku7").style.borderColor="rgb(164,185,186)";
	document.getElementById("g7").style.borderColor="rgb(164,185,186)";
	document.getElementById("ci7").style.borderColor="red";
	document.getElementById("ose7").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st8").style.display="none";
	document.getElementById("st9").style.display="block";
}
function s7(){
	document.getElementById("ku7").style.borderColor="rgb(164,185,186)";
	document.getElementById("g7").style.borderColor="red";
	document.getElementById("ci7").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose7").style.borderColor="rgb(7,99,18)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st8").style.display="none";
	document.getElementById("st9").style.display="block";
}
function sa7(){
	document.getElementById("ku7").style.borderColor="rgb(164,185,186)";
	document.getElementById("g7").style.borderColor="rgb(164,185,186)";
	document.getElementById("ci7").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose7").style.borderColor="rgb(7,99,18)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("st8").style.display="none";
	document.getElementById("st9").style.display="block";
}

function stra8(){
    document.getElementById("ku8").style.borderColor="rgb(7,99,18)";
	document.getElementById("ose8").style.borderColor="rgb(164,185,186)";
	document.getElementById("g8").style.borderColor="rgb(164,185,186)";
	document.getElementById("ci8").style.borderColor="rgb(164,185,186)";
	alert("Tacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)+10;
	var dar=document.getElementById("correct");
	dar.innerHTML=parseInt(dar.innerHTML)+1;
document.getElementById("st9").style.display="none";
	document.getElementById("finish").style.display="block";
	document.getElementById("tim").style.display="none";
	
	clearInterval(timer);

	

}
function d8(){
	document.getElementById("ku8").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci8").style.borderColor="red";
	document.getElementById("g8").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose8").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st9").style.display="none";
	document.getElementById("finish").style.display="block";
	document.getElementById("tim").style.display="none";
	
	clearInterval(timer);
	

}
function s8(){
	document.getElementById("ku8").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci8").style.borderColor="rgb(164,185,186)";
	document.getElementById("g8").style.borderColor="red";
	document.getElementById("ose8").style.borderColor="rgb(164,185,186)";
alert("Netacan odgovor");
var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st9").style.display="none";
	document.getElementById("finish").style.display="block";
	document.getElementById("tim").style.display="none";
	
	clearInterval(timer);

	
	
}
function sa8(){
	document.getElementById("ku8").style.borderColor="rgb(7,99,18)";
	document.getElementById("ci8").style.borderColor="rgb(164,185,186)";
	document.getElementById("g8").style.borderColor="rgb(164,185,186)";
	document.getElementById("ose8").style.borderColor="red";
	alert("Netacan odgovor");
	var par=document.getElementById("bod");
	par.innerHTML=parseInt(par.innerHTML)-10;
	var mar=document.getElementById("falsee");
	mar.innerHTML=parseInt(mar.innerHTML)+1;
document.getElementById("st9").style.display="none";
	document.getElementById("finish").style.display="block";
	document.getElementById("tim").style.display="none";
	
	clearInterval(timer);

	}

let time=300;
let timer=setInterval(function()
	{
		time--;
	document.getElementById("tim").innerHTML=time;
		if(time===0){
			clearInterval(timer);
      document.getElementById("nzm").style.display="none";
      document.getElementById("tru").style.display="none";
      document.getElementById("truw").style.display="none";
      document.getElementById("truk").style.display="none";
      document.getElementById("trus").style.display="none";
      document.getElementById("tr").style.display="none";
      document.getElementById("t").style.display="none";
      document.getElementById("haha").style.display="none";
      document.getElementById("hah").style.display="none";
      document.getElementById("ha").style.display="none";
      document.getElementById("tim").style.display="none";
      document.getElementById("suzi").style.display="none";
      document.getElementById("suz").style.display="none";
      document.getElementById("su").style.display="none";
      document.getElementById("staje").style.display="none";
      document.getElementById("staj").style.display="none";
      document.getElementById("sta").style.display="none";
      document.getElementById("st").style.display="none";
      document.getElementById("st2").style.display="none";
      document.getElementById("st3").style.display="none";
      document.getElementById("st4").style.display="none";
      document.getElementById("st5").style.display="none";
      document.getElementById("st6").style.display="none";
      document.getElementById("st7").style.display="none";
      document.getElementById("st8").style.display="none";
      document.getElementById("st9").style.display="none";
      document.getElementById("finish").style.display="none";
      document.getElementById("vrijeme").style.display="block";
		}
		
	},1000)


	let time2=300;
	let timer2;
	function startTimer2(){
 timer2=setInterval(function()
	{
		time2--;
	document.getElementById("tim").innerHTML=time2;
		if(time2===0){
			clearInterval(timer2);
      document.getElementById("nzm").style.display="none";
      document.getElementById("tru").style.display="none";
      document.getElementById("truw").style.display="none";
      document.getElementById("truk").style.display="none";
      document.getElementById("trus").style.display="none";
      document.getElementById("tr").style.display="none";
      document.getElementById("t").style.display="none";
      document.getElementById("haha").style.display="none";
      document.getElementById("hah").style.display="none";
      document.getElementById("ha").style.display="none";
      document.getElementById("tim").style.display="none";
      document.getElementById("suzi").style.display="none";
      document.getElementById("suz").style.display="none";
      document.getElementById("su").style.display="none";
      document.getElementById("staje").style.display="none";
      document.getElementById("staj").style.display="none";
      document.getElementById("sta").style.display="none";
      document.getElementById("st").style.display="none";
      document.getElementById("st2").style.display="none";
      document.getElementById("st3").style.display="none";
      document.getElementById("st4").style.display="none";
      document.getElementById("st5").style.display="none";
      document.getElementById("st6").style.display="none";
      document.getElementById("st7").style.display="none";
      document.getElementById("st8").style.display="none";
      document.getElementById("st9").style.display="none";
      document.getElementById("finish").style.display="none";
      document.getElementById("vrijeme").style.display="block";
		}
		
	},1000) 
}
function Isteklo(){
	document.getElementById("tim").style.display="inline";
	document.getElementById("vrijeme").style.display="none";
	document.getElementById("finish").style.display="none";
	document.getElementById("nzm").style.display="block";
	document.getElementById("bod").innerHTML=0;
document.getElementById("correct").innerHTML=0;
document.getElementById("falsee").innerHTML=0;

	const buttons=document.querySelectorAll("button");

	for(const button of buttons){
		button.style.backgroundColor="transparent";	
		button.style.borderColor="rgb(103,131,133)";	
function zavra(){
    button.style.backgroundColor="white"
}
button.onmouseover=zavra;
function kava(){
    button.style.backgroundColor="initial"
}
button.onmouseout=kava;


	}

time2=300;
startTimer2();

}


let time3=300;
	let timer3;
	
	
		function startTimer(){
 timer3=setInterval(function()
	{	

		time3--;
	document.getElementById("tim").innerHTML=time3;
	
		if(time3===0){
			clearInterval(timer3);
      document.getElementById("nzm").style.display="none";
      document.getElementById("tru").style.display="none";
      document.getElementById("truw").style.display="none";
      document.getElementById("truk").style.display="none";
      document.getElementById("trus").style.display="none";
      document.getElementById("tr").style.display="none";
      document.getElementById("t").style.display="none";
      document.getElementById("haha").style.display="none";
      document.getElementById("hah").style.display="none";
      document.getElementById("ha").style.display="none";
      document.getElementById("tim").style.display="none";
      document.getElementById("suzi").style.display="none";
      document.getElementById("suz").style.display="none";
      document.getElementById("su").style.display="none";
      document.getElementById("staje").style.display="none";
      document.getElementById("staj").style.display="none";
      document.getElementById("sta").style.display="none";
      document.getElementById("st").style.display="none";
      document.getElementById("st2").style.display="none";
      document.getElementById("st3").style.display="none";
      document.getElementById("st4").style.display="none";
      document.getElementById("st5").style.display="none";
      document.getElementById("st6").style.display="none";
      document.getElementById("st7").style.display="none";
      document.getElementById("st8").style.display="none";
      document.getElementById("st9").style.display="none";
      document.getElementById("finish").style.display="none";
      document.getElementById("vrijeme").style.display="block";
		}
		
	},1000);

}


function Isteklo2(){
	
	document.getElementById("ban").style.display="inline";
	document.getElementById("tim").style.display="inline";
	document.getElementById("vrijeme").style.display="none";
	document.getElementById("finish").style.display="none";
	document.getElementById("nzm").style.display="block";
	document.getElementById("bod").innerHTML=0;
document.getElementById("correct").innerHTML=0;
document.getElementById("falsee").innerHTML=0;

	const buttons=document.querySelectorAll("button");

	for(const button of buttons){
		button.style.backgroundColor="transparent";	
		button.style.borderColor="rgb(103,131,133)";
function zavra(){
    button.style.backgroundColor="white"
}
button.onmouseover=zavra;
function kava(){
    button.style.backgroundColor="initial"
}
button.onmouseout=kava;


clearInterval(timer3);
clearInterval(timer);
clearInterval(timer2);
time3=300;
startTimer();
	}
}