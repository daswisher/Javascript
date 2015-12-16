var main = function(){
	$(".coffee-btn").hover(function(){
		$(".content").hide();
		$(".contents-coffee").show();
	});

	$(".tea-btn").hover(function(){
		$(".content").hide();
		$(".contents-tea").show();
	});

	$(".merchandise-btn").hover(function(){
		$(".content").hide();
		$(".contents-merchandise").show();
	});

	$(".content").hide(); //Ensure elements are hidden when page opens
};

$(document).ready(main);
