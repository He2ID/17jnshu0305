window.onload = function () {
	var navbaropen = document.getElementById("navbaropen");
	var navbartab = document.getElementById('navbartab');
	var tabtime=0;

	navbaropen.onclick = listshow;
	function listshow(){
		tabtime++;
		if(tabtime%2==1){
        	navbartab.style.display="block";
        }
        else{
        	navbartab.style.display="none";	
        }
    }

    var myaudio=document.getElementById("song"); 
    var songon=document.getElementById("songon"); 
    songon.onclick= playPause;
    function playPause(){ 
		if (myaudio.paused) 
		  myaudio.play(); 
		else 
		  myaudio.pause(); 
	}  	
}	