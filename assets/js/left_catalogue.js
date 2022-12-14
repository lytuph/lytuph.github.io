<!--侧栏目录生成代码-->
$(document).ready(function() {
	$("h1,h2,h3,h4,h5,h6").each(function(i, item) {
		//获取标签的名字,h1,还是h2
		var tag = $(item).get(0).localName;
		//为该标签设置id属性
		$(item).attr("id", "wow" + i);
		//添加一个页内超链接,并设置class选择器
		$("#category").append('<div class="newh"><a class="new' + tag + '" href="#wow' + i + '">' +
			$(item).text() +
			'</a></div>');
		//为每一个标题超链接的class属性设置左边距
		$(".newh1").css("margin-left", "0em");
		$(".newh2").css("margin-left", "1em");
		$(".newh3").css("margin-left", "2em");
		$(".newh4").css("margin-left", "3em");
		$(".newh5").css("margin-left", "4em");
		$(".newh6").css("margin-left", "5em");
		$(".newh1").css("font-size", "1.5em");
		$(".newh2").css("font-size", "1.2em");
		$(".newh3").css("font-size", "1em");
		$(".newh4").css("font-size", "0.9em");
		$(".newh5").css("font-size", "0.8em");
		$(".newh1").css("font-weight", "bold");
		$(".newh2").css("font-weight", "bold");
	});
	//设置class选择器为.book-body的html内容
	$(".book-body").html($(".book-body").nextAll())
	$(".newh").on("click", function() {
		console.log($(this).children("a"));
		$(this).children("a")[0].click();
	});
});

// 展开或者折叠目录功能
function showOrCloseCategory() {
	var id = document.getElementById("category");
	var write = document.getElementById("write");
	//console.log(id.style.display);
	//如果展开了
	if (id.style.display == 'block') {
		//console.log("开始展开");
		id.style.display = 'none';
		write.style.float = "";
		write.style.left = "0em";
	}
	//如果被折叠了
	else if (id.style.display == 'none') {
		//console.log("开始折叠");
		id.style.display = 'block';
		write.style.float = "right";
		write.style.left = "1em";
	}
}
// 返回顶部功能
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}