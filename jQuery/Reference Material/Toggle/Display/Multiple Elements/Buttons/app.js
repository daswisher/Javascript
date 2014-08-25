var main = function(){
	$(".coffee-btn").click(function(){
		$(".content").hide();
		$(".contents-coffee").show();
	});

	$(".tea-btn").click(function(){
		$(".content").hide();
		$(".contents-tea").show();
	});

	$(".merchandise-btn").click(function(){
		$(".content").hide();
		$(".contents-merchandise").show();
	});

	$(".content").hide(); //Ensure elements are hidden when page opens
};

$(document).ready(main);
