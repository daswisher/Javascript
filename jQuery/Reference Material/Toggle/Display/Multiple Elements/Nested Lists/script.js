var main = function(){
	$(".coffee-menu").click(function(){
		$(".menu-contents").hide();
		$(".coffee-contents").show();
	});

	$(".tea-menu").click(function(){
		$(".menu-contents").hide();
		$(".tea-contents").show();
	});

	$(".test-menu").click(function(){
		$(".menu-contents").hide();
		$(".test-contents").show();
	});

	$(".test2-menu").click(function(){
		$(".menu-contents").hide();
		$(".test2-contents").show();
	});
	$(".menu-contents").hide();	
};

$(document).ready(main);
