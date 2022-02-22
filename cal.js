var d = document.getElementById('disp');
var toggle = document.getElementById("theme-toggle");
	
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
											d.value = d.value.substring(0,d.value.length-1);
							}
							
							function equals(){
											
											d.value=eval(d.value);
											if(d.value=='undefined'){
															d.value='0'
											}
											if(d.value=='Infinity'){
															d.value='∞'
															setTimeout(function(){d.value='0'},1000)
											}
											if(d.value=='-Infinity'){
															d.value='-∞'
															setTimeout(function(){d.value='0'},1000)
											}
											if (d.value=='NaN') {
															d.value='Error'
															setTimeout(function(){d.value='0'},700)
											}
						}
						
						// Removes leading zeros
						var num = document.querySelectorAll('.num');
						for(let i=0;i<num.length;i++){
						num[i].addEventListener("click", numClicked);
						}
						function numClicked(){
										if (d.value=='0'||d.value=='') {
														d.value=this.id;
										}else{
														d.value+=this.id;
										}
						}