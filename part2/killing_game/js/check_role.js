$(function(){
	//for off-line test var roleArray = new Array();
	//for off-line test var roleArray = [1,0,1,1,1];
	//for off-line test sessionStorage.setItem("playerroleArray",JSON.stringify(roleArray));  
	var rolearray = JSON.parse( sessionStorage.getItem("playerroleArray"));  
	console.log(rolearray);
	var clickNum = 0;
	//A--杀手 B--水民
	var $roleA =$("<p>杀手</p>");
	var $roleB =$("<p>水民</p>");
	var $hintA =$("<p>想办法杀水民，同时还要注意不要暴露自己</p>");
	var $hintB =$("<p>找出杀手，同时避免自己被投死</p>");
	$("section>button").click(function(){
		++clickNum;
		console.log("点击次数" + clickNum);
		if(clickNum%2==1){
			if (rolearray[Math.ceil(clickNum/2)]==0) {
				$(".rolecard").append($roleA)
					.append($hintA);
			}else{
				$(".rolecard").append($roleB)
					.append($hintB);
			}
			$(".rolecard>.rolenum").text(Math.ceil((clickNum + 1)/2));
			$(".rolecard>img").removeClass("rolemask")
				.addClass("roleimg")
				.attr("src", "img/role-content.png")
				.next().addClass("roletext1")
				.next().addClass("roletext2");
			$("section>button").text("隐藏并传递给"+ (Math.ceil(clickNum/2) + 1) +"号");	
			if ((clickNum + 1)/2==rolearray.length) {
				$("section>button").text("隐藏并传递给法官");
			}			
		}
		if(clickNum%2==0 && (clickNum/2) != rolearray.length){
				$(".rolecard>.rolenum").text(Math.ceil((clickNum+1)/2));
				$(".rolecard>img").removeClass("roleimg")
					.addClass("rolemask")
					.attr("src", "img/role-cover.png");
				$(".rolecard>p").remove();
				$("section>button").text("查看"+ (Math.ceil(clickNum/2)+1) +"号身份");
		}
		if((clickNum/2) == rolearray.length){
			location.href = "https://He2ID.github.io/17jnshu0305/part2/task1/task1_1.HTML"
		}
	});
});