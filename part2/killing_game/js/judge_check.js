$(function(){
	//for off-line var roleArray = new Array();
	//for off-line var roleArray = [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1];
	//for off-line sessionStorage.setItem("playerroleArray",JSON.stringify(roleArray));  
	var rolearray = JSON.parse( sessionStorage.getItem("playerroleArray")); 
	if (rolearray === null) {
		location.href = "preference.HTML"
	}
	console.log(rolearray);
	//插入角色查看方块
	var rolename = ["水民", "杀手"];
	var $item1 =$("<div><h2><h3>1号</h3></h2></div>");
	for (var i = 0; i < rolearray.length ; i++) {
		var $item =$("<div><h2><span>" + (rolearray[i]?rolename[0]:rolename[1]) + "</span><h3>"+ (i + 1) + "号</h3></h2></div>");
		$item.clone().appendTo($(".judgecheck"));
	}
	$(".judgecheck>div").addClass("voteitem");
	//开始游戏按钮
	$(".goldbtn").bind("click",function newGame(){
	    location.href = "https://He2ID.github.io/17jnshu0305/part2/task1/task1_1.HTML";
	});
})