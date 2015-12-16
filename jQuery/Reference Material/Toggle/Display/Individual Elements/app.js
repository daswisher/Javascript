var main = function(){
	$(".toggle-color").click(function(){
		$(".content").first().toggleClass("active-content");
	});
	
	$(".toggle-display").click(function(){
		$(".content").last().toggle();
	});
};

$(document).ready(main);
