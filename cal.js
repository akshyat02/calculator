//	Declaring all variables here
var d = document.getElementById('disp');
var toggle = document.getElementById("theme-toggle");
var td = document.querySelectorAll('td');
var decpoint = document.querySelector('#decpoint');
var lastletter = d.value.substring(d.value.length-1,d.value.length);
var dpcounter = 0;
var opcounter = 0;
var res = document.querySelector('#reset');
var op = document.querySelectorAll('.operator');

function toggling(){
    var currentTheme = document.documentElement.getAttribute("data-theme"); 

    var targetTheme = "light";
    if (currentTheme==="light"){ 
        targetTheme = "dark"; 
    }else{
        targetTheme = "light";
    }

    document.documentElement.setAttribute('data-theme', targetTheme); 

}
function icon(e){
	e.firstElementChild.classList.toggle("fa-sun");
}

function back(){
	if (lastletter == '.' || d.value == '') {
		dpcounter = 0;
	}
	opcounter = 0;
	d.value = d.value.substring(0,d.value.length-1);
}

res.addEventListener("click",clear);
function clear(){
	dpcounter = 0;
	opcounter = 0;
	d.value = '0';
}

for (let i = op.length-2; i >= 0; i--) {
	op[i].addEventListener("click",function(){
		dpcounter = 0;
		if (opcounter == 0) {
			d.value += this.id.substring(this.id.length-1,this.id.length);
			opcounter = 1;
		}else{
			d.value = d.value.substring(0,d.value.length-1);
			d.value += this.id.substring(this.id.length-1,this.id.length);
		}
	})
	
}

decpoint.addEventListener("click",function(){
	if (dpcounter == 0) {
		d.value += '.';
		dpcounter = 1;
	}
})

function equals(){
				
	d.value=eval(d.value);
	if( d.value == 'undefined' ){
		d.value = '0'
	}
	if( d.value == 'Infinity' ){
		d.value = '∞'
		setTimeout(function(){d.value='0'},1000)
	}
	if( d.value == '-Infinity' ){
		d.value = '-∞'
		setTimeout(function(){d.value='0'},1000)
	}
	if( d.value == 'NaN' ) {
		d.value = 'Error'
		setTimeout(function(){d.value='0'},700)
	}
}
					
// Removes leading zeros
var num = document.querySelectorAll('.num');
for(let i=0;i<num.length;i++){
	num[i].addEventListener("click", numClicked);
}
function numClicked(){
	if ( d.value == '0' || d.value=='' ) {
		d.value=this.id;
	}else{
		d.value+=this.id;
	}
	opcounter = 0;
}
