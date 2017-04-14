window.onload = function () {
	var on = document.getElementById("on");
	var stop = document.getElementById("stop");
	var boxes = document.getElementsByClassName("box");
	var colors = ["#000","#f00","#0f0","#00f","#ff0","#f0f","#0ff","#fe5","#999"];
	var timer = 0;
	
	on.onclick = newColor;
	stop.onclick = defaultColor;

    function newColor(){
		timer = setInterval(randomColor, 1000);
	}
	function randomColor(){
		var boxNum = norepeat();
		var colNum = norepeat();
		for (var i = 0; i < boxNum.length; i++) {
			boxes[boxNum[i]].style.backgroundColor= colors[colNum[i]];
		}
		var timerDelay = 0;
		timerDelay = setTimeout(clearColor, 980);
    }
    function defaultColor(){
    	clearInterval(timer);
    	clearColor();
    }	
    			
    function clearColor(){
		for (var i = 0; i < 9; i++) {
			boxes[i].style.backgroundColor= "#FEA500";
		}		
	}
	function norepeat(){
		var count=9; 
		var originalArray=new Array;
		var x = Math.floor(Math.random()*(count-2.5));
		for (var i=0;i<count;i++){ 
			originalArray[i]=i;
		}  
		originalArray.sort(function(){ return 0.5 - Math.random(); }); //正升序，负降序
		return originalArray.slice(x, (x + 3));
	}
}	