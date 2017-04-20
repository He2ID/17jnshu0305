//玩家人数设置
var playerNum;
var showNum = document.getElementById('showNum');
var rangeNum = document.getElementById('rangeNum');
function changeshow() {
	if (showNum.value >= 3 && showNum.value <= 18 && showNum.value%1===0) {
		playerNum = rangeNum.value = showNum.value;
	}else if (showNum.value < 3 || showNum.value > 18){
		alert ("输入【玩家人数】请在【4--18】之间" );
	}else if (showNum.value%1 !== 0){
		alert ("输入【玩家人数】要是整数啦！范围请在【4--18】之间" );
	}
}
function changerange() {
	playerNum = showNum.value = rangeNum.value;
}
function minusnum(){
	if (playerNum>3) {
		rangeNum.value = showNum.value = --playerNum;
	}
}
function plusnum(){
	if (playerNum<18) {
		rangeNum.value = showNum.value = ++playerNum;		
	}
}
//玩家角色分配 A--杀手 B--水民
var roleDetail=document.getElementById("roleDetail"); 
function playerrole(){
	if (!playerNum) {
		alert("请先设置玩家人数");
	}else{
		clearplayerole();
		var roleArray = new Array();
		var roleANum = Math.floor((playerNum/4));
		for (var i = 0; i < playerNum; i++) {
			if (i < roleANum) {
				roleArray[i] = 0;
			}else{
				roleArray[i] = 1;
			}
		}
		roleArray.sort(function(){ return 0.5 - Math.random(); });
		addchild(roleArray,roleDetail,"div");
		//数组存储
		sessionStorage.setItem("playerroleArray",JSON.stringify(roleArray));  
		console.log(roleArray);
	 	 //var am = JSON.parse( sessionStorage.getItem("playerroleArray"));  
	 	//console.log(am);
	}
}
//依数组baseArray 于fatherDom内插入 addElement
function addchild(baseArray,fatherDom,addElement){
	for (var i = 0; i < baseArray.length; i++) {
        var adddiv=document.createElement(addElement);  
        fatherDom.appendChild(adddiv);
		if(baseArray[i]){ 
	        adddiv.innerHTML= (i + 1) + "号水民";  
			adddiv.className = 'roleB';
		}else{
			 adddiv.innerHTML= (i + 1) + "号杀手"; 
			 adddiv.className = 'roleA';
		}
	}
}
//清空角色分配
function clearplayerole(){
    var divlist = roleDetail.getElementsByTagName("div");
    if(divlist.length>0) {
    	console.log("角色div需清空" + " divlist.length = " + divlist.length);
    	for (var i = divlist.length - 1; i >= 0; i--) {
    		roleDetail.removeChild(divlist[i]);
    	}
    }else{
    	return true;
    }
}

function getEnter(){  
    if(event.keyCode==13){ 
    	playerNum = showNum.value;
    	playerrole();
    }     
}   

//去发牌
function newgame(){
	if (sessionStorage.getItem("playerroleArray") === null) {
		alert("请设置【玩家人数】,【玩家配比】");
	}
	else{
		location.href = "check_role.HTML";
	}
}
window.onload = function () {
	//页面未关闭情况下跳回 恢复原角色分配
	if (sessionStorage.getItem("playerroleArray") === null) {return 1;}
		else{
			alert("已恢复本次角色分配。若要重新分配【玩家角色】，请点击【点击设置】");
			console.log("有原游戏内存，恢复原先游戏角色分配");
			var roleArrayold = JSON.parse( sessionStorage.getItem("playerroleArray"));
			addchild(roleArrayold,roleDetail,"div");
			playerNum = showNum.value = rangeNum.value = roleArrayold.length;
	}
}